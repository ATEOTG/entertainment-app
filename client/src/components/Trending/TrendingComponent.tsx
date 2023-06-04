import BookmarkComponent from "../BookmarkComponent";
import EntryInformation from "../EntryInformation";

interface TrendingComponentProps {
  key: string;
  title: string;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
  thumbnail: string;
  id: string;
  userId: string;
}

function TrendingComponent(props: TrendingComponentProps) {
  const imgPath = props.thumbnail.split("./assets/thumbnails/")[1];

  return (
    <div className="trending-comp">
      <div className="trending-cont">
        <img
          className="trending-img"
          src={require(`../../assets/thumbnails/${imgPath}`)}
          alt={`Thumbnail of the ${props.title} ${props.category}`}
        />
        <BookmarkComponent
          isBookmarked={props.isBookmarked}
          id={props.id}
          userId={props.userId}
        />
        <div className="trending-text-cont">
          <EntryInformation
            trendingComp={true}
            title={props.title}
            year={props.year}
            category={props.category}
            rating={props.rating}
          />
        </div>
      </div>
    </div>
  );
}

export default TrendingComponent;
