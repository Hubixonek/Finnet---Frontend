import '../UI/FundsForm.css';
import { useFormik } from 'formik';
import { useState } from 'react';



const NUMBER_REGEX =
	/^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/;

const validate = (values) => {
	const errors = {};
	if (!values.amount) {
		errors.amount = '* Kwota jest wymagana!';
	} else if (!values.amount.match(NUMBER_REGEX)) {
		errors.amount = '* Wartość musi być liczbą!';
	}

	if (!values.rate) {
		errors.rate = '* Kurs jest wymagany!';
	} else if (!values.rate.match(NUMBER_REGEX)) {
		errors.rate = '* Wartość musi być liczbą!';
	}
	if (!values.currencyOne) {
		errors.currencyOne = '* Proszę wybrać posiadaną walutę!';
	}

	return errors;
};

const FundsForm = (props) => {
	const [currencyText, setCurrencyText] = useState();
	const [currencyTwoText, setCurrencyTwoText] = useState();

	const formik = useFormik({
		initialValues: {
			date: '',
			amount: '',
			currencyOne: '',
			rate: '',
			currencyTwo: '',
			result: '',
		},
		validate,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	const dateError = formik.errors.date ? (
		<p className="error-p">{formik.errors.date}</p>
	) : null;

	const amountError = formik.errors.amount ? (
		<p className="error-p">{formik.errors.amount}</p>
	) : null;
	const currencyOneError = formik.errors.currencyOne ? (
		<p className="error-p">{formik.errors.currencyOne}</p>
	) : null;
	const rateError = formik.errors.rate ? (
		<p className="error-p">{formik.errors.rate}</p>
	) : null;

	const currencyTwoError = formik.errors.currencyTwo ? (
		<p className="error-p">{formik.errors.currencyTwo}</p>
	) : null;

	const dateChangeHandler = (event) => {
		formik.handleChange(event);
	};

	const amountEnteredHandler = (event) => {
		formik.handleChange(event);

		if (formik.values.rate) {
			formik.setFieldValue('result', event.target.value * formik.values.rate);
		} else {
			formik.setFieldValue('result', '');
		}
	};

	const currencyOneChangeHandler = (event) => {
		formik.setFieldValue('currencyOne', event.target.value);
		setCurrencyText(event.target.value);
	};
	const currencyTwoChangeHandler = (event) => {
		formik.setFieldValue('currencyTwo', event.target.value);
		setCurrencyTwoText(`/${event.target.value}`);
	};

	const rateEnteredHandler = (event) => {
		formik.handleChange(event);

		if (formik.values.amount) {
			formik.setFieldValue('result', event.target.value * formik.values.amount);
		} else {
			formik.setFieldValue('result', '');
		}
	};

	const resultEnteredHandler = (event) => {
		formik.handleChange(event);
	};
	const submitHandler = (event) => {
		event.preventDefault();
		const fundsFormData = {
			date: new Date(formik.values.date),
			amount: formik.values.amount,
			currencyOne: formik.values.currencyOne,
			rate: formik.values.rate,
			currencyTwo: formik.values.currencyTwo,
			result: formik.values.result,
		};
		props.onSaveFundsData(fundsFormData);
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="form_input--container">
				<h1 className="h1-style">Finnet</h1>
				<div className="input-group">
					<label className="input-group-text w-50" htmlFor="date">
						Data operacji
					</label>

					<input
						className={`form-control ${
							formik.errors.date ? 'has-error error-p' : ''
						}`}
						name="date"
						value={formik.values.date}
						onChange={dateChangeHandler}
						type="date"
					></input>
				</div>
				<div className="input-group">
					<label htmlFor="amount"></label>
					<input
						className={`form-control w-50 ${
							formik.errors.amount ? 'has-error' : ''
						}`}
						name="amount"
						value={formik.values.amount}
						onChange={amountEnteredHandler}
						required
						type="text"
						placeholder="Kwota"
					/>
				</div>
				<div className="input-group">
					<label htmlFor="currencyOne"></label>
					<select
						className={`form-control w-50 ${
							formik.errors.currencyOne ? 'has-error' : ''
						}`}
						value={formik.values.currencyOne}
						onChange={currencyOneChangeHandler}
						name="currencyOne"
					>
						<option value="choose-value">Wybierz walutę</option>
						<option value="PLN">PLN</option>
						<option value="EUR">EUR</option>
						<option value="USD">USD</option>
						<option value="CHF">CHF</option>
						<option value="AUD">AUD</option>
						<option value="SEK">SEK</option>
						<option value="CZK">CZK</option>
						<option value="GBP">GBP</option>
					</select>
				</div>
				<div className="input-group">
					<label htmlFor="rate"></label>
					<input
						className={`form-control w-50 ${
							formik.errors.rate ? 'has-error' : ''
						}`}
						name="rate"
						value={formik.values.rate}
						onChange={rateEnteredHandler}
						required
						type="text"
						placeholder="Kurs"
					/>
					<span className="input-group-text w-50">
						{currencyText}
						{currencyTwoText}
					</span>
				</div>
				<div className="input-group">
					<label htmlFor="currencyTwo"></label>
					<select
						className={`form-control w-50 ${
							formik.errors.currencyTwo ? 'has-error' : 'd'
						}`}
						value={formik.values.currencyTwo}
						onChange={currencyTwoChangeHandler}
						name="currencyTwo"
					>
						<option value="choose-one">Wymiana waluty</option>
						<option value="PLN">PLN</option>
						<option value="EUR">EUR</option>
						<option value="USD">USD</option>
						<option value="CHF">CHF</option>
						<option value="AUD">AUD</option>
						<option value="SEK">SEK</option>
						<option value="CZK">CZK</option>
						<option value="GBP">GBP</option>
					</select>
				</div>
				<div className="input-group">
					<label className="input-group-text" htmlFor="result">
						Wynik
					</label>
					<input
						type="number"
						value={formik.values.result}
						onChange={resultEnteredHandler}
						name="result"
						required
						className="form-control"
						aria-describedby="basic-addon1"
					></input>
				</div>
				<div className="input-group">
					<label className="input-group-text w-50" htmlFor="currently">
						Aktualnie
					</label>
					<input
						type="text"
						className="form-control"
						id="api-courses"
						readOnly={true}
					></input>
				</div>
				<div className="save-btn">
					<button
						type="submit"
						className="btn btn-primary form_button--savebtn"
					>
						Zapisz
					</button>
				</div>
			</div>
			{dateError}
			{amountError}
			{currencyOneError}
			{rateError}
			{currencyTwoError}
		</form>
	);
};

export default FundsForm;
