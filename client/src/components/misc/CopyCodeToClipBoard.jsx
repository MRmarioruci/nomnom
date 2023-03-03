import React, {useRef, useEffect, useState} from 'react'
import CopyToClipboard from 'react-copy-html-to-clipboard';
import Highlight from 'react-highlight'
import '/node_modules/highlight.js/scss/vs2015.scss'
var formatter = require('html-formatter');

function CopyCodeToClipBoard({children, title, documentation}) {
	const elementRef = useRef(null);
	const [text, setText] = useState('')
	const [copied, setCopied] = useState(false)
	const [modal, setModal] = useState(false)
	const [currentTab, setCurrentTab] = useState('preview')

	const onCopy = () => {
		setCopied(true)
		setTimeout(() => {
			setCopied(false)
		}, 3000);
	}
	useEffect(() => {
		setText(elementRef.current.innerHTML)
	}, [elementRef.current, children])
	return (
		<>
			<div className="copy__code-wrapper" onClick={() => setModal(true)}>
				<div className={`copy__code-floater`}>
					<div className="copy__code-floaterGet">
						More...
					</div>
				</div>
				<div ref={elementRef}>{children}</div>
			</div>
			{ modal &&
				<div className="modal-overlay active">
					<div className="modal active modal--xl">
						<div className="modal__header">
							<div className="modal__header-title">
							</div>
							<div className="close-modal modal--x" onClick={(e) => {e.stopPropagation(); setModal(false)}}>
								<svg viewBox="0 0 20 20">
									<path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
								</svg>
							</div>
						</div>
						<div className="modal-content">
							<div className="modal__body text--left">
								<div className="flex flex--row">
									<div className="preview__card">
										{ documentation &&
											<div className='tabs'>
												<div className={`tabs__item preview__card-title ${currentTab == 'preview' ? 'tabs__item-active' : ''}`} onClick={() => setCurrentTab('preview') }>
													<span className="material-icons font--25 vm--align">
														preview
													</span>
													<span className="capitalize">{title ? title : 'Preview'}</span>
												</div>
												<div className={`tabs__item ${currentTab == 'documentation' ? 'tabs__item-active' : ''}`} onClick={() => setCurrentTab('documentation') }>
													<span className="material-icons font--25 vm--align">
														article
													</span>
													Documentation
												</div>
											</div>
										}
										{!documentation &&
											<h5 className="capitalize mleft--15">{title ? title : 'Preview'}</h5>
										}
										<div className="card card__bordered">
											{ currentTab === 'preview' && <div dangerouslySetInnerHTML={{__html: text}}></div> }
											{ currentTab === 'documentation' &&
												<div className="mleft--20">
													<p>The card has the following structure:</p>
													<ul>
														<li>The <b>div</b> element with class <b>card</b> contains the entire card component.</li>
														<li>The <b>div</b> element with class <b>card__title</b> displays the title of the card, which is "Warning" in this case. The capitalize class makes the title text appear in uppercase letters.</li>
														<li>The <b>div</b> element with class <b>card__header</b> displays a header for the warning message.</li>
														<li>The <b>div</b> element with class <b>card__body</b> contains the main content of the card, which is the warning message in this case.</li>
														<li>The <b>div</b> element with class <b>card__footer</b> contains a group of buttons that allow the user to interact with the card. In this case, there are two buttons, one with the text "Cancel" and another with the text "Accept". The btn class styles the buttons, and the btn__secondary and btn__warning classes set the style for the different button types.													</li>
													</ul>
												</div>
											}
										</div>
									</div>
									<div className="preview__card">
										<pre style={{marginTop: '33px'}}>
											<div>HTML</div>
											<Highlight className="html">
												{formatter.render(text)}
											</Highlight>
										</pre>
									</div>
								</div>
							</div>
							<div className="modal__footer text--right ">
								{ copied &&
									<div className="float--right btn btn__md btn__success-3d">
										<span className="material-icons">
											done
										</span>
										Copied. Hooray, I feel useful.
									</div>
								}
								{ !copied &&
								<CopyToClipboard text={formatter.render(text)} onCopy={() => onCopy()} ashtml>
									<div className="float--right btn btn__light">
										<span className="material-icons">
											content_copy
										</span>
										Copy
									</div>
								</CopyToClipboard>
								}
							</div>
						</div>
					</div>
				</div>
			}
		</>
	)
}

export default CopyCodeToClipBoard