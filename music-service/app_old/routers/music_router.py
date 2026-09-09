from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import select, col
from sqlalchemy.orm import Session, selectinload

from app.models.music.favorite_songs_of_year import (
    Song,
    SongRead,
    YearlyList,
    YearlyListRead,
    YearlyListWithSongsRead,
)
from app.database import get_db

router = APIRouter(prefix="/music/favorite-songs", tags=["favorite songs"])


@router.get(
    "/",
    response_model=list[YearlyListWithSongsRead],
    description="Get every year's list with songs",
)
async def get_every_list(db: Session = Depends(get_db)):
    statement = (
        select(YearlyList)
        .options(selectinload(YearlyList.songs))  # pyright: ignore[reportArgumentType]
        .order_by(col(YearlyList.year))
    )
    return db.scalars(statement).all()


@router.get(
    "/songs",
    response_model=list[SongRead],
    description="Get favorite songs for every year",
)
async def get_favorite_songs(db: Session = Depends(get_db)):
    return db.scalars(select(Song)).all()


@router.get(
    "/lists", response_model=list[YearlyListRead], description="Get each lists' entry"
)
async def get_favorite_songs_lists(db: Session = Depends(get_db)):
    return db.scalars(select(YearlyList)).all()
