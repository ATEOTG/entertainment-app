import art1 from "../assets/thumbnails/1998/trending/small.jpg";
import BookmarkComponent from "./BookmarkComponent";
import EntryInformation from "./EntryInformation";

function EntryComponent() {
  return (
    <div>
      <div className="entry-cont">
        <div className="entry-inner-div">
          <img className="entry-img" src={art1} alt="" />
          <BookmarkComponent />
        </div>
      </div>
      <div className="entry-text-cont">
        <EntryInformation trendingComp={false} />
      </div>
    </div>
  );
}

export default EntryComponent;
