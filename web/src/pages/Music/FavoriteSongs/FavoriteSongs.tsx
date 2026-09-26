import { useEffect, useState } from "react";
import styles from "./FavoriteSongs.module.css";
import type { FavoriteSongsList } from "@/types/FavoriteSongsList";
import ListEntry from "./components/ListEntry/ListEntry";
import YearsButtonsContainer from "./components/YearsButtonContainer/YearsButtonsContainer";
import YearButton from "./components/YearButton/YearButton";
import FavoritesTitleContainer from "./components/FavoritesTitleContainer/FavoritesTitleContainer";
import FavoritesTitle from "./components/FavoritesTitle/FavoritesTitle";
import FavoritesSubtitle from "./components/FavoritesSubtitle/FavoritesSubtitle";
import FavoritesInfo from "./components/FavoritesInfoContainer/FavoritesInfoContainer";

const FavoriteSongs = () => {
  const [favoritesList, setFavoritesList] = useState<FavoriteSongsList[]>([]);
  const [selectedYear, setSelectedYear] = useState<number>(0);

  const [loading, setLoading] = useState(true);

  const selectedEntry: FavoriteSongsList | undefined = favoritesList.find(
    (list) => list.year === selectedYear,
  );

  useEffect(() => {
    const getLists = async () => {
      const response = await fetch("/api/music/favorite-songs");
      const data = await response.json();
      setFavoritesList(data);
      setLoading(false);
    };

    getLists();
  }, []);

  const getYears = (): number[] => {
    return favoritesList.map((list) => list.year);
  };

  return (
    <main className={styles.container}>
      {selectedYear === 0 && (
        <FavoritesTitleContainer>
          <FavoritesTitle>Favorite Songs of the Year</FavoritesTitle>
          <FavoritesSubtitle>
            Thirteen favorite songs from each year, one song per artist.
          </FavoritesSubtitle>
        </FavoritesTitleContainer>
      )}
      {/* <div style={{ visibility: "hidden", height: "0" }}></div> */}
      <div>
        <YearsButtonsContainer>
          {loading ? (
            <em>Loading...</em>
          ) : (
            getYears().map((year) => (
              <YearButton
                key={`button-${year}`}
                onClick={() =>
                  selectedYear === year
                    ? setSelectedYear(0)
                    : setSelectedYear(year)
                }
              >
                {year}
              </YearButton>
            ))
          )}
        </YearsButtonsContainer>
        {selectedEntry ? (
          <ListEntry key={selectedYear} entry={selectedEntry} />
        ) : (
          <FavoritesInfo>
            <p>
              One of my best friends has been creating a list of his top
              thirteen songs every year for over a decade, so I decided to do it
              too! Every year since 2017, I've compiled a list of thirteen songs
              released that year that I found myself listening to the most
              often. The rules are:
            </p>
            <ul>
              <li>Exactly 13 songs are allowed.</li>
              <li>
                Every song must be released that year.
                <ul>
                  <li>
                    If a song was released as a single prior to that year BUT it
                    was on an album released that year, AND I've never heard it
                    before that year, then it is allowed. Otherwise, it can't be
                    added.
                  </li>
                </ul>
              </li>
              <li>
                No more than one song per band/artist for each year. In 2017 I
                added two songs by The Maine to the list, and since then I've
                decided that it makes the list unbalanced, because if a
                band/artist releases an album I really enjoy, then it can be
                tempting to add half of the album to the list.
              </li>
            </ul>
            <p>
              This is something I've really enjoyed doing every year! In January
              I'll create a new playlist, and throughout the year I'll
              periodically add new songs I discover until about mid-December
              when I wittle the playlist down to 13 songs. Sometimes I find
              myself listening to the same few bands or genres for a while, so
              this list helps keep me motivated to find new music throughout the
              year.
            </p>
          </FavoritesInfo>
        )}
      </div>
    </main>
  );
};

export default FavoriteSongs;
