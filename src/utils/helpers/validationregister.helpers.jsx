const validate = (values) => {
  const errors = {};
  console.log(errors);

  if (!values.email) {
    errors.email = "Pole ma niepoprawny format";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Nieprawidłowy adres e-mail";
  }

  if (!values.password) {
    errors.password = "Pole ma niepoprawny format";
  } else if (values.password.length < 8) {
    errors.password = "Musi mieć co najmniej 8 znaków!";
  }

  if (!values.checkboxPrivacyPolicy) {
    errors.checkboxPrivacyPolicy =
      "Musisz potwierdzić Regulamin i Politykę prywatności";
  }

  return errors;
};

export default validate;
