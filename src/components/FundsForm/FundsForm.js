import '../UI/FundsForm.css';
import React, { useState } from 'react';
import { useFormik } from 'formik';

const NUMBER_REGEX =
	/^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/;
const DATE_REGEX =
	/^(?:(?:1[6-9]|[2-9]\d)?\d{2})(?:(?:(\/|-|\.)(?:0?[13578]|1[02])\1(?:31))|(?:(\/|-|\.)(?:0?[13-9]|1[0-2])\2(?:29|30)))$/;

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
	if (!values.date.match(DATE_REGEX)) {
		errors.date =
			'* Data jest nieprawidłowa! Upewnij się, że wpisana data jest w poprawnym formacie!';
	}
	if (!values.currencyOne) {
		errors.currencyOne = '* Proszę wybrać posiadaną walutę!';
	}
	if (!values.currencyTwo) {
		errors.currencyTwo = '* Proszę wybrać wymienianą walutę!';
	}
	return errors;
};

const FundsForm = () => {
	const [enteredDate, setEnteredDate] = useState();
	const [enteredAmount] = useState();
	const [enteredCurrencyOne, setEnteredCurrencyOne] = useState();
	const [enteredRate, setEnteredRate] = useState();
	const [enteredCurrencyTwo, setEnteredCurrencyTwo] = useState();
	const [enteredResult, setEnteredResult] = useState();

	const formik = useFormik({
		initialValues: {
			date: '',
			amount: '',
			currencyOne: '',
			rate: '',
			currencyTwo: '',
		},
		validate,
		onSubmit: (values) => {
			alert(JSON.stringify(values));
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
		setEnteredDate(event.target.value);
		console.log(event.target.value);
	};
	// const amountEnteredHandler = (event) => {
	// 	const amountValue = event.target.value;
	// 	if (amountValue !== '' && enteredRate !== '') {
	// 		setEnteredAmount(amountValue);
	// 		setEnteredResult(amountValue * enteredRate);
	// 	} else {
	// 		const resultValidation = `Wpisz kwotę!`;
	// 		setEnteredAmount(resultValidation);
	// 		setEnteredResult('');
	// 	}
	// 	console.log(event.target.value);
	// };
	const currencyOneChangeHandler = (event) => {
		setEnteredCurrencyOne(event.target.value);
		console.log(event.target.value);
	};

	const rateEnteredHandler = (event) => {
		const rateValue = event.target.value;

		if (enteredAmount != '' && rateValue != '') {
			setEnteredRate(rateValue);
			setEnteredResult(enteredAmount * rateValue);
		} else {
			const rateValidation = <span>Wpisz kurs</span>;
			setEnteredRate(rateValidation);
			setEnteredResult('');
		}
	};
	const currencyTwoChangeHandler = (event) => {
		setEnteredCurrencyTwo(event.target.value);
		console.log(event.target.value);
	};
	const resultEnteredHandler = (event) => {
		console.log(event.target.value);
	};
	// const submitHandler = (event) => {
	// 	event.preventDefault();
	// 	const fundsFormData = {
	// 		date: new Date(enteredDate),
	// 		amount: enteredAmount,
	// 		currencyOne: enteredCurrencyOne,
	// 		course: enteredRate,
	// 		currencyTwo: enteredCurrencyTwo,
	// 		result: enteredResult,
	// 	};
	// 	console.log(fundsFormData);
	// };

	return (
		<form onSubmit={formik.handleSubmit}>
			<div className="form_input--container">
				<h1 className="h1-style">Finnet</h1>
				<div className="input-group">
					<label className="input-group-text w-70" htmlFor="date">
						Data
					</label>
					<input
						className={`form-control w-50 ${
							formik.errors.date ? 'has-error error-p' : ''
						}`}
						name="date"
						value={formik.values.date}
						onChange={formik.handleChange}
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
						onChange={formik.handleChange}
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
						onChange={formik.handleChange}
						name="currencyOne"
					>
						<option value="" selected disabled hidden>
							Wybierz walutę
						</option>
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
						onChange={formik.handleChange}
						required
						type="text"
						placeholder="Kurs"
					/>
					<span className="input-group-text w-50" id="currencyText">
						EUR/PLN
					</span>
				</div>
				<div className="input-group">
					<label htmlFor="currencyTwo"></label>
					<select
						className={`form-control w-50 ${
							formik.errors.currencyTwo ? 'has-error' : ''
						}`}
						value={formik.values.currencyTwo}
						onChange={formik.handleChange}
					>
						<option value="" selected disabled hidden>
							Wymiana waluty
						</option>
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
						value={enteredResult}
						onChange={resultEnteredHandler}
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
