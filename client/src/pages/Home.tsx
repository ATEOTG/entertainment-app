import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import SearchForm from "../components/Form/SearchForm";

function Home() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div>
      <Navigation />
      <SearchForm pathText={path} />
      <Routes>{/* <Route  path="movies" element= {}/> */}</Routes>
    </div>
  );
}

export default Home;
