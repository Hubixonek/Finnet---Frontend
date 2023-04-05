import React from 'react';
import './App.css';
import FundsForm from './components/FundsForm/FundsForm';
import Navbar from './components/Navbar';
import FullTable from './components/Table/FullTable';

function App() {
	return (
		<html>
			<body>
				<Navbar></Navbar>
				<div>
						<header className="App-header">
							<FundsForm></FundsForm>
						</header>
				</div>
				<div>
					<main className="main_table--container">
						<FullTable></FullTable>
					</main>
				</div>
			</body>
		</html>
	);
}

export default App;
