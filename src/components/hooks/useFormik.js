import { useState } from 'react';
import { useFormik } from 'formik';
const useCustomFormik = () => {
	const [initialValues] = useState({
		date: '',
		amount: '',
		fromCurrency: '',
		rate: '',
		toCurrency: '',
		result: '',
	});

	const validate = (values) => {
		const errors = {};

		if (!values.date) {
			errors.date = '* Data jest wymagana!';
		}

		if (!values.amount) {
			errors.amount = '* Kwota jest wymagana!';
		} else if (isNaN(Number(values.amount))) {
			errors.amount = '* Kwota musi być liczbą!';
		}

		if (!values.fromCurrency) {
			errors.fromCurrency = '* Proszę wybrać posiadaną walutę!';
		}

		if (!values.rate) {
			errors.rate = '* Kurs jest wymagany!';
		} else if (isNaN(Number(values.rate))) {
			errors.rate = '* Kurs musi być liczbą!';
		}

		if (!values.toCurrency) {
			errors.toCurrency = '* Wybór wymiany jest wymagany!';
		}
		return errors;
	};

	const onSubmit = (values) => {
		console.log(values);
	};

	const formik = useFormik({
		initialValues,
		validate,
		onSubmit,
	});

	return {
		formik,
		initialValues,
	};
};
export default useCustomFormik;
