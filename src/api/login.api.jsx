import axios from "axios";
import { useFormik } from "formik";

const useLogin = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://95.217.122.131:20152/auth/login",
          values,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              credentials: "include",
            },
            body: JSON.stringify({
              email: formik.values.email,
              password: formik.values.password,
            }),
          }
        );
        console.log(response.data);
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
  return { formik };
};
export default useLogin;
