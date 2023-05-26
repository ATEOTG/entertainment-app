import { Fragment } from "react";
import EntryComponent from "../components/EntryComponent";
import { HomeProps } from "../interface";

function HomeMovies(props: HomeProps) {
  const isAll = props.mediaData.length === props.mediaData.entry.length;

  return (
    <Fragment>
      {isAll ? (
        <Fragment></Fragment>
      ) : (
        <h2 className="all-title">
          Found {props.mediaData.entry.length} results for '
          {props.textInput.current!.value}'
        </h2>
      )}
      <div className="entry-display">
        {props.mediaData.entry.map((el) => {
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

export default HomeMovies;
