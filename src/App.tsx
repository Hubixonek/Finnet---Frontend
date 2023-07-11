import styles from "./App.module.scss";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import FundsForm from "./components/FundsForm/FundsForm";
import LoginForm from "./components/LoginForm/LoginForm";
import NavigationBar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { AuthContextProvider } from "../src/contexts/AuthContext";
import { useContext } from "react";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import {
  ThemeContext,
  ThemeContextProvider,
} from "../src/contexts/ThemeContext"

function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}
function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <div className={`${styles["body"]} ${theme ? styles["dark"] : styles["light"]}`}>
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
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;