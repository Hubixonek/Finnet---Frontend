import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { AuthContextProvider } from "../src/contexts/AuthContext";
import ProtectedRoute from "./services/ProtectedRoute.service";
import { ThemeContextProvider } from "../src/contexts/ThemeContext";
import { AddWalletProvider } from "./contexts/AddWalletContext";
import WalletCompositionContainer from "./components/Wallet/WalletCompositionContainer";
import { DepositContextProvider } from "./contexts/DepositContext";
import { DisplayDepositProvider } from "./contexts/DisplayDepositContext";
import { ToastContainer } from "react-toastify";
import DepositContainer from "./components/Deposit/DepositContainer";
import LoginFormContainer from "./components/LoginForm/LoginFormContainer";
import FundsFormContainer from "./components/FundsForm/FundsFormContainer";
import RegisterFormContainer from "./components/RegisterForm/RegisterFormContainer";
import NewWalletContainer from "./components/Wallet/NewWalletContainer";
import CreateLokataPresenter from "./components/Lokata/CreateLokataPresenter";
import SettingsPresenter from "./components/UserDashboard/SettingsPresenter";
import DebtorListPresenter from "./components/DebtorsList/DebtorListPresenter";
import DebtorListContainer from "./components/DebtorsList/DebtorListContainer";
function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}
function AppContent() {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <AddWalletProvider>
          <DepositContextProvider>
            <DisplayDepositProvider>
              <BrowserRouter>
                <NavigationBar />
                <ToastContainer />
                <br></br>
                <br></br>
                <br></br>

                <Routes>
                  <Route path="/" element={<FundsFormContainer />} />
                  <Route
                    path="/compositionstructure"
                    element={<WalletCompositionContainer />}
                  />
                  <Route path="/deposit" element={<DepositContainer />} />
                  <Route path="/newwallet" element={<NewWalletContainer />} />
                  <Route path="/fundsform" element={<FundsFormContainer />} />
                  <Route path="/lokata" element={<CreateLokataPresenter />} />
                  <Route path="/usersettings" element={<SettingsPresenter />} />
                  <Route
                    path="/debtorslist"
                    element={<DebtorListContainer />}
                  />

                  <Route
                    path="/loginform"
                    element={
                      <ProtectedRoute accessBy="non-authenticated">
                        <LoginFormContainer />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/registerform"
                    element={
                      <ProtectedRoute accessBy="non-authenticated">
                        <RegisterFormContainer />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </BrowserRouter>
            </DisplayDepositProvider>
          </DepositContextProvider>
        </AddWalletProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
