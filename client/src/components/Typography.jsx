import {useState, useEffect} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function Typography() {
    const [sampleText, setSampleText] = useState('The quick brown fox...')
    const [fontColor, setFontColor] = useState('normal')

    const getActiveColorCss = (color) => {
        let o = 'card card__bordered ';
		if(color == fontColor){
			o += 'card__active';
		}else{
			o += '';
		}
		return o;
    }

	return (
		<div className="page__content flex flex--row">
            <div className="page__content-left">
                <div className="card card__bordered card__transparent">
                    <h4 className="text--primary">Headings</h4>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">H1</div>
                        <div className="mtsop--20 buttons__wrapper">
                            <h1 className={fontColor != 'normal' && 'text--'+fontColor}>{sampleText}</h1>    
                        </div>
                    </div>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">H2</div>
                        <div className="mtop--20 buttons__wrapper">
                            <h2 className={fontColor != 'normal' && 'text--'+fontColor}>{sampleText}</h2>
                        </div>
                    </div>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">H3</div>
                        <div className="mtop--20 buttons__wrapper">
                            <h3 className={fontColor != 'normal' && 'text--'+fontColor}>{sampleText}</h3>
                        </div>
                    </div>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">H4</div>
                        <div className="mtop--20 buttons__wrapper">
                            <h4 className={fontColor != 'normal' && 'text--'+fontColor}>{sampleText}</h4>
                        </div>
                    </div>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">H5</div>
                        <div className="mtop--20 buttons__wrapper">
                            <h5 className={fontColor != 'normal' && 'text--'+fontColor}>{sampleText}</h5>
                        </div>
                    </div>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">H6</div>
                        <div className="mtop--20 buttons__wrapper">
                            <h6 className={fontColor != 'normal' && 'text--'+fontColor}>{sampleText}</h6>
                        </div>
                    </div>
                </div>
                <div className="card card__bordered card__transparent">
                    <h4 className="text--primary">Others</h4>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">Label</div>
                        <div className="mtop--20 buttons__wrapper">
                            <label className={fontColor != 'normal' && 'text--'+fontColor}>{sampleText}</label>    
                        </div>
                    </div>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">Paragraph</div>
                        <div className="mtop--20 buttons__wrapper">
                            <p className={fontColor != 'normal' && 'text--'+fontColor}>{sampleText}</p>
                        </div>
                    </div>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">Link</div>
                        <div className="mtop--20 buttons__wrapper">
                            <a>{sampleText}</a>
                        </div>
                    </div>
                </div>
            </div>
			<div className="page__content-right">
				<div className="card card__glass">
					<div>
                        <div className="form__group">
							<label>Sample Text</label>
							<textarea type="text" placeholder="Type here..." value={sampleText} onChange={(e) => setSampleText(e.target.value) }>
                            </textarea>
						</div>
                        <div className="form__group">
							<label>Type</label>
							<div className="pointer">
                                <div className={getActiveColorCss('normal')} onClick={() => setFontColor('normal')}>
                                    <input type="checkbox" checked={fontColor=='normal'} />
                                    <label>Normal</label>
                                </div>
								<div className={getActiveColorCss('primary')} onClick={() => setFontColor('primary')}>
                                    <input type="checkbox" checked={fontColor=='primary'} />
                                    <label>Primary</label>
                                </div>
								<div className={getActiveColorCss('secondary')} onClick={() => setFontColor('secondary')}>
                                    <input type="checkbox" checked={fontColor=='secondary'} />
                                    <label>Secondary</label>
                                </div>
								<div className={getActiveColorCss('success')} onClick={() => setFontColor('success')}>
                                    <input type="checkbox" checked={fontColor=='success'} />
                                    <label>Success</label>
                                </div>
								<div className={getActiveColorCss('danger')} onClick={() => setFontColor('danger')}>
                                    <input type="checkbox" checked={fontColor=='danger'} />
                                    <label>Danger</label>
                                </div>
                                <div className={getActiveColorCss('warning')} onClick={() => setFontColor('warning')}>
                                    <input type="checkbox" checked={fontColor=='warning'} />
                                    <label>Warning</label>
                                </div>
                                <div className={getActiveColorCss('muted')} onClick={() => setFontColor('muted')}>
                                    <input type="checkbox" checked={fontColor=='muted'} />
                                    <label>Muted</label>
                                </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Typography;
