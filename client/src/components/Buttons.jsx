import {useState, useEffect} from 'react';
import CopyCodeToClipBoard from './misc/CopyCodeToClipBoard';

function Buttons() {
	const [currentPage, setCurrentPage] = useState('preview')
	const [sizes, setSizes] = useState([])
	const [shadow, setShadow] = useState(false)
	const [rounded, setRounded] = useState(false)
	const [bordered, setBordered] = useState(false)
	const availableButtons = [
		{type: 'primary', code: ''},
		{type: 'secondary', code: ''},
		{type: 'inverted', code: ''},
		{type: 'success', code: ''},
		{type: 'danger', code: ''},
		{type: 'warning', code: ''},
		{type: 'light', code: ''}
	];
	const getActiveSizeCss = (targetSize) => {
		let o = 'btn btn__md ';
		let f = sizes.filter( size => size == targetSize)
		if(f.length > 0){
			o += 'btn__primary-3d';
		}else{
			o += 'btn__secondary btn__secondary-bordered';
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
			'large': 'btn__lg',
			'normal': '',
			'medium': 'btn__md',
			'small': 'btn__sm',
		}
		size = sizesMap[size];
		return `btn ${size} btn__${button}${type && '-'+type} capitalize${shadow ? ` btn__${button}-shadow` : ''}${rounded ? ` btn__rounded` : ''}${bordered ? ` btn__${button}-bordered` : ''}`
	}
	const mapButtons = (type) => {
		return (
			<div className="flex flex--column mtop--20 card flex__min-50">
				<>
					{	sizes.map((size, idx) => {
							return (
								<div key={`type__${idx}`}>
									<div className="card__title capitalize">{size} Size</div>
									<div className="mtop--20 buttons__wrapper">
									{ availableButtons.map( (button, idx) => {
											return (
												<span key={`button__${type}__${idx}`}>
													<CopyCodeToClipBoard title={`Button ${button.type}`}>
														<button className={calcButtonCss(type, size, button.type)}>
															{button.type}
														</button>
													</CopyCodeToClipBoard>
												</span>
											)
										})
									}
									</div>
								</div>
							)
						})
					}
				</>
				{ availableButtons.map( (button, idx) => {
						return (
							button.code
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
		<div>
			{/* <div className="tabs">
				<div onClick={() => setCurrentPage('preview')} className={`tabs__item ${ currentPage == 'preview' && 'tabs__item-active'}`}>Preview</div>
				<div onClick={() => setCurrentPage('documentation')} className={`tabs__item ${ currentPage == 'documentation' && 'tabs__item-active'}`}>Documentation</div>
			</div> */}
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
									<div className={ !shadow ? 'btn btn__secondary btn__md' : 'btn btn__primary-3d btn__md'} onClick={() => setShadow(true)}>Yes</div>
									<div className={ shadow ? 'btn btn__secondary btn__md' : 'btn btn__primary-3d btn__md'} onClick={() => setShadow(false)}>No</div>
								</div>
							</div>
							<div className="form__group">
								<label>Rounded</label>
								<div className="btn__group-rounded">
									<div className={ !rounded ? 'btn btn__secondary btn__md' : 'btn btn__primary-3d btn__md'} onClick={() => setRounded(true)}>Yes</div>
									<div className={ rounded ? 'btn btn__secondary btn__md' : 'btn btn__primary-3d btn__md'} onClick={() => setRounded(false)}>No</div>
								</div>
							</div>
							<div className="form__group">
								<label>Bordered</label>
								<div className="btn__group-rounded">
									<div className={ !bordered ? 'btn btn__secondary btn__md' : 'btn btn__primary-3d btn__md'} onClick={() => setBordered(true)}>Yes</div>
									<div className={ bordered ? 'btn btn__secondary btn__md' : 'btn btn__primary-3d btn__md'} onClick={() => setBordered(false)}>No</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Buttons;
