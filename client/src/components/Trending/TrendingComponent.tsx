import art1 from "../../assets/thumbnails/1998/trending/small.jpg";
import BookmarkComponent from "../BookmarkComponent";
import EntryInformation from "../EntryInformation";

function TrendingComponent() {
  return (
    <div className="trending-comp">
      <div className="trending-cont">
        <img className="trending-img" src={art1} alt="" />
        <BookmarkComponent />
        <div className="trending-text-cont">
          <EntryInformation trendingComp={true} />
        </div>
      </div>
    </div>
  );
}

export default TrendingComponent;
