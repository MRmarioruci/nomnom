import {useState, useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
	const location = useLocation();
	useEffect(() => {
		console.log(location)
	}, [location])
	const getActivePage = page => {
		let o = 'tabs__item font--13 '
		console.log(location)
		if(page == location.pathname.replace('/', '')){
			o += 'tabs__item-active tabs__item-activeTransparent'
		}
		return o
	}
    return (
		<div className="page__wrapper-sidebar">
			<div className="logo">
				<div className="logo__sub">
					<span className="material-icons vm--align mright--5">
						tsunami
					</span>
					Waves.css
				</div>
				<div className="logo__overlay">
					<span className="material-icons vm--align mright--5">
						tsunami
					</span>
					Waves.css
				</div>
			</div>
			<label className="font--12 text--muted">ELEMENTS</label>
			<div className="tabs flex flex--column">
				<Link to="/Typography" className={getActivePage('Typography')}>
					<span className="material-icons font--20">
						format_quote
					</span>
					Typography
				</Link>
				<Link to="/Button" className={getActivePage('Button')}>
					<span className="material-icons font--20">
						ads_click
					</span>
					Button
				</Link>
				<Link to="/Form" className={getActivePage('Form')}>
					<span className="material-icons font--20">
						check_box
					</span>
					Form
				</Link>
				<Link to="/Card" className={getActivePage('Card')}>
					<span className="material-icons font--20">
						dashboard
					</span>
					Card
				</Link>
				<Link to="/Table" className={getActivePage('Table')}>
					<span className="material-icons font--20">
						toc
					</span>
					Table
				</Link>
				<Link to="/Modal" className={getActivePage('Modal')}>
					<span className="material-icons font--20">
						wysiwyg
					</span>
					Modal
				</Link>
				<Link to="/Menu" className={getActivePage('Menu')}>
					<span className="material-icons font--20">
						ads_click
					</span>
					Menu
				</Link>
				<Link to="/Helpers" className={getActivePage('Helpers')}>
					<span className="material-icons font--20">
						widgets
					</span>
					Helpers
				</Link>
			</div>
			<div className="text--center">
				<Link to="/Download" className="btn btn-primary">
					<span className="material-icons font--20 vm--align">
						download
					</span>
					Download
				</Link>
			</div>
		</div>
	);
}

export default Sidebar;
