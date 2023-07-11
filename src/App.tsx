import "./App.scss";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import FundsForm from "./components/FundsForm/FundsForm";
import LoginForm from "./components/LoginForm/LoginForm";
import NavigationBar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import AuthContext, { AuthContextProvider } from "../src/contexts/AuthContext";
import { useContext } from "react";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const user = useContext(AuthContext);
  return (
    <AuthContextProvider value={user}>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<FundsForm />} />
          <Route path="/fundsform" element={<FundsForm />} />
          <Route
            path="/loginform"
            element={
              <ProtectedRoute accessBy="non-authenticated">
                <LoginForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/registerform"
            element={
              <ProtectedRoute accessBy="non-authenticated">
                <RegisterForm />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
