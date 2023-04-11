import FundsForm from '../FundsForm/FundsForm';
import '../UI/Table.css';
import SummaryDataTable from './SummaryDataTable';
import { useState } from 'react';
import PropTypes from 'prop-types';
const FundsFormWithTable = () => {
	const [fundsData, setFundsData] = useState([]);
	const saveFundsData = (enteredFundsData) => {
		const fundsFormData = {
			...enteredFundsData,
			id: Math.random().toString(),
		};
		console.log(fundsFormData);
		setFundsData((prevFundsData) => [...prevFundsData, fundsFormData]);
	};

	const removeFundsData = (id) => {
		setFundsData((prevFundsData) =>
			prevFundsData.filter((funds) => funds.id !== id)
		);
	};

	return (
		<div>
			<header className="App-header">
				<FundsForm onSaveFundsData={saveFundsData}></FundsForm>
			</header>
			<div>
				<main className="main_table--container">
					<h1 className="h1_table">Zapisane dane</h1>
					<div className="table-responsive">
						<table className="table table-striped table-dark">
							<thead>
								<tr>
									<th scope="col">Data</th>
									<th scope="col">Kwota</th>
									<th scope="col">Kurs</th>
									<th scope="col">Wynik</th>
									<th scope="col">Aktualnie</th>
									<th scope="col">Zyski/Straty</th>
									<th scope="col">Usuń</th>
								</tr>
							</thead>
							<tbody>
								{fundsData.map((funds) => (
									<tr key={funds.id}>
										<td>{funds.date.toLocaleDateString('pl-PL')}</td>
										<td>{funds.amount}</td>
										<td>{funds.rate}</td>
										<td>{`${funds.result} ${funds.toCurrency}`}</td>
										<td>4.65</td>
										<td>5%</td>
										<td>
											<button
												className="btn btn-danger"
												onClick={() => removeFundsData(funds.id)}
											>
												X
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<SummaryDataTable></SummaryDataTable>
					</div>
				</main>
			</div>
		</div>
	);
};

FundsFormWithTable.propTypes = {
	onSaveFundsData: PropTypes.func.isRequired,
};
export default FundsFormWithTable;
