import {useState, useEffect} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function Forms() {
    return (
		<div className="page__content flex flex--row">
            <div className="page__content-left">
                <div className="card card__bordered card__transparent">
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">Inputs</div>
                        <div className="form__group">
                            <label>Email Address *</label>
                            <div className="input__wrap">
                                <input type="email" name="email" placeholder="Eg. example@email.com" />
                                <span className="focus"></span>
                            </div>
                        </div>
                        <div className="form__group">
                            <label>Name *</label>
                            <div className="input__wrap input__error">
                                <input type="text" name="text" placeholder="Eg. Mario" />
                                <span className="focus"></span>
                            </div>
                        </div>
                        <div className="form__group">
                            <label>Password *</label>
                            <div className="input__wrap">
                                <input type="text" name="password" placeholder="Eg. Mario" />
                                <span className="focus"></span>
                            </div>
                        </div>
                        <div className="form__group">
                            <label>Textarea</label>
                            <div className="input__wrap">
                                <textarea placeholder="Eg. Type your message"></textarea>
                                <span className="focus"></span>
                            </div>
                        </div>
                    </div>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">Checkbox</div>
                        <div className="form__group">
                            <input type="checkbox" checked />
                            <label>I agree</label>
                        </div>
                        <div className="form__group">
                            <input type="checkbox" />
                            <label>Subscribe to our Newsletter</label>
                        </div>
                    </div>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">Radio Buttons</div>
                        <div className="form__group">
                            <label>Select the best option</label>
                            <div className="mtop--10">
                                <input name="radio" type="radio" checked />
                                <label>Option 1</label>
                            </div>
                            <div className="mtop--10">
                                <input name="radio" type="radio"/>
                                <label>Option 2</label>
                            </div>
                        </div>
                    </div>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">Switches</div>
                        <div className="form__group">
                            <input type="checkbox" checked  className="switch" />
                            <label>Turn off</label>
                        </div>
                        <div className="form__group">
                            <input type="checkbox" checked={false} className="switch" />
                            <label>Turn on</label>
                        </div>
                    </div>
                </div>
            </div>
			<div className="page__content-right">
				<div className="card card__glass">
					<div>
                        asd
					</div>
				</div>
			</div>
		</div>
	);
}

export default Forms;
