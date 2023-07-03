import { useFormik } from "formik";
import validate from "../utils/helpers/validationfunds.helpers";

interface FormikHookProps {
  fromCurrency: string;
  toCurrency: string;
  rate: number;
  selectedFromRate: number | undefined;
  selectedToRate: number | undefined;
  setFunds: (funds: FundsObject[]) => void;
  funds: FundsObject[];
}
interface FundsObject {
  id: number;
  date: string;
  amount: number;
  rate: number;
  fromCurrency: string;
  result: number;
  toCurrency: string;
  apiRate: number;
  selectedFromRate: number | undefined;
  selectedToRate: number | undefined;
  resultByRateFromApi: number;
}
const useFormikHook = ({
  fromCurrency,
  toCurrency,
  rate,
  selectedFromRate,
  selectedToRate,
  setFunds,
  funds,
}: FormikHookProps) => {
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
      const fundsObject: FundsObject = {
        id: Math.random(),
        date: formik.values.date,
        amount: parseFloat(formik.values.amount),
        rate: parseFloat(formik.values.rate),
        fromCurrency,
        result: parseFloat(formik.values.result),
        toCurrency,
        apiRate: rate,
        selectedFromRate,
        selectedToRate,
        resultByRateFromApi:
          parseFloat(formik.values.result) -
          parseFloat(formik.values.amount) * rate,
      };
      setFunds([...funds, fundsObject]);
      console.log(JSON.stringify(values, null));
    },
  });

  return formik;
};

export default useFormikHook;