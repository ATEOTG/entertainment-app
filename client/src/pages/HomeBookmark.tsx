import { Fragment } from "react";
import { HomeProps } from "../interface";
import EntryComponent from "../components/EntryComponent";

function HomeBookmark(props: HomeProps) {
  const movieEntries = props.mediaData.entry.filter(
    (el) => el.category === "Movie"
  );
  const tvEntries = props.mediaData.entry.filter(
    (el) => el.category === "TV Series"
  );

  return (
    <Fragment>
      <h2 className="title">Bookmarked Movies</h2>
      <div className="entry-display">
        {movieEntries.map((el) => {
          return (
            <EntryComponent
              title={el.title}
              year={el.year}
              category={el.category}
              rating={el.rating}
              thumbnail={el.thumbnail.regular.small}
              isBookmarked={el.isBookmarked}
              key={el.id}
              id={el.id}
            />
          );
        })}
      </div>
      <h2 className="title">Bookmarked TV Series</h2>
      <div className="entry-display">
        {tvEntries.map((el) => {
          return (
            <EntryComponent
              title={el.title}
              year={el.year}
              category={el.category}
              rating={el.rating}
              thumbnail={el.thumbnail.regular.small}
              isBookmarked={el.isBookmarked}
              key={el.id}
              id={el.id}
            />
          );
        })}
      </div>
    </Fragment>
  );
}

export default HomeBookmark;
