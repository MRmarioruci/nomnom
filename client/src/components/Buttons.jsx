import {useState, useEffect} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function Buttons() {
	const [sizes, setSizes] = useState([])
	const [shadow, setShadow] = useState(false)
	const [rounded, setRounded] = useState(false)
	const [bordered, setBordered] = useState(false)
	const availableButtons = ['primary', 'secondary', 'inverted', 'success', 'danger', 'warning', 'light'];
	const getActiveSizeCss = (targetSize) => {
		let o = 'btn btn-md ';
		let f = sizes.filter( size => size == targetSize)
		if(f.length > 0){
			o += 'btn-primary-3d';
		}else{
			o += 'btn-secondary btn-secondary-bordered';
		}
		return o;
	}
	const addSize = (targetSize) => {
		let f = sizes.filter( size => size == targetSize)
		if(f.length > 0){
			const filteredSizes = sizes.filter( size => size != targetSize)
			console.log(filteredSizes)
			setSizes(filteredSizes)
		}else{
			setSizes([...sizes, ...[targetSize]])
		}
	}
	const calcButtonCss = (type, size, button) => {
		const sizesMap = {
			'large': 'btn-lg',
			'normal': '',
			'medium': 'btn-md',
			'small': 'btn-sm',
		}
		size = sizesMap[size];
		return `btn ${size} btn-${button}${type && '-'+type} capitalize ${shadow ? `btn-${button}-shadow` : ''} ${rounded ? `btn-rounded` : ''} ${bordered ? `btn-${button}-bordered` : ''}`
	}
	const copyButtonCss = (type, size, button) => {
		let css = calcButtonCss(type, size, button);
		return css.replace("capitalize", "")
	}
	const mapButtons = (type) => {
		return (
			<div className="flex flex--column">
				{	sizes.map((size, idx) => {
						return (
							<div className="mtop--20 card flex__min-50" key={`type__${idx}`}>
								<div className="card__title capitalize">{size} Size</div>
								<div className="mtop--20 buttons__wrapper">
								{ availableButtons.map( (button, idx) => {
										return (
											<span key={`button__${type}__${idx}`}>
												<CopyToClipboard text={copyButtonCss(type, size, button)}>
													<button className={calcButtonCss(type, size, button)}>
														<div className="mainText">{button}</div>
														<div className="copyText">Click & copy</div>
													</button>
												</CopyToClipboard>
											</span>
										)
									})
								}
								</div>
							</div>
						)
					})
				}
			</div>
		)

	}
	useEffect(() => {
		setSizes(['normal'])
	}, [])
	return (
		<div className="page__content flex flex--row">
			<div className="page__content-left card card__bordered card__transparent">
				<label className="text--bold mleft--10">Default</label>
				{ mapButtons('') }
				<label className="text--bold mleft--10">Soft</label>
				{ mapButtons('soft') }
				<label className="text--bold mleft--10">Bordered</label>
				{ mapButtons('outline') }
				<label className="text--bold mleft--10">3D</label>
				{ mapButtons('3d') }
			</div>
			<div className="page__content-right">
				<div className="card card__glass">
					<div>
						<label className="text--muted">Filters</label>
						<div className="form__group">
							<label>Size</label>
							<div className="btn__group btn__group-rounded">
								<div className={getActiveSizeCss('large')} onClick={() => addSize('large')}>Large</div>
								<div className={getActiveSizeCss('normal')} onClick={() => addSize('normal')}>Normal</div>
								<div className={getActiveSizeCss('medium')} onClick={() => addSize('medium')}>Medium</div>
								<div className={getActiveSizeCss('small')} onClick={() => addSize('small')}>Small</div>
							</div>
						</div>
						<div className="form__group">
							<label>Shadow</label>
							<div className="btn__group-rounded">
								<div className={ !shadow ? 'btn btn-secondary btn-md' : 'btn btn-primary-3d btn-md'} onClick={() => setShadow(true)}>Yes</div>
								<div className={ shadow ? 'btn btn-secondary btn-md' : 'btn btn-primary-3d btn-md'} onClick={() => setShadow(false)}>No</div>
							</div>
						</div>
						<div className="form__group">
							<label>Rounded</label>
							<div className="btn__group-rounded">
								<div className={ !rounded ? 'btn btn-secondary btn-md' : 'btn btn-primary-3d btn-md'} onClick={() => setRounded(true)}>Yes</div>
								<div className={ rounded ? 'btn btn-secondary btn-md' : 'btn btn-primary-3d btn-md'} onClick={() => setRounded(false)}>No</div>
							</div>
						</div>
						<div className="form__group">
							<label>Bordered</label>
							<div className="btn__group-rounded">
								<div className={ !bordered ? 'btn btn-secondary btn-md' : 'btn btn-primary-3d btn-md'} onClick={() => setBordered(true)}>Yes</div>
								<div className={ bordered ? 'btn btn-secondary btn-md' : 'btn btn-primary-3d btn-md'} onClick={() => setBordered(false)}>No</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Buttons;
