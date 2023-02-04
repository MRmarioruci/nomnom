import logo from './logo.svg';
import './scss/main.scss';
import Buttons from './components/Buttons'
import ThemeSwitch from './components/ThemeSwitch'

function App() {
	return (
		<div className="page">
			<header className="menu transparent justify--center text--center">
				<div className="">
					<div className="logo">
						<div className="logo__sub">
							Nom<b className="text--normal">Nom</b>.sty<span className="material-icons font--25 vm--align" style={{display: 'inline'}}>format_paint</span>e </div>
						<div className="logo__overlay"></div>
					</div>
					<div className="theme__switch">
						<ThemeSwitch />
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
				<div className="page__content-left card card__bordered card__transparent">
					<Buttons />
				</div>
				<div className="page__content-right">
					<label className="text--bold mleft--10">Customize</label>
					<div className="card card__glass">
						<div>
							<label className="text--muted">General</label>
						</div>
						<div>
							<label className="text--muted">Button Specific</label>
							<div className="form__group">
								<label>Size</label>
								<div className="flex flex--row">
									<div className="btn btn-light btn-md">Large</div>
									<div className="btn btn-primary-soft btn-md">Normal</div>
									<div className="btn btn-light btn-md">Medium</div>
									<div className="btn btn-light btn-md">Small</div>
								</div>
							</div>
							<div className="form__group">
								<label>Shadow</label>
								<div className="flex flex--row">
									<div className="btn btn-light btn-md">Yes</div>
									<div className="btn btn-primary-soft btn-md">No</div>
								</div>
							</div>
							<div className="form__group">
								<label>Rounded</label>
								<div className="flex flex--row">
									<div className="btn btn-light btn-md">Yes</div>
									<div className="btn btn-primary-soft btn-md">No</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
}

export default App;
