import os
from collections.abc import Generator
from pathlib import Path

from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import Session, sessionmaker

load_dotenv(Path(__file__).resolve().parents[1] / ".env")

engine = create_engine(os.environ["DATABASE_URL"], pool_pre_ping=True)
SessionLocal = sessionmaker(bind=engine)


def get_db() -> Generator[Session, None, None]:
    with SessionLocal() as session:
        yield session


# --------- OLD ---------
# from sqlalchemy import create_engine
# from sqlalchemy.orm import sessionmaker, declarative_base
# import os

# DEFAULT_DATABASE_URL = (
#     "mssql+pyodbc://@localhost\\AboutMe/AboutMe"
#     "?driver=ODBC+Driver+18+for+SQL+Server"
#     "&trusted_connection=yes"
#     "&TrustServerCertificate=yes"
# )

# TESTING_DATABASE_URL = (
#     "mssql+pyodbc://@localhost\\AboutMe/AboutMe_Testing"
#     "?driver=ODBC+Driver+18+for+SQL+Server"
#     "&trusted_connection=yes"
#     "&TrustServerCertificate=yes"
# )

# DATABASE_URL = os.getenv("DATABASE_URL", DEFAULT_DATABASE_URL)

# engine = create_engine(DATABASE_URL)
# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
# Base = declarative_base()


# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()
