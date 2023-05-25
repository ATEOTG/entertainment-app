import { Fragment } from "react";
import EntryComponent from "../components/EntryComponent";
import Trending from "../components/Trending/Trending";
import { HomeProps } from "../interface";

function HomeAll(props: HomeProps) {
  const isAll = props.mediaData.length === props.mediaData.entry.length;
  return (
    <div>
      {isAll ? <Trending /> : <Fragment></Fragment>}
      {isAll ? (
        <h2 className="all-title">Recommended for you</h2>
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
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomeAll;
