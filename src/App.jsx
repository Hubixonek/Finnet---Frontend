import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import FundsForm from "./components/FundsForm/FundsForm";
import LoginForm from "./components/LoginForm/LoginForm";
import NavigationBar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import UserProvider from "./api/userinfo.api";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<FundsForm />} />
          <Route path="/fundsform" element={<FundsForm />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/registerform" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
