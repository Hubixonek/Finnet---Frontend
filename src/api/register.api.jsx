import { useFormik } from "formik";
import validate from "../utils/helpers/validationregister.helpers";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      checkboxPrivacyPolicy: false,
    },
    validate,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://95.217.122.131:20152/auth/users",
          {
            email: values.email,
            password: values.password,
          }
        );
        console.log(response.data);
        console.log("Zarejestrowano pomyślnie");
        navigate("/fundsform");
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          formik.setErrors({
            email: "* Adres e-mail jest już zajęty!",
          });
        } else {
          console.error(error);
          console.log("Błąd przy rejestracji");
        }
      }
    },
  });

  return { formik };
};

export default useRegister;
