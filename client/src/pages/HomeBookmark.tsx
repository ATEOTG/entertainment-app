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
            <div key={el.id + "bookmark"}>
              <EntryComponent
                title={el.title}
                year={el.year}
                category={el.category}
                rating={el.rating}
                thumbnail={el.thumbnail.regular.small}
                isBookmarked={el.isBookmarked}
                id={el.id}
              />
            </div>
          );
        })}
      </div>
      <h2 className="title">Bookmarked TV Series</h2>
      <div className="entry-display">
        {tvEntries.map((el) => {
          return (
            <div key={el.id + "bookmark"}>
              <EntryComponent
                title={el.title}
                year={el.year}
                category={el.category}
                rating={el.rating}
                thumbnail={el.thumbnail.regular.small}
                isBookmarked={el.isBookmarked}
                id={el.id}
              />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default HomeBookmark;
