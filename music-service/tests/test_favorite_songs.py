import pytest

from sqlalchemy.exc import IntegrityError
from app.models.music import YearlyList
from http import HTTPStatus as status


def test_empty_database(client):
    response = client.get("api/music/favorite-songs")
    assert response.status_code == status.OK
    assert response.json() == []


def test_year_without_songs(client, db_session):
    db_session.add(YearlyList(year=2000, comment="Test comment"))
    db_session.commit()

    response = client.get("api/music/favorite-songs")

    assert response.status_code == status.OK
    data = response.json()

    assert len(data) == 1
    assert data[0]["year"] == 2000
    assert data[0]["comment"] == "Test comment"
    assert data[0]["songs"] == []


def test_bad_year_low(db_session):
    db_session.add(YearlyList(year=200, comment="Test comment"))
    with pytest.raises(IntegrityError):
        db_session.flush()


def test_bad_year_high(db_session):
    db_session.add(YearlyList(year=2200, comment="Test comment"))
    with pytest.raises(IntegrityError):
        db_session.flush()
