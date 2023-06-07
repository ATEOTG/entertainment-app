import { Fragment, useEffect, useState } from "react";
import BookmarkIcon from "./svg/BookmarkIcon";

interface BookMarkComponentProps {
  id: string;
  isBookmarked: boolean;
  userId: string;
}
async function updateIsBookmark(
  id: string,
  isCurrentlyBookmarked: boolean,
  userId: string
) {
  try {
    await fetch(`/api/v1/entries/bookmarked/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        id: userId,
        isBookmarked: isCurrentlyBookmarked,
      }),
    });
  } catch (err) {}
}
function BookmarkComponent(props: BookMarkComponentProps) {
  const [bookMarkedState, setBookMarkedState] = useState<boolean>(
    props.isBookmarked
  );
  const [bookmarkError, setBookmarkError] = useState<boolean>(false);

  useEffect(() => {
    setBookMarkedState(props.isBookmarked);
  }, [props.isBookmarked]);

  function bookMarkClickHandler() {
    if (props.userId === "") {
      setBookmarkError(true);
      setTimeout(() => {
        setBookmarkError(false);
      }, 1000);
      return;
    }
    updateIsBookmark(props.id, !props.isBookmarked, props.userId);
    setBookMarkedState((prevState) => !prevState);
  }

  return (
    <Fragment>
      {!bookmarkError ? (
        <Fragment></Fragment>
      ) : (
        <div className="auth-confirmation--error">
          <p>Log in to Bookmark!</p>
        </div>
      )}

      <div className="bookmark-cont" onClick={bookMarkClickHandler}>
        <div className="bookmark-circle">
          <BookmarkIcon isBookmarked={bookMarkedState} />
        </div>
      </div>
    </Fragment>
  );
}

export default BookmarkComponent;
