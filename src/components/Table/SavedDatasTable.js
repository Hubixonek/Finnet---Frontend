import '../UI/Table.css';
const SavedDatasTable = () => {
	return (
		<div>
			<h1 className="h1_table">Zapisane dane</h1>
			<div className="table-responsive">
				<table className="table table-striped table-dark">
					<thead>
						<tr>
							<th className='fundsdata_table--th--td' scope="col">Data</th>
							<th scope="col">Kwota</th>
							<th className='fundsdata_table--th--td' scope="col">Kurs</th>
							<th scope="col">Wynik</th>
							<th scope="col">Aktualnie</th>
							<th scope="col">Zyski/Straty</th>
							<th scope="col">Usuń</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className='fundsdata_table--th--td'>27.03.2023</td>
							<td>250 PLN</td>
							<td className='fundsdata_table--th--td'> 4.56</td>
							<td>1100 EUR</td>
							<td>4.58</td>
							<td>5%</td>
							<td >X</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};
export default SavedDatasTable;
