from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware

from typing import Annotated

from fastapi import Depends
from sqlmodel import select, col
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.music.song import Song, SongRead

app = FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Base.metadata.create_all(bind=engine)

# app.include_router(routers.favorite_songs_router, prefix="/api")
# app.include_router(routers.triple_triad_router, prefix="/api")
# app.include_router(routers.events_router, prefix="/api")
# app.include_router(routers.blog_router, prefix="/api")


# @app.get("/api", tags=["root"])
# async def get_root():
#     return {"message": "Howdy from da API"}


@app.get("/api", tags=["root"], response_model=list[SongRead])
def get_root(db: Annotated[Session, Depends(get_db)]):
    statement = select(Song).order_by(col(Song.id))
    return db.scalars(statement).all()
