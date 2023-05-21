import { Routes, Route } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

function Home() {
  return (
    <div>
      <Navigation />
      <Routes>{/* <Route  path="movies" element= {}/> */}</Routes>
    </div>
  );
}

export default Home;
