import { useEffect, useState } from "react";
import BookmarkIcon from "./svg/BookmarkIcon";

interface BookMarkComponentProps {
  id: string;
  isBookmarked: boolean;
}
async function updateIsBookmark(id: string, isCurrentlyBookmarked: boolean) {
  await fetch(`/api/v1/home/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify({
      isBookmarked: isCurrentlyBookmarked,
    }),
  });
}
function BookmarkComponent(props: BookMarkComponentProps) {
  const [bookMarkedState, setBookMarkedState] = useState<boolean>(
    props.isBookmarked
  );

  useEffect(() => {
    setBookMarkedState(props.isBookmarked);
  }, [props.isBookmarked]);

  function bookMarkClickHandler() {
    updateIsBookmark(props.id, !props.isBookmarked);
    setBookMarkedState((prevState) => !prevState);
  }

  return (
    <div className="bookmark-cont" onClick={bookMarkClickHandler}>
      <div className="bookmark-circle">
        <BookmarkIcon isBookmarked={bookMarkedState} />
      </div>
    </div>
  );
}

export default BookmarkComponent;
