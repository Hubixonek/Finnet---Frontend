import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import FundsForm from "./components/FundsForm/FundsForm";
import LoginForm from "./components/LoginForm/LoginForm";
import NavigationBar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { AuthContextProvider } from "../src/contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { ThemeContextProvider } from "../src/contexts/ThemeContext";
import NewWallet from "./components/Wallet/NewWallet";
import { AddWalletProvider } from "./contexts/AddWalletContext";
import WalletComposition from "./components/Wallet/WalletComposition";
import Deposit from "./components/Operations/Deposit";
import { DepositContextProvider } from "./contexts/DepositContext";
import { DisplayDepositProvider } from "./contexts/DisplayDepositContext";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}
function AppContent() {
  return (
    <AuthContextProvider>
      <AddWalletProvider>
        <DepositContextProvider>
          <DisplayDepositProvider>
            <BrowserRouter>
              <NavigationBar />
              <ToastContainer />

              <Routes>
                <Route path="/" element={<FundsForm />} />
                <Route
                  path="/compositionstructure"
                  element={<WalletComposition />}
                />
                <Route path="/deposit" element={<Deposit />} />
                <Route path="/newwallet" element={<NewWallet />} />
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
          </DisplayDepositProvider>
        </DepositContextProvider>
      </AddWalletProvider>
    </AuthContextProvider>
  );
}

export default App;
