import EntryComponent from "../components/EntryComponent";
import { HomeProps } from "../interface";

function HomeMovies(props: HomeProps) {
  return (
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
  );
}

export default HomeMovies;
