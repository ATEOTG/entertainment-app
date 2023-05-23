import { useState, useEffect } from "react";
import EntryComponent from "../components/EntryComponent";
import Trending from "../components/Trending/Trending";
import { EntryObject } from "../interface";

function HomeAll() {
  const [allMediaData, setMediaData] = useState<EntryObject[]>([]);

  useEffect(() => {
    async function initGetMediaData() {
      const response = await fetch("/api/v1/home");
      const data = await response.json();

      setMediaData(data.data);
    }

    initGetMediaData();
  }, []);

  return (
    <div>
      <Trending />
      <h2 className="all-title">Recommended for you</h2>
      <div className="entry-display">
        {allMediaData.map((el) => {
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
