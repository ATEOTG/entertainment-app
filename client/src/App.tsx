import { Navigate, Route, Routes } from "react-router-dom";
import "./scss/main.scss";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home/all" />} />{" "}
          <Route path="/home/*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
