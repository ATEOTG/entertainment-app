import { Fragment } from "react";
import EntryComponent from "../components/EntryComponent";
import { HomeProps } from "../interface";
import useWindowWidth from "../hooks/use-window";

function HomeTV(props: HomeProps) {
  const { width } = useWindowWidth();
  const thumnbnailSize =
    width <= 767 ? "small" : width >= 768 && width < 1439 ? "medium" : "large";
  const userSearched = props.textInput.current?.value ? false : true;

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
      <div className="entry-display">
        {props.mediaData.entry.map((el) => {
          return (
            <div key={el.id + "tv"}>
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

export default HomeTV;
