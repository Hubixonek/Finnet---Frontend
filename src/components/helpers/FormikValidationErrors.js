import useCustomFormik from '../hooks/useFormik';

const FormikValidationErrors = () => {

	const { formik } = useCustomFormik();

	const dateError = formik.errors.date ? (
		<p className="error-p">{formik.errors.date}</p>
	) : null;

	const amountError = formik.errors.amount ? (
		<p className="error-p">{formik.errors.amount}</p>
	) : null;
	const fromCurrencyError = formik.errors.fromCurrency ? (
		<p className="error-p">{formik.errors.fromCurrency}</p>
	) : null;
	const rateError = formik.errors.rate ? (
		<p className="error-p">{formik.errors.rate}</p>
	) : null;

	const toCurrencyError = formik.errors.toCurrency ? (
		<p className="error-p">{formik.errors.toCurrency}</p>
	) : null;

    return[dateError, amountError, fromCurrencyError, rateError, toCurrencyError]
};
export default FormikValidationErrors;