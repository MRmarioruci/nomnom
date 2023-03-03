import { useEffect } from 'react';
import './scss/main.scss';
import Buttons from './components/Buttons'
import Typography from './components/Typography'
import Forms from './components/Forms'
import Table from './components/Table'
import Cards from './components/Cards'
import ThemePicker from './components/ThemePicker'
import Sidebar from './components/misc/Sidebar'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
	//const location = useLocation();

	useEffect(() => {
	}, [])
	return (
		<div className="page">
			<BrowserRouter>
				<div className="page__wrapper">
					<Sidebar />
					<div className="page__wrapper-content">
						<ThemePicker />
						<Routes>
							<Route path="/" element={<Buttons />} />
							<Route path="/Typography" element={<Typography />} />
							<Route path="/Button" element={<Buttons />} />
							<Route path="/Form" element={<Forms />} />
							<Route path="/Table" element={<Table />} />
							<Route path="/Card" element={<Cards />} />
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
