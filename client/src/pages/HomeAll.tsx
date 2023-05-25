import EntryComponent from "../components/EntryComponent";
import Trending from "../components/Trending/Trending";
import { HomeProps } from "../interface";

function HomeAll(props: HomeProps) {
  return (
    <div>
      <Trending />
      <h2 className="all-title">Recommended for you</h2>
      <div className="entry-display">
        {props.mediaData.map((el) => {
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
