import pytest

from sqlalchemy.exc import IntegrityError
from app.models.music import YearlyList, Event, Artist, EventArtists
from http import HTTPStatus as status

from datetime import date, timedelta


# region Favorite Songs
def test_empty_favorite_songs_database(client):
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
    assert not any(data[0]["songs"])


def test_bad_year_low(db_session):
    db_session.add(YearlyList(year=200, comment="Test comment"))
    with pytest.raises(IntegrityError):
        db_session.flush()


def test_bad_year_high(db_session):
    db_session.add(YearlyList(year=2200, comment="Test comment"))
    with pytest.raises(IntegrityError):
        db_session.flush()


# endregion


# region Events
def get_test_events(num_events: int = 1, num_artists: int = 0) -> list[Event]:
    artists = [
        Artist(name=f"Test Artist {artist_index}")
        for artist_index in range(num_artists)
    ]

    return [
        Event(
            name=f"Test Event {event_index}",
            headliner=f"Test Headliner {event_index}",
            event_date=date(2026, 9, 10) + timedelta(days=event_index),
            venue_name=f"Test Venue {event_index}",
            artists=[
                EventArtists(
                    artist=artist,
                    set_order=set_order,
                )
                for set_order, artist in enumerate(artists, start=1)
            ],
        )
        for event_index in range(num_events)
    ]


def test_empty_events_database(client):
    response = client.get("api/music/live-events")
    assert response.status_code == status.OK
    assert response.json() == []


def test_event_without_artists(client, db_session):
    db_session.add_all(get_test_events())
    db_session.commit()

    response = client.get("api/music/live-events")
    data = response.json()
    assert response.status_code == status.OK
    assert len(data) == 1
    assert data[0]["name"] == "Test Event 0"
    assert data[0]["headliner"] == "Test Headliner 0"
    assert data[0]["eventDate"] == "2026-09-10"
    assert data[0]["venueName"] == "Test Venue 0"
    assert not any(data[0]["artists"])


def test_event_with_single_artist(client, db_session):
    db_session.add_all(get_test_events(num_artists=1))
    db_session.commit()

    response = client.get("api/music/live-events")
    data = response.json()
    assert response.status_code == status.OK
    assert len(data) == 1
    assert data[0]["name"] == "Test Event 0"
    assert data[0]["headliner"] == "Test Headliner 0"
    assert data[0]["eventDate"] == "2026-09-10"
    assert data[0]["venueName"] == "Test Venue 0"
    assert len(data[0]["artists"]) == 1


def test_multiple_events_with_multiple_artists(client, db_session):
    num_events = 3
    num_artists = 5
    test_index = 0
    db_session.add_all(get_test_events(num_events=num_events, num_artists=num_artists))
    db_session.commit()

    response = client.get("api/music/live-events")
    data = response.json()
    assert response.status_code == status.OK
    assert len(data) == num_events
    assert data[test_index]["name"] == f"Test Event {test_index}"
    assert data[test_index]["headliner"] == f"Test Headliner {test_index}"
    assert data[test_index]["eventDate"] == f"2026-09-{10 + test_index}"
    assert data[test_index]["venueName"] == f"Test Venue {test_index}"
    assert len(data[test_index]["artists"]) == num_artists


def test_live_events_artists(client, db_session):
    num_artists = 5
    num_events = 2
    test_index = 0
    db_session.add_all(get_test_events(num_events=num_events, num_artists=num_artists))
    db_session.commit()

    response = client.get("api/music/live-events/artists")
    data = response.json()
    assert response.status_code == status.OK
    assert any(data)
    assert len(data) == num_artists
    assert len(data[test_index]["events"]) == num_events
    assert data[test_index]["name"] == f"Test Artist {test_index}"


# endregion
