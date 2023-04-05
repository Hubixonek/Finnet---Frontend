import '../UI/Table.css';
import SavedDatasTable from "./SavedDatasTable";
import SummaryDataTable from "./SummaryDataTable";

const FullTable = () => {
    return(
    <>
    <SavedDatasTable></SavedDatasTable><SummaryDataTable></SummaryDataTable>
    </>
    )
}
export default FullTable;