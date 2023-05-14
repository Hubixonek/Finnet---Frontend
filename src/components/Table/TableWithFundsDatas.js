import styles from '../styles/Table.module.css';
import SummaryDataTable from './SummaryDataTable';
import PropTypes from 'prop-types';

const TableWithFundsDatas = ({ funds, removeFundsData }) => {
	return (
		<div>
			<div>
				<main className={styles['main_table--container']}>
					<h1 className={styles['h1_table']}>Zapisane dane</h1>
					<div className="table-responsive">
						<table className={`table table-striped table-dark ${styles.table}`}>
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
								{funds.map((funds) => (
									<tr key={funds.id}>
										<td>{funds.date}</td>
										<td>{funds.amount}</td>
										<td>{funds.rate}</td>
										<td>
											{funds.result} {funds.toCurrency}
										</td>
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
TableWithFundsDatas.propTypes = {
	funds: PropTypes.array.isRequired,
	removeFundsData: PropTypes.func.isRequired,
};
export default TableWithFundsDatas;
