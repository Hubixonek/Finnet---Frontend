const validate = (values) => {
  const errors = {};
  if (!values.date) {
    errors.date = "* Data jest wymagana!";
  }
  if (!values.amount) {
    errors.amount = "* Kwota jest wymagana!";
  }
  if (!values.fromCurrency) {
    errors.fromCurrency = "* Proszę wybrać posiadaną walutę!";
  }
  if (!values.rate) {
    errors.rate = "* Kurs jest wymagany!";
  }
  if (!values.toCurrency) {
    errors.toCurrency = "* Proszę wybrać wymienianą walutę!";
  }
  return errors;
};

export default validate;
