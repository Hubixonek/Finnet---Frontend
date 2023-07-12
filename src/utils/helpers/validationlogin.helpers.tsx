const validate = (values) => {
  const errors = {};
  console.log(errors);

  if (!values.email) {
    errors.email = "* Pole ma niepoprawny format";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "* Nieprawidłowy adres e-mail";
  }
  return errors;
};

export default validate;
