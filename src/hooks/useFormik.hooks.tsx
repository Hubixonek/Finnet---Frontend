import { useFormik } from "formik";
import validate from "../utils/helpers/validationfunds.helpers";

interface FormikHookProps {
  fromCurrency: string;
  toCurrency: string;
  rate: number;
  selectedFromRate: number;
  selectedToRate: number;
  setFunds: (funds: FundsObject[]) => void;
  funds: FundsObject[];
  setResult: (value: number) => void;
  setDate: (value: string) => void;
  setAmount: (value: number) => void;
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
  selectedFromRate: number;
  selectedToRate: number;
  resultByRateFromApi: number;
}
const useFormikHook = ({
  fromCurrency,
  toCurrency,
  rate,
  selectedFromRate,
  selectedToRate,
  setFunds,
  setResult,
  setDate,
  setAmount,
  funds,
}: FormikHookProps) => {
  const formik = useFormik({
    initialValues: {
      date: "",
      amount: 0,
      rate: 0,
      fromCurrency: "",
      result: 0,
      toCurrency: "",
    },
    validate,
    onSubmit: () => {
      const fundsObject: FundsObject = {
        id: Math.random(),
        date: formik.values.date,
        amount: formik.values.amount,
        rate: formik.values.rate,
        fromCurrency,
        result: formik.values.result,
        toCurrency,
        apiRate: rate,
        selectedFromRate,
        selectedToRate,
        resultByRateFromApi: formik.values.amount * rate - formik.values.result,
      };
      setAmount(formik.values.amount);
      setResult(formik.values.result);
      setDate(formik.values.date);
      setFunds([...funds, fundsObject]);
    },
  });

  return formik;
};

export default useFormikHook;
