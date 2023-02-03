import logo from './logo.svg';
import './scss/main.scss';
import Buttons from './components/Buttons'

function App() {
	return (
		<div className="page">
			<header className="menu transparent justify--center text--center">
				<div className="">
				<span className="material-icons font--20">
								format_paint
							</span>
					<div className="logo">
						<div className="logo__sub">
							Nom<b className="text--normal">Nom</b>.style
						</div>
						<div className="logo__overlay">NomNom.style</div>
					</div>
					<div className="tabs float--right">
						<div className="tabs__item tabs__item-md">Buttons</div>
						<div className="tabs__item tabs__item-md">Cards</div>
						<div className="tabs__item tabs__item-md">Forms</div>
						<div className="tabs__item tabs__item-active tabs__item-md">Menu's</div>
					</div>
				</div>
			</header>
			<div className="page__content">
				<div className="page__content-left">
					<Buttons />
				</div>
				<div className="page__content-right">
					<div className="card">
						General
					</div>
					<div className="card card__bordered">
						Button specifics to what to show
					</div>
				</div>
			</div>
			
		</div>
	);
}

export default App;
