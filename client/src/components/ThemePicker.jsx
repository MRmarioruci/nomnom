
import { useEffect, useState } from "react";
import {load, loadFamilies} from 'google-fonts-loader';
import Select from "react-dropdown-select";

function ThemePicker(){
	const [theme, storeTheme] = useState(localStorage.getItem('theme'));
	const [customizationModal, setCustomizationModal] = useState(false);
	const [currentFont, setCurrentFont] = useState();
    const [availableFonts, setAvailableFonts] = useState([]);
    const KEY  = "AIzaSyB0kiIpxS0Fy1TWmEi2zdOhPlPzaQL54Ps";
    const loadFonts = async () => {
        let o = []
        loadFamilies(KEY)
        .then(data => {
            for (let [key, value] of data) {
                o.push({value: value.family, label: value.family})
            }
            setAvailableFonts(o)
        })
    }
	const [background, setBackground] = useState();
	const [textColor, setextColor] = useState();
	const [secondaryTextColor, setSecondaryTextColor] = useState();
	const [primary, setPrimary] = useState();
	const [secondary, setSecondary] = useState();
	const [light, setLight] = useState();
	const [success, setSuccess] = useState();
	const [danger, setDanger] = useState();
	const [warning, setWarning] = useState();
	const [radius, setRadius] = useState();
	const availableThemes = [
		{
			name: 'light',
			background: '#EFF5F5',
			textColor: '#000D25',
			secondaryTextColor: '#F6F8FF',
			primary: '#1D9BF0',
			secondary: '#EFF5F5',
			light: '#fff',
			success: '#EBC7E8',
			danger: '#D23369',
			warning: '#FF9F29'
		},
		{
			name: 'dark',
			background: '#0d1117',
			textColor: '#fff',
			secondaryTextColor: '#fff',
			primary: '#1D9BF0',
			secondary: '#0d1117',
			light: '#161b22',
			success: '#00BFA6',
			danger: '#ef476f',
			warning: '#F9A826'
		},
		{
			name: 'navy',
			background: '#0E273C',
			textColor: '#fff',
			secondaryTextColor: '#fff',
			primary: '#1D9BF0',
			secondary: '#0d1117',
			light: '#161b22',
			success: '#00BFA6',
			danger: '#ef476f',
			warning: '#F9A826'
		}
	]
	const html = document.querySelector("html");
	const changeTheme = (type) => {
		var currentTheme = html.getAttribute("data-theme");
		var targetTheme = type;
		html.setAttribute('data-theme', targetTheme)
		localStorage.setItem('theme', targetTheme);
		storeTheme(targetTheme)
	}
	useEffect(() => {
		var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
		storedTheme = storedTheme ? storedTheme : 'dark';
		html.setAttribute('data-theme', storedTheme)
		storeTheme(storedTheme);
		loadFonts()
	}, [])
    useEffect(() => {
		const root = document.documentElement;
		if(currentFont != 'Poppins'){
			load({[currentFont]: ['400', '400i', '700', '800']});
		}
        root.style.setProperty('--fontFamily', currentFont ? currentFont : 'Poppins')
    }, [currentFont])
	const update = (key) => {
		const root = document.documentElement;
		switch (key) {
			case 'background':
				root.style.setProperty('--background', background)
			break;
			case 'textColor':
				root.style.setProperty('--textColor', textColor)
			break;
			case 'secondaryTextColor':
				root.style.setProperty('--secondaryTextColor', secondaryTextColor)
			break;
			case 'primary':
				root.style.setProperty('--primary', primary)
			break;
			case 'secondary':
				root.style.setProperty('--secondary', secondary)
			break;
			case 'light':
				root.style.setProperty('--light', light)
			break;
			case 'success':
				root.style.setProperty('--success', success)
			break;
			case 'danger':
				root.style.setProperty('--danger', danger)
			break;
			case 'warning':
				root.style.setProperty('--warning', warning)
			break;
			case 'radius':
				root.style.setProperty('--radius', radius)
			break;
			default:
			break;
		}
	}
	useEffect(() => {
		setBackground(getComputedStyle(document.documentElement).getPropertyValue('--background'))
		setextColor(getComputedStyle(document.documentElement).getPropertyValue('--textColor'))
		setSecondaryTextColor(getComputedStyle(document.documentElement).getPropertyValue('--secondaryTextColor'))
		setPrimary(getComputedStyle(document.documentElement).getPropertyValue('--primary'))
		setSecondary(getComputedStyle(document.documentElement).getPropertyValue('--secondary'))
		setLight(getComputedStyle(document.documentElement).getPropertyValue('--light'))
		setSuccess(getComputedStyle(document.documentElement).getPropertyValue('--success'))
		setDanger(getComputedStyle(document.documentElement).getPropertyValue('--danger'))
		setWarning(getComputedStyle(document.documentElement).getPropertyValue('--warning'))
		setRadius(getComputedStyle(document.documentElement).getPropertyValue('--radius'))
	}, [theme])
	return (
		<>
			{ !customizationModal &&
				<div onClick={() => setCustomizationModal(true)} className="btn btn-secondary text--left">
					<div className="flex flex--row">
						<div className="btn btn-circle btn-sm themepicker__color" style={{background: background}}></div>
						<div className="btn btn-circle btn-sm themepicker__color" style={{background: textColor}}></div>
						<div className="btn btn-circle btn-sm themepicker__color" style={{background: secondaryTextColor}}></div>
						<div className="btn btn-circle btn-sm themepicker__color" style={{background: primary}}></div>
						<div className="btn btn-circle btn-sm themepicker__color" style={{background: secondary}}></div>
						<div className="btn btn-circle btn-sm themepicker__color" style={{background: light}}></div>
						<div className="btn btn-circle btn-sm themepicker__color" style={{background: danger}}></div>
						<div className="btn btn-circle btn-sm themepicker__color" style={{background: warning}}></div>
					</div>
					<label className="font--12 capitalize">
						{theme} Theme | <span className="text--muted">Click & edit</span>
					</label>
				</div>
			}
			{ customizationModal && 
				<div className="modal-overlay active modal__right">
					<div className="modal active modal--lg modal__right">
						<div className="modal__header">
							<div className="modal__header-title">
								Theme Creator
							</div>
							<div className="close-modal modal--x">
								<svg viewBox="0 0 20 20" onClick={() => setCustomizationModal(false)}>
									<path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
								</svg>
							</div>
						</div>
						<div className="modal-content">
							<div className="modal__body text--left">
								<div className="card card__bordered">
									<label className="text--bold">Pick a template theme</label>
									<div className="mtop--20 theme__preset-wrapper">
										{ availableThemes.map((th, idx) => {
											return (
												<div key={`theme_${idx}`} className={ th.name == theme ? 'theme__preset theme__preset-active' : 'theme__preset'} onClick={() => changeTheme(th.name)}>
													<div className="btn btn-noHover" style={{background: th.background}}></div>
													<div className="btn btn-noHover" style={{background: th.textColor}}></div>
													<div className="btn btn-noHover" style={{background: th.secondaryTextColor}}></div>
													<div className="btn btn-noHover" style={{background: th.primary}}></div>
													<div className="btn btn-noHover" style={{background: th.secondary}}></div>
													<div className="btn btn-noHover" style={{background: th.light}}></div>
													<div className="btn btn-noHover" style={{background: th.danger}}></div>
													<div className="btn btn-noHover" style={{background: th.warning}}></div>
													<div className="theme__preset-title">{th.name}</div>
												</div>
											)
										})}
									</div>
								</div>
								<label className="text--bold">Create your own</label>
								<div className="card card__bordered">
									<label className="text--bold">Colors</label>
									<div className="form__group">
										<label className="text--bold">
											Background Color
										</label>
										<input type="text" value={background} onBlur={(e) => update('background', e.target.value)} onChange={(e) => setBackground(e.target.value)} />
									</div>
									<div className="form__group">
										<label className="text--bold">
											Text Color
										</label>
										<input type="text" value={textColor} onBlur={(e) => update('textColor', e.target.value)} onChange={(e) => setextColor(e.target.value)} />
									</div>
									<div className="form__group">
										<label className="text--bold">
											Secondary Text Color
										</label>
										<input type="text" value={secondaryTextColor} onBlur={(e) => update('secondaryTextColor', e.target.value)} onChange={(e) => setSecondaryTextColor(e.target.value)} />
									</div>
									<div className="form__group">
										<label className="text--bold">
											Primary Color
										</label>
										<input type="text" value={primary} onBlur={(e) => update('primary', e.target.value)} onChange={(e) => setPrimary(e.target.value)} />
									</div>
									<div className="form__group">
										<label className="text--bold">
											Secondary Color
										</label>
										<input type="text" value={secondary} onBlur={(e) => update('secondary', e.target.value)} onChange={(e) => setSecondary(e.target.value)} />
									</div>
									<div className="form__group">
										<label className="text--bold">
											Success Color
										</label>
										<input type="text" value={success} onBlur={(e) => update('success', e.target.value)} onChange={(e) => setSuccess(e.target.value)} />
									</div>
									<div className="form__group">
										<label className="text--bold">
											Danger Color
										</label>
										<input type="text" value={danger} onBlur={(e) => update('danger', e.target.value)} onChange={(e) => setDanger(e.target.value)} />
									</div>
									<div className="form__group">
										<label className="text--bold">
											Warning Color
										</label>
										<input type="text" value={warning} onBlur={(e) => update('warning', e.target.value)} onChange={(e) => setWarning(e.target.value)} />
									</div>
									<div className="form__group">
										<label className="text--bold">
											Light Color
										</label>
										<input type="text" value={light} onBlur={(e) => update('light', e.target.value)} onChange={(e) => setLight(e.target.value)} />
									</div>
								</div>
								<div className="card card__bordered">
									<label className="text--bold">Fonts</label>
									<div className="form__group">
										<label>Family</label>
										<Select options={availableFonts} onChange={(value) => setCurrentFont(value[0]['value'])}/>
									</div> 
								</div>
							</div>
							<div className="modal__footer text--right ">
								<button className="btn btn-secondary" onClick={() => setCustomizationModal(false)}>Done</button>
							</div>
						</div>
					</div>
				</div>
			}
		</>
	);
}

export default ThemePicker;
