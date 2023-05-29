import { Navigate, Route, Routes } from "react-router-dom";
import "./scss/main.scss";
import Home from "./pages/Home";
import User from "./pages/User/User";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home/all" />} />{" "}
          <Route path="/home/*" element={<Home />} />
          <Route path="/user/*" element={<User />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
