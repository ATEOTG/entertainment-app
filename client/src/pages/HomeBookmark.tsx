import { Fragment } from "react";
import { HomeProps } from "../interface";
import EntryComponent from "../components/EntryComponent";
import useWindowWidth from "../hooks/use-window";

function HomeBookmark(props: HomeProps) {
  const { width } = useWindowWidth();
  const thumnbnailSize =
    width <= 767 ? "small" : width >= 768 && width < 1439 ? "medium" : "large";
  const userSearched = props.textInput.current?.value ? false : true;

  const movieEntries = props.mediaData.entry.filter(
    (el) => el.category === "Movie"
  );
  const tvEntries = props.mediaData.entry.filter(
    (el) => el.category === "TV Series"
  );

  return (
    <Fragment>
      {userSearched ? (
        <Fragment></Fragment>
      ) : (
        <h2 className="all-title">
          Found {props.mediaData.entry.length} results for '
          {props.textInput.current?.value}'
        </h2>
      )}

      <h2 className="title" id="title-bookmark-movies">
        Bookmarked Movies
      </h2>

      <div className="entry-display">
        {movieEntries.map((el) => {
          return (
            <div key={el.id + "bookmark"}>
              <EntryComponent
                title={el.title}
                year={el.year}
                category={el.category}
                rating={el.rating}
                thumbnail={el.thumbnail.regular[thumnbnailSize]}
                isBookmarked={el.isBookmarked}
                id={el.id}
                userId={props.mediaData.user._id}
              />
            </div>
          );
        })}
      </div>

      <h2 className="title" id="title-bookmark-tv">
        Bookmarked TV Series
      </h2>

      <div className="entry-display">
        {tvEntries.map((el) => {
          return (
            <div key={el.id + "bookmark"}>
              <EntryComponent
                title={el.title}
                year={el.year}
                category={el.category}
                rating={el.rating}
                thumbnail={el.thumbnail.regular[thumnbnailSize]}
                isBookmarked={el.isBookmarked}
                id={el.id}
                userId={props.mediaData.user._id}
              />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default HomeBookmark;
