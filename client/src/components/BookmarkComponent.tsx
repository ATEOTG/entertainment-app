import { useState } from "react";
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

  function bookMarkClickHandler() {
    setBookMarkedState(!bookMarkedState);
    updateIsBookmark(props.id, !bookMarkedState);
    console.log(bookMarkedState);
  }

  if (props.id === "6470ff2e471b3f3dd08d6b0e") console.log(bookMarkedState);
  return (
    <div className="bookmark-cont" onClick={bookMarkClickHandler}>
      <div className="bookmark-circle">
        <BookmarkIcon isBookmarked={bookMarkedState} />
      </div>
    </div>
  );
}

export default BookmarkComponent;
