import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";

const useLogin = () => {
  const [user, setUser] = useState(() => {
    let user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    }
    return null;
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
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
    },
  });
  return { formik, user };
};
export default useLogin;
