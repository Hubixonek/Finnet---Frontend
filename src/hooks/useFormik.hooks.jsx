import { useFormik } from "formik";
import validate from "../utils/helpers/validationfunds.helpers";
const useFormikHook = ({
  fromCurrency,
  toCurrency,
  rate,
  selectedFromRate,
  selectedToRate,
  setFunds,
  funds,
  result
}) => {
  const formik = useFormik({
    initialValues: {
      date: "",
      amount: "",
      rate: "",
      fromCurrency: "",
      result: "",
      toCurrency: "",
    },
    validate,
    onSubmit: (values) => {
      const fundsObject = {
        id: Math.random().toString(),
        date: formik.values.date,
        amount: formik.values.amount,
        rate: formik.values.rate,
        fromCurrency: fromCurrency,
        result: formik.values.result,
        toCurrency: toCurrency,
        apiRate: rate,
        selectedFromRate: selectedFromRate,
        selectedToRate: selectedToRate,
        resultByRateFromApi:
          formik.values.result - (formik.values.amount * rate).toFixed(2),
      };
      setFunds([...funds, fundsObject]);
      console.log(JSON.stringify(values, null));
    },
  });

  return formik;
};

export default useFormikHook;
