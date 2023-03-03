import {useState, useEffect} from 'react';
import CopyCodeToClipBoard from './misc/CopyCodeToClipBoard';

function Forms() {
    const [easterEgg, setEasterEgg] = useState(false)
    let easterEggCount = 0
    const incrementEasterEgg = () => {
        easterEggCount++;
        if(easterEggCount == 2) setEasterEgg('Yep continue you are good at this...')
        if(easterEggCount == 5) setEasterEgg('Keep switching no one is going to notice.')
        if(easterEggCount == 8) setEasterEgg('Yeah you just wasted 10 seconds of your life...')
    }
    return (
		<div className="page__content flex flex--row">
            <div className="page__content-left">
                <div className="card card__bordered card__transparent">
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">Input</div>
                        <CopyCodeToClipBoard title="Form Elements">
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
                        </CopyCodeToClipBoard>
                    </div>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">Checkbox</div>
                        <CopyCodeToClipBoard title="Checkbox">
                            <div className="form__group mtop--20">
                                <input type="checkbox" checked />
                                <label>I agree</label>
                            </div>
                        </CopyCodeToClipBoard>
                        <CopyCodeToClipBoard title="Checkbox">
                            <div className="form__group">
                                <input type="checkbox" />
                                <label>Subscribe to our Newsletter</label>
                            </div>
                        </CopyCodeToClipBoard>
                    </div>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">Radio Button</div>
                        <CopyCodeToClipBoard title="Radio Buttons">
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
                        </CopyCodeToClipBoard>
                    </div>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">Switch</div>
                        <CopyCodeToClipBoard title="Switches">
                            <div className="form__group">
                                <input type="checkbox" onChange={(e) => incrementEasterEgg()}  className="switch" />
                                <label>{ !easterEgg ? 'Play with me' : easterEgg}</label>
                            </div>
                            <div className="form__group">
                                <input type="checkbox" checked  className="switch" />
                                <label>Turn off</label>
                            </div>
                            <div className="form__group">
                                <input type="checkbox" checked={false} className="switch" />
                                <label>Turn on</label>
                            </div>
                        </CopyCodeToClipBoard>
                    </div>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">Select</div>
                        <div className="form__group">
                            <label>Auto Width</label>
                            <div>
                                <CopyCodeToClipBoard title="Select Input">
                                    <select name="cars">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </CopyCodeToClipBoard>
                            </div>
                        </div>
                        <div className="form__group">
                            <label>Full Width</label>
                            <div>
                                <CopyCodeToClipBoard title="Select Input Full Width">
                                    <select name="cars" className="select__100">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </CopyCodeToClipBoard>
                            </div>
                        </div>
                    </div>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">Upload</div>
                        <CopyCodeToClipBoard title="Upload Input">
                            <div className="form__group input__upload">
                                <div className="input__upload-text">
                                    <span className="material-icons font--45">
                                        cloud_upload
                                    </span>
                                    <div className="font--20">Upload</div>
                                    <input type="file" />
                                </div>
                            </div>
                        </CopyCodeToClipBoard>
                    </div>
                </div>
            </div>
			<div className="page__content-right">
			</div>
		</div>
	);
}

export default Forms;
