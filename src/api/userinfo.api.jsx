import axios from "axios";
import { useFormik } from "formik";
import { useState, createContext, useContext } from "react";

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    let storedUser = localStorage.getItem("user");
    if (storedUser) {
      return JSON.parse(storedUser);
    }
    return null;
  });

  const loginUser = async (values) => {
    try {
      const response = await axios.post(
        "http://95.217.122.131:20152/auth/login",
        values,
        {
          headers: {
            withCredentials: true,
          },
        }
      );
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      console.log("Zalogowany");
    } catch (error) {
      console.error(error);
      formik.setErrors({
        email: "* Niepoprawny adres e-mail lub hasło!",
      });
      console.log("Błąd przy logowaniu");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: loginUser,
  });

  const logoutUser = async () => {
    console.log("test");
    try {
      await axios.post("http://95.217.122.131:20152/auth/logout", null, {
        headers: {
          withCredentials: true,
        },
      });
      setUser(null);
      localStorage.removeItem("user");
      console.log("Wylogowany");
    } catch (error) {
      console.error(error);
    }
  };
  // const test = async () => {
  //   try {
  //     const response = await axios.get("http://95.217.122.131:20152/tables", {
  //       headers: {
  //         Cookie:
  //           "Authentication=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2IiwiaWF0IjoxNjg3ODc5MDEzLCJleHAiOjE2ODc4ODI2MTN9.PDFIaEhF3Gk0jyrA0CWLD9DwYwBg94JH39h1fJmrkNA",
  //       },
  //     });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // test();

  const userContextValue = {
    user,
    formik,
    loginUser,
    logoutUser,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
