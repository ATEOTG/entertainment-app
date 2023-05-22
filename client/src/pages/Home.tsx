import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import SearchForm from "../components/Form/SearchForm";
import HomeAll from "./HomeAll";
import HomeMovies from "./HomeMovies";
import HomeTV from "./HomeTV";
import HomeBookmark from "./HomeBookmark";

function Home() {
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

  return (
    <div className="home-cont">
      <Navigation />
      <SearchForm pathText={path} />
      <div className="home-result-cont">
        <h2 className="title">{titleText}</h2>

        <Routes>
          <Route path="all" element={<HomeAll />} />
          <Route path="movies" element={<HomeMovies />} />
          <Route path="television" element={<HomeTV />} />
          <Route path="bookmark" element={<HomeBookmark />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;
