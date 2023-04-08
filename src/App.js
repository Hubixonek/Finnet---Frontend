import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FundsFormWithTable from './components/Table/FundsFormWithTable';

function App() {
	return (
		<html>
			<body>
				<Navbar></Navbar>
				<div>
				<FundsFormWithTable></FundsFormWithTable>
				</div>
				<div>
				
				</div>
			</body>
		</html>
	);
}

export default App;
