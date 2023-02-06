import {useState, useEffect} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function Forms() {
    return (
		<div className="page__content flex flex--row">
            <div className="page__content-left">
                <div className="card card__bordered card__transparent">
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">Inputs</div>
                        <div className="wrap-input100 validate-input alert-validate">
                            <input id="email" className="input100" type="text" name="email" placeholder="Eg. example@email.com" />
                            <span className="focus-input100"></span>
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
