import {useState, useEffect} from 'react';
import CopyCodeToClipBoard from './misc/CopyCodeToClipBoard';

function Cards() {
	const [currentPage, setCurrentPage] = useState('preview')
    const [shadow, setShadow] = useState(false)
	const [rounded, setRounded] = useState(false)
	const [bordered, setBordered] = useState(false)
    const availableCards = [
        {title: 'Normal', type: 'normal', button: 'primary'},
        {title: 'Bordered', type: 'bordered', button: 'primary'},
        {title: 'Glass', type: 'glass', button: 'primary'},
        {title: 'Primary', type: 'primary', button: 'primary'},
        {title: 'Secondary', type: 'secondary', button: 'secondary'},
        {title: 'Inverted', type: 'inverted', button: 'inverted'},
        {title: 'Success', type: 'success', button: 'success'},
        {title: 'Danger', type: 'danger', button: 'danger'},
        {title: 'Warning', type: 'warning', button: 'warning'},
    ];
    const getCardCss = (type) => {
        return `card ${type && 'card__'+type} ${shadow ? 'card__'+type+'-shadow' : ''} ${bordered ? 'card__'+type+'-bordered' : ''} ${rounded ?'card__rounded' : ''}`
    }

	return (
		<div>
			<div className="tabs">
				<div onClick={() => setCurrentPage('preview')} className={`tabs__item ${ currentPage == 'preview' && 'tabs__item-active'}`}>Preview</div>
				<div onClick={() => setCurrentPage('documentation')} className={`tabs__item ${ currentPage == 'documentation' && 'tabs__item-active'}`}>Documentation</div>
			</div>
			{ currentPage == 'preview' &&
				<div className="page__content flex flex--row">
					<div className="page__content-left card card__bordered card__transparent">
                         { availableCards.map((card, idx) => {
                            return (
                                <CopyCodeToClipBoard title={`Card ${card.type}`}>
                                    <div className={getCardCss(card.type)} key={`card__${idx}`}>
                                        <div className="card__title capitalize">{card.title}</div>
                                        <div className="card__header">
                                            This is a header
                                        </div>
                                        <div className="card__body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend, arcu in laoreet sollicitudin, urna massa ultrices ligula, id dictum tellus enim eu arcu. Nunc ullamcorper ligula eu ligula ornare, eu vestibulum arcu blandit. Etiam aliquam efficitur ante ut fringilla. Sed elit enim, faucibus vitae lobortis vitae, vestibulum a massa. Nunc id eleifend libero, et venenatis arcu. Proin tempor nisl sit amet lectus malesuada porta. Donec porta, orci quis bibendum vulputate, leo tellus condimentum metus, non vulputate odio nunc eu risus. Nam vitae nunc nisi. Etiam molestie ut dui et hendrerit. Sed non auctor tellus.
                                        </div>
                                        <div className="card__footer">
                                            <div className="flex__right">
                                                <button className="btn btn__secondary">Cancel</button>
                                                <button className={`btn btn__${card.button}`}>Accept</button>
                                            </div>
                                        </div>
                                    </div>
                                </CopyCodeToClipBoard>
                            )
                         })}
					</div>
					<div className="page__content-right">
                        <div className="card card__gradient">
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
			}
			{ currentPage == 'documentation' &&
				<div className="page__content flex flex--row">
					<div className="page__content-left card card__bordered card__transparent">
						asd
					</div>
				</div>
			}
		</div>
	);
}

export default Cards;
