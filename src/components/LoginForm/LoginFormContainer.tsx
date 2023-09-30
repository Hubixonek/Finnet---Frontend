import { useContext } from "react";
import { useFormik } from "formik";
import AuthContext from "../../contexts/AuthContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import validate from "../../utils/helpers/validationlogin.helpers";
import LoginFormPresenter from "./LoginFormPresenter";
import { TThemeContext } from "../../types/themecontext";

const LoginFormContainer = () => {
  const { loginApiCall } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext) as TThemeContext;
  const loginHandler = async () => {
    let payload = {
      email: formik.values.email,
      password: formik.values.password,
    };
    await loginApiCall(payload);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: loginHandler,
  });

  return <LoginFormPresenter theme={theme} formik={formik} />;
};

export default LoginFormContainer;
