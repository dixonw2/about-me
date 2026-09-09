import os
import pytest

from pathlib import Path
from dotenv import load_dotenv
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.engine import make_url
from sqlalchemy.orm import Session

load_dotenv(Path(__file__).resolve().parents[1] / ".env.test")

test_url = os.environ["TEST_DATABASE_URL"]

# Refuse to run against an unexpected database.
if make_url(test_url).database != "music_test":
    raise RuntimeError("Tests require the music_test database")

# Set this before importing the app: database.py creates its engine
# during import. This keeps that engine pointed at the test database too.
os.environ["DATABASE_URL"] = test_url

from app.database import get_db
from app.main import app


@pytest.fixture(scope="session")
def test_engine():
    engine = create_engine(test_url, pool_pre_ping=True)
    try:
        yield engine
    finally:
        engine.dispose()


@pytest.fixture
def db_session(test_engine):
    with test_engine.connect() as connection:
        transaction = connection.begin()

        try:
            with Session(
                bind=connection,
                join_transaction_mode="create_savepoint",
            ) as session:
                yield session
        finally:
            transaction.rollback()


@pytest.fixture
def client(db_session):
    def override_get_db():
        yield db_session

    previous_overrides = app.dependency_overrides.copy()
    app.dependency_overrides[get_db] = override_get_db

    try:
        with TestClient(app) as test_client:
            yield test_client
    finally:
        app.dependency_overrides.clear()
        app.dependency_overrides.update(previous_overrides)
