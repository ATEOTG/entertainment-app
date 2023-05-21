import { Fragment } from "react";
import BookmarkIconEmpty from "./BookmarkIconEmpty";
import BookmarkIconFull from "./BookmarkIconFull";

function BookmarkIcon() {
  const testIcon = true;

  return (
    <Fragment>
      {testIcon ? <BookmarkIconEmpty /> : <BookmarkIconFull />}
    </Fragment>
  );
}

export default BookmarkIcon;
