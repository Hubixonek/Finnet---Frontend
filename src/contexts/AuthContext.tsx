import axios from "axios";
import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    let userProfile = localStorage.getItem("user");
    if (userProfile) {
      return JSON.parse(userProfile);
    }
    return null;
  });
  const loginApiCall = async (payload) => {
    const apiResponse = await axios.post(
      "https://finnet.bieda.it/api/auth/login",
      payload,
      {
        withCredentials: true,
      }
    );
    console.log("Zalogowany");
    setUser(apiResponse.data);
    localStorage.setItem("user", JSON.stringify(apiResponse.data));
  };
  const logoutApiCall = async () => {
    await axios.post("https://finnet.bieda.it/api/auth/logout", {}, {
      withCredentials: true,
    });
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ loginApiCall, user, logoutApiCall }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
