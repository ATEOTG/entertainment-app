import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import SearchForm from "../components/Form/SearchForm";
import HomeAll from "./HomeAll";
import HomeMovies from "./HomeMovies";
import HomeTV from "./HomeTV";
import HomeBookmark from "./HomeBookmark";
import { useEffect, useRef, useState } from "react";
import { EntryObject } from "../interface";

async function initGetMediaData(
  url: string,
  searchValue: string,
  setState: Function
) {
  const searchString = searchValue.toLowerCase();
  const response = await fetch(url);
  const data = await response.json();

  if (searchString.trim() === "") setState(data.data);
  else {
    data.data = data.data.filter((el: EntryObject) =>
      el.title.toLowerCase().includes(searchString.toLowerCase())
    );
    setState(data.data);
  }
}

function Home() {
  const textInputRef = useRef<HTMLInputElement>(null);
  const [allMediaData, setMediaData] = useState<EntryObject[]>([]);
  const [movieData, setMovieData] = useState<EntryObject[]>([]);
  const [tvData, setTvData] = useState<EntryObject[]>([]);

  const location = useLocation();
  const path = location.pathname;

  const titleText: string =
    path === "/home/all"
      ? "Trending"
      : path === "/home/movies"
      ? "Movies"
      : path === "/home/television"
      ? "TV Series"
      : "Bookmarked Movies";

  function onSubmitInputHandler(event: React.FormEvent) {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    if (path === "/home/all")
      initGetMediaData("/api/v1/home", enteredText, setMediaData);
    else if (path === "/home/movies")
      initGetMediaData("/api/v1/home/movies", enteredText, setMovieData);
    else if (path === "/home/television")
      initGetMediaData("/api/v1/home/tv", enteredText, setTvData);
  }
  useEffect(() => {
    if (path === "/home/all") {
      initGetMediaData("/api/v1/home", "", setMediaData);
    } else if (path === "/home/movies")
      initGetMediaData("/api/v1/home/movies", "", setMovieData);
    else if (path === "/home/television")
      initGetMediaData("/api/v1/home/tv", "", setTvData);
  }, [path]);
  return (
    <div className="home-cont">
      <Navigation />
      <SearchForm
        pathText={path}
        textRef={textInputRef}
        onSubmitHandler={onSubmitInputHandler}
      />
      <div className="home-result-cont">
        <h2 className="title">{titleText}</h2>

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
          <Route path="bookmark" element={<HomeBookmark />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;
