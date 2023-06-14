import { useFormik } from "formik";
import validate from "../utils/helpers/validationregister.helpers";
import axios from "axios";

const useRegister = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      checkboxPrivacyPolicy: false,
    },
    validate,
    onSubmit: async () => {
      try {
        const response = await axios.post(
          "http://95.217.122.131:20152/auth/users",
          {
            email: formik.values.email,
            password: formik.values.password,
          }
        );
        if (response.data.token) {
          console.log("Token uwierzytelniający:", response.data.token);
        } else {
          console.log("Brak tokena uwierzytelniającego w odpowiedzi");
        }
        console.log(response.data);
        console.log("Zarejestrowano pomyślnie");
      } catch (error) {
        console.error(error);
        console.log("Błąd przy rejestracji");
      }
    },
  });

  return { formik };
};

export default useRegister;
