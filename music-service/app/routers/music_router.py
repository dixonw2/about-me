from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.orm import Session, selectinload

from app.database import get_db
from app.models.music import YearlyList, YearlyListWithSongsRead

router = APIRouter(prefix="/music/favorite-songs", tags=["favorite songs"])


@router.get("/", response_model=list[YearlyListWithSongsRead])
def get_every_list(db: Session = Depends(get_db)):
    statement = (
        select(YearlyList)
        .options(selectinload(YearlyList.songs))
        .order_by(YearlyList.year)
    )
    return db.scalars(statement).all()
