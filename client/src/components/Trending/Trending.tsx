import TrendingComponent from "./TrendingComponent";
import { EntryObject } from "../../interface";
import useWindowWidth from "../../hooks/use-window";

export interface TrendingProps {
  mediaData: {
    entry: EntryObject[];
    length: number;
    user: { _id: string; bookmarked: [string]; email: string } | null;
  };
}

function Trending(props: TrendingProps) {
  const { width } = useWindowWidth();
  const thumnbnailSize = width <= 767 ? "small" : "large";
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
            thumbnail={el.thumbnail.trending[thumnbnailSize]}
            key={el.id + "trending"}
            id={el.id}
            userId={props.mediaData.user!._id}
          />
        );
      })}
    </div>
  );
}

export default Trending;
