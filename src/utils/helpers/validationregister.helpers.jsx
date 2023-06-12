const validate = () => {
  const errors = {};
  console.log(errors);
  if (!formik.values.email) {
    errors.email = "Pole ma niepoprawny format";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formik.values.email)
  ) {
    errors.email = "Nieprawidłowy adres e-mail";
  }
  if (!formik.values.password) {
    errors.password = "Pole ma niepoprawny format";
  } else if (formik.values.password.length < 8) {
    errors.password = "Musi mieć co najmniej 8 znaków!";
  }
  if (!formik.values.checkboxPrivacyPolicy) {
    errors.checkboxPrivacyPolicy =
      "Musisz potwierdzić Regulamin i Politykę prywatności";
  }
  return errors;
};

export default validate;
