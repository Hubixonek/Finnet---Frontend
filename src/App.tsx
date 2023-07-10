import "./App.scss";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import FundsForm from "./components/FundsForm/FundsForm";
import LoginForm from "./components/LoginForm/LoginForm";
import NavigationBar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { AuthContextProvider } from "../src/contexts/AuthContext";


function App() {
  return (
      <AuthContextProvider>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<FundsForm />} />
            <Route path="/fundsform" element={<FundsForm />} />
            <Route path="/loginform" element={<LoginForm />} />
            <Route path="/registerform" element={<RegisterForm />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
  );
}

export default App;
