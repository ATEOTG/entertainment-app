import { Fragment } from "react";
import EntryComponent from "../components/EntryComponent";
import Trending from "../components/Trending/Trending";
import { HomeProps } from "../interface";

function HomeAll(props: HomeProps) {
  const userSearched = props.textInput.current?.value ? false : true;
  return (
    <div>
      {userSearched ? (
        <Trending mediaData={props.mediaData} />
      ) : (
        <Fragment></Fragment>
      )}
      {userSearched ? (
        <h2 className="all-title">Recommended for you</h2>
      ) : (
        <h2 className="all-title">
          Found {props.mediaData.entry.length} results for '
          {props.textInput.current?.value}'
        </h2>
      )}

      <div className="entry-display">
        {props.mediaData.entry.map((el) => {
          return (
            <div key={el.id + "all"}>
              <EntryComponent
                title={el.title}
                year={el.year}
                category={el.category}
                rating={el.rating}
                thumbnail={el.thumbnail.regular.small}
                isBookmarked={el.isBookmarked}
                id={el.id}
                userId={props.mediaData.user._id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeAll;
