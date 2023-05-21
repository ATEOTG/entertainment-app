import { Fragment } from "react";
import NavMoviesIcon from "./svg/NavMoviesIcon";

interface EntryInformationProps {
  trendingComp: boolean;
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
            <p className="entry-information__text-year">2019</p>
            <li>
              &bull;
              <div className="entry-information__text-category-cont">
                <NavMoviesIcon />
                <p className="entry-information__text-category">Movies</p>
              </div>
            </li>
            <li>
              &bull;
              <p className="entry-information__text-rating">PG</p>
            </li>
          </ul>
        </div>
        <p className="entry-information__title">Beyond Earth</p>
      </div>
    </Fragment>
  );
}

export default EntryInformation;
