import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

function User() {
  return (
    <div className="user-cont">
      <Routes>
        <Route path="/" element={<Navigate replace to="/user/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default User;
