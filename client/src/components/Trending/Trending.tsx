import { useEffect, useState } from "react";
import TrendingComponent from "./TrendingComponent";
import { EntryObject } from "../../interface";

function Trending() {
  const [trendingData, setTrendingData] = useState<EntryObject[]>([]);

  useEffect(() => {
    async function initTrending() {
      const response = await fetch("/api/v1/home/trending");
      const data = await response.json();

      setTrendingData(data.data);
    }

    initTrending();
  }, []);

  return (
    <div className="trending-all-cont">
      {trendingData.map((el) => {
        return (
          <TrendingComponent
            title={el.title}
            year={el.year}
            category={el.category}
            rating={el.rating}
            isTrending={el.isTrending}
            isBookmarked={el.isBookmarked}
            thumbnail={el.thumbnail.trending.small}
            key={el.id}
          />
        );
      })}
    </div>
  );
}

export default Trending;
