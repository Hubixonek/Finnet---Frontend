import { useFormik } from "formik";
import validate from "../../utils/helpers/validationregister.helpers";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RegisterFormPresenter from "./RegisterFormPresenter";

type TError = {
  error?: string;
};

const RegisterFormContainer = () => {
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
          "https://finnet.bieda.it/api/auth/users",
          {
            email: values.email,
            password: values.password,
          }
        );
        console.log(response.data);
        console.log("Zarejestrowano pomyślnie");
        navigate("/loginform");
      } catch (error: TError) {
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

  return <RegisterFormPresenter formik={formik} />;
};

export default RegisterFormContainer;
