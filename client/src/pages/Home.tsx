import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import SearchForm from "../components/Form/SearchForm";
import HomeAll from "./HomeAll";
import HomeMovies from "./HomeMovies";
import HomeTV from "./HomeTV";
import HomeBookmark from "./HomeBookmark";
import { Fragment, useEffect, useRef, useState } from "react";
import { EntryObject } from "../interface";
import NotFound from "../components/NotFound";

function userInitBookmark(data: any, user: { bookmarked: [] }) {
  for (let i = 0; i < data.length; i++) {
    for (let k = 0; k < user.bookmarked.length; k++) {
      if (data[i].id === user.bookmarked[k]) {
        data[i].isBookmarked = true;
      }
    }
  }
}

async function initGetMediaData(
  url: string,
  searchValue: string,
  setState: Function
) {
  const searchString = searchValue.toLowerCase();
  const response = await fetch(url, {
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await response.json();
  const user = data.user ? data.user : { _id: "", email: "", bookmarked: [] };
  const length = data.data.length;
  if (user) userInitBookmark(data.data, user);
  if (searchString.trim() === "") {
    if (
      url ===
      "https://entertainment-app-api.vercel.app/api/v1/entries/bookmarked"
    ) {
      data.data = data.data.filter((el: EntryObject) => el.isBookmarked);
    }
    setState({ entry: data.data, length, user });
  } else {
    if (
      url ===
      "https://entertainment-app-api.vercel.app/api/v1/entries/bookmarked"
    ) {
      data.data = data.data.filter((el: EntryObject) => el.isBookmarked);
    }
    data.data = data.data.filter((el: EntryObject) =>
      el.title.toLowerCase().includes(searchString.toLowerCase())
    );
    setState({ entry: data.data, length, user });
  }
}

function Home() {
  const textInputRef = useRef<HTMLInputElement | null>(null);
  const [allMediaData, setMediaData] = useState<{
    entry: EntryObject[];
    length: number;
    user: { _id: string; bookmarked: [string]; email: string };
  }>({ entry: [], length: 0, user: { _id: "", bookmarked: [""], email: "" } });
  const [movieData, setMovieData] = useState<{
    entry: EntryObject[];
    length: number;
    user: { _id: string; bookmarked: [string]; email: string };
  }>({ entry: [], length: 0, user: { _id: "", bookmarked: [""], email: "" } });
  const [tvData, setTvData] = useState<{
    entry: EntryObject[];
    length: number;
    user: { _id: string; bookmarked: [string]; email: string };
  }>({ entry: [], length: 0, user: { _id: "", bookmarked: [""], email: "" } });
  const [bookmarkData, setBookmarkData] = useState<{
    entry: EntryObject[];
    length: number;
    user: { _id: string; bookmarked: [string]; email: string };
  }>({ entry: [], length: 0, user: { _id: "", bookmarked: [""], email: "" } });

  const location = useLocation();
  const path = location.pathname;

  const titleText: string =
    path === "/home/all"
      ? "Trending"
      : path === "/home/movies"
      ? "Movies"
      : path === "/home/television"
      ? "TV Series"
      : "";

  const userIds = [
    allMediaData.user._id,
    movieData.user._id,
    tvData.user._id,
    bookmarkData.user._id,
  ];

  const isLoggedIn = (() => {
    for (let i = 0; i < userIds.length; i++) {
      // eslint-disable-next-line
      if (userIds[i] != "") return true;
    }
    return false;
  })();

  function onSubmitInputHandler(event: React.FormEvent) {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    if (path === "/home/all")
      initGetMediaData(
        "https://entertainment-app-api.vercel.app/api/v1/entries",
        enteredText,
        setMediaData
      );
    else if (path === "/home/movies")
      initGetMediaData(
        "https://entertainment-app-api.vercel.app/api/v1/entries/movie",
        enteredText,
        setMovieData
      );
    else if (path === "/home/television")
      initGetMediaData(
        "https://entertainment-app-api.vercel.app/api/v1/entries/tv",
        enteredText,
        setTvData
      );
    else if (path === "/home/bookmark")
      initGetMediaData(
        "https://entertainment-app-api.vercel.app/api/v1/entries/bookmarked",
        enteredText,
        setBookmarkData
      );
  }
  useEffect(() => {
    if (path === "/home/all") {
      initGetMediaData(
        "https://entertainment-app-api.vercel.app/api/v1/entries",
        "",
        setMediaData
      );
    } else if (path === "/home/movies") {
      initGetMediaData(
        "https://entertainment-app-api.vercel.app/api/v1/entries/movie",
        "",
        setMovieData
      );
    } else if (path === "/home/television") {
      initGetMediaData(
        "https://entertainment-app-api.vercel.app/api/v1/entries/tv",
        "",
        setTvData
      );
    } else if (path === "/home/bookmark") {
      initGetMediaData(
        "https://entertainment-app-api.vercel.app/api/v1/entries/bookmarked",
        "",
        setBookmarkData
      );
    }
    textInputRef.current!.value = "";
  }, [path]);

  return (
    <div className="home-cont">
      <Navigation isLoggedIn={isLoggedIn} />
      <div className="home-cont__desktop">
        <SearchForm
          pathText={path}
          textRef={textInputRef}
          onSubmitHandler={onSubmitInputHandler}
        />
        <div className="home-result-cont">
          {textInputRef.current?.value === "" ? (
            <h2 className="title">{titleText}</h2>
          ) : (
            <Fragment></Fragment>
          )}

          <Routes>
            <Route
              path="all"
              element={
                <HomeAll textInput={textInputRef} mediaData={allMediaData} />
              }
            />
            <Route
              path="movies"
              element={
                <HomeMovies textInput={textInputRef} mediaData={movieData} />
              }
            />
            <Route
              path="television"
              element={<HomeTV textInput={textInputRef} mediaData={tvData} />}
            />
            <Route
              path="bookmark"
              element={
                <HomeBookmark
                  mediaData={bookmarkData}
                  textInput={textInputRef}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Home;
