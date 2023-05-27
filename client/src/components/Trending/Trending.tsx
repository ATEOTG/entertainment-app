import TrendingComponent from "./TrendingComponent";
import { EntryObject } from "../../interface";

export interface TrendingProps {
  mediaData: { entry: EntryObject[]; length: number };
}

function Trending(props: TrendingProps) {
  const trendingData = props.mediaData.entry.filter((el) => el.isTrending);

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
            key={el.id + "trending"}
            id={el.id}
          />
        );
      })}
    </div>
  );
}

export default Trending;
