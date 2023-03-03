import {useState, useEffect} from 'react';
import CopyCodeToClipBoard from './misc/CopyCodeToClipBoard';

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
                            <CopyCodeToClipBoard title="H1">
                                <h1 className={fontColor != 'normal' && 'text--'+fontColor}>{sampleText}</h1>
                            </CopyCodeToClipBoard>
                        </div>
                    </div>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">H2</div>
                        <div className="mtop--20 buttons__wrapper">
                            <CopyCodeToClipBoard title="H2">
                                <h2 className={fontColor != 'normal' && 'text--'+fontColor}>{sampleText}</h2>
                            </CopyCodeToClipBoard>
                        </div>
                    </div>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">H3</div>
                        <div className="mtop--20 buttons__wrapper">
                            <CopyCodeToClipBoard title="H3">
                                <h3 className={fontColor != 'normal' && 'text--'+fontColor}>{sampleText}</h3>
                            </CopyCodeToClipBoard>
                        </div>
                    </div>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">H4</div>
                        <div className="mtop--20 buttons__wrapper">
                            <CopyCodeToClipBoard title="H4">
                                <h4 className={fontColor != 'normal' && 'text--'+fontColor}>{sampleText}</h4>
                            </CopyCodeToClipBoard>
                        </div>
                    </div>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">H5</div>
                        <div className="mtop--20 buttons__wrapper">
                            <CopyCodeToClipBoard title="H5">
                                <h5 className={fontColor != 'normal' && 'text--'+fontColor}>{sampleText}</h5>
                            </CopyCodeToClipBoard>
                        </div>
                    </div>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">H6</div>
                        <div className="mtop--20 buttons__wrapper">
                            <CopyCodeToClipBoard title="H6">
                                <h6 className={fontColor != 'normal' && 'text--'+fontColor}>{sampleText}</h6>
                            </CopyCodeToClipBoard>
                        </div>
                    </div>
                </div>
                <div className="card card__bordered card__transparent">
                    <h4 className="text--primary">Others</h4>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">Label</div>
                        <div className="mtop--20 buttons__wrapper">
                            <CopyCodeToClipBoard title="label">
                                <label className={fontColor != 'normal' && 'text--'+fontColor}>{sampleText}</label>
                            </CopyCodeToClipBoard>
                        </div>
                    </div>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">Paragraph</div>
                        <div className="mtop--20 buttons__wrapper">
                            <CopyCodeToClipBoard title="Paragraph">
                                <p className={fontColor != 'normal' && 'text--'+fontColor}>{sampleText}</p>
                            </CopyCodeToClipBoard>
                        </div>
                    </div>
                    <div className="mtop--10 card">
                        <div className="card__title capitalize">Link</div>
                        <div className="mtop--20 buttons__wrapper">
                            <CopyCodeToClipBoard title="Link">
                                <a>{sampleText}</a>
                            </CopyCodeToClipBoard>
                        </div>
                    </div>
                </div>
            </div>
			<div className="page__content-right">
				<div className="card card__glass">
					<div>
                        <div className="form__group">
                            <label>Sample text</label>
                            <div className="input__wrap">
                                <textarea placeholder="Type here..." value={sampleText} onChange={(e) => setSampleText(e.target.value) }></textarea>
                                <span className="focus"></span>
                            </div>
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
