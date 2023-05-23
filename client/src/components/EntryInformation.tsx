import { Fragment } from "react";
import NavMoviesIcon from "./svg/NavMoviesIcon";
import NavTvIcon from "./svg/NavTvIcon";

interface EntryInformationProps {
  trendingComp: boolean;
  title: string;
  year: number;
  category: string;
  rating: string;
}

function EntryInformation(props: EntryInformationProps) {
  return (
    <Fragment>
      {props.trendingComp ? (
        <div className="margin-top-entry"></div>
      ) : (
        <div></div>
      )}
      <div className="entry-information">
        <div className="entry-information__text">
          <ul>
            <p className="entry-information__text-year">{props.year}</p>
            <li>
              &bull;
              <div className="entry-information__text-category-cont">
                {props.category === "Movie" ? <NavMoviesIcon /> : <NavTvIcon />}

                <p className="entry-information__text-category">
                  {props.category}
                </p>
              </div>
            </li>
            <li>
              &bull;
              <p className="entry-information__text-rating">{props.rating}</p>
            </li>
          </ul>
        </div>
        <p className="entry-information__title">{props.title}</p>
      </div>
    </Fragment>
  );
}

export default EntryInformation;
