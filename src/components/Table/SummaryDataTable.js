import styles from '../styles/Table.module.css';
const SummaryDataTable = () => {
	return (
		<div className={styles['summarydatas_table--tr']}>
			<table className={styles['table table-striped table-dark']}>
				<thead>
					<tr>
						<th scope="col">Podsumowanie</th>
					</tr>
					<tr>
						<td></td>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
		</div>
	);
};
export default SummaryDataTable;
