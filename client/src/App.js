import { useEffect } from 'react';
import './scss/main.scss';
import Buttons from './components/Buttons'
import Typography from './components/Typography'
import Forms from './components/Forms'
import ThemePicker from './components/ThemePicker'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
	//const location = useLocation();

	useEffect(() => {
	}, [])
	return (
		<div className="page">
			<div className="menu transparent menu__bordered">
				<div className="logo">
					<div className="logo__sub">
						Nom<b className="text--normal">Nom</b>.sty<span className="material-icons font--25 vm--align" style={{display: 'inline'}}>format_paint</span>e </div>
					<div className="logo__overlay"></div>
				</div>
				<div className="tabs float--right">
					<a className="tabs__item tabs__item-md tabs__item-active" href="/Typography">
						{/* <span className="material-icons font--20 vm--align">
							font_download
						</span> */}
						Typography
					</a>
					<a className="tabs__item tabs__item-md" href="/Button">
						{/* <span className="material-icons font--20 vm--align">
							smart_button
						</span> */}
						Button
					</a>
					<a className="tabs__item tabs__item-md" href="/Form">
						{/* <span className="material-icons font--20 vm--align">
							dns
						</span> */}
						Form
					</a>
					<a className="tabs__item tabs__item-md" href="/Card">
						{/* <span className="material-icons font--20 vm--align">
							view_agenda
						</span> */}
						Card
					</a>
					<a className="tabs__item tabs__item-md" href="/Table">
						{/* <span className="material-icons font--20 vm--align">
							table_rows
						</span> */}
						Table
					</a>
					<a className="tabs__item tabs__item-md" href="/Modal">
						{/* <span className="material-icons font--20 vm--align">
							call_to_action
						</span> */}
						Modal
					</a>
					<a className="tabs__item tabs__item-md" href="/Menu">
						{/* <span className="material-icons font--20 vm--align">
							menu
						</span> */}
						Menu
					</a>
					<a className="tabs__item tabs__item-md" href="/Helper">
						{/* <span className="material-icons font--20 vm--align">
							widgets
						</span> */}
						Helpers
					</a>
					<div className="tabs__item tabs__item-md" href="/Download">
						<span className="material-icons font--20 vm--align">
							download
						</span>
						Download
					</div>
				</div>
			</div>
			<ThemePicker />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Buttons />} />
					<Route path="/Typography" element={<Typography />} />
					<Route path="/Button" element={<Buttons />} />
					<Route path="/Form" element={<Forms />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
