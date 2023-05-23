import EntryComponent from "../components/EntryComponent";
import { useEffect, useState } from "react";
import { EntryObject } from "../interface";

function HomeTV() {
  const [tvData, setTvData] = useState<EntryObject[]>([]);

  useEffect(() => {
    async function initGetTv() {
      const response = await fetch("/api/v1/home/tv");
      const data = await response.json();

      setTvData(data.data);
      console.log(data.data);
    }

    initGetTv();
  }, []);
  return (
    <div className="entry-display">
      {tvData.map((el) => {
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

export default HomeTV;
