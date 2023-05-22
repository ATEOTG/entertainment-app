import EntryComponent from "../components/EntryComponent";
import Trending from "../components/Trending/Trending";

function HomeAll() {
  return (
    <div>
      <Trending />
      <h2 className="all-title">Recommended for you</h2>
      <div className="entry-display">
        <EntryComponent />
        <EntryComponent />
        <EntryComponent />
      </div>
    </div>
  );
}

export default HomeAll;
