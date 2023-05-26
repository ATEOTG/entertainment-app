import { Fragment } from "react";
import BookmarkIconEmpty from "./BookmarkIconEmpty";
import BookmarkIconFull from "./BookmarkIconFull";

interface BookMarkIconProps {
  isBookmarked: boolean;
}

function BookmarkIcon(props: BookMarkIconProps) {
  return (
    <Fragment>
      {props.isBookmarked ? <BookmarkIconFull /> : <BookmarkIconEmpty />}
    </Fragment>
  );
}

export default BookmarkIcon;
