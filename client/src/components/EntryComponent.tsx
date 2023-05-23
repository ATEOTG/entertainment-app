import BookmarkComponent from "./BookmarkComponent";
import EntryInformation from "./EntryInformation";

interface EntryComponentProps {
  title: string;
  year: number;
  category: string;
  rating: string;
  thumbnail: string;
  isBookmarked: boolean;
  key: string;
}

function EntryComponent(props: EntryComponentProps) {
  const imgPath = props.thumbnail.split("./assets/thumbnails/")[1];
  return (
    <div>
      <div className="entry-cont">
        <div className="entry-inner-div">
          <img
            className="entry-img"
            src={require(`../assets/thumbnails/${imgPath}`)}
            alt={`Thumbnail for ${props.title} ${props.category}`}
          />
          <BookmarkComponent />
        </div>
      </div>
      <div className="entry-text-cont">
        <EntryInformation
          trendingComp={false}
          title={props.title}
          year={props.year}
          category={props.category}
          rating={props.rating}
        />
      </div>
    </div>
  );
}

export default EntryComponent;
