import EntryComponent from "../components/EntryComponent";
import { useState, useEffect } from "react";
import { EntryObject } from "../interface";

function HomeMovies() {
  const [movieData, setMovieData] = useState<EntryObject[]>([]);

  useEffect(() => {
    async function initGetMovies() {
      const response = await fetch("/api/v1/home/movies");
      const data = await response.json();

      setMovieData(data.data);
      console.log(data.data);
    }

    initGetMovies();
  }, []);
  return (
    <div className="entry-display">
      {movieData.map((el) => {
        return (
          <EntryComponent
            title={el.title}
            year={el.year}
            category={el.category}
            rating={el.rating}
            thumbnail={el.thumbnail.regular.small}
            isBookmarked={el.isBookmarked}
            key={el.id}
          />
        );
      })}
    </div>
  );
}

export default HomeMovies;
