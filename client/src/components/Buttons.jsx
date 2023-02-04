function Buttons() {
	return (
		<>
            <label className="text--bold mleft--10">Default</label>
			<div className="flex flex--row">
				<div className="mtop--20 card">
					<div className="card__title">Normal Size</div>
					<div className="mtop--20">
						<button type="button" className="btn btn-primary">Primary</button>
						<button type="button" className="btn btn-secondary">Secondary</button>
						<button type="button" className="btn btn-success">Success</button>
						<button type="button" className="btn btn-danger">Danger</button>
                        <button type="button" className="btn btn-warning">Warning</button>
						<button type="button" className="btn btn-light">Light</button>
						<button type="button" className="btn btn-inverted">Inverted</button>
					</div>
				</div>
				<div className="mtop--20 card">
					<div className="card__title">Medium Size</div>
					<div className="mtop--20">
						<button type="button" className="btn btn-primary btn-md">Primary</button>
						<button type="button" className="btn btn-secondary btn-md">Secondary</button>
						<button type="button" className="btn btn-success btn-md">Success</button>
						<button type="button" className="btn btn-danger btn-md">Danger</button>
                        <button type="button" className="btn btn-warning btn-md">Warning</button>
						<button type="button" className="btn btn-light btn-md">Light</button>
						<button type="button" className="btn btn-inverted btn-md">Inverted</button>
					</div>
				</div>
				<div className="mtop--20 card">
					<div className="card__title">Small Size</div>
					<div className="mtop--20">
						<button type="button" className="btn btn-primary btn-sm">Primary</button>
						<button type="button" className="btn btn-secondary btn-sm">Secondary</button>
						<button type="button" className="btn btn-success btn-sm">Success</button>
						<button type="button" className="btn btn-danger btn-sm">Danger</button>
                        <button type="button" className="btn btn-warning btn-sm">Warning</button>
						<button type="button" className="btn btn-light btn-sm">Light</button>
						<button type="button" className="btn btn-inverted btn-sm">Inverted</button>
					</div>
				</div>
			</div>
            <label className="text--bold mleft--10">Soft</label>
			<div className="mtop--20 flex flex--row">
				<div className="mtop--20 card ">
					<div className="card__title">Normal Size</div>
					<div className="mtop--20">
						<button type="button" className="btn btn-primary btn-primary-soft">Primary</button>
						<button type="button" className="btn btn-secondary btn-secondary-soft">Secondary</button>
						<button type="button" className="btn btn-success btn-success-soft">Success</button>
						<button type="button" className="btn btn-danger btn-danger-soft">Danger</button>
                        <button type="button" className="btn btn-warning btn-warning-soft">Warning</button>
						<button type="button" className="btn btn-light btn-light-soft">Light</button>
						<button type="button" className="btn btn-inverted btn-inverted-soft">Inverted</button>
					</div>
				</div>
			</div>

            <label className="text--bold mleft--10">Bordered</label>
			<div className="mtop--20 flex flex--row">
				<div className="mtop--20 card ">
					<div className="card__title">Normal Size</div>
					<div className="mtop--20">
						<button type="button" className="btn btn-primary btn-primary-outline">Primary</button>
						<button type="button" className="btn btn-secondary btn-secondary-outline">Secondary</button>
						<button type="button" className="btn btn-success btn-success-outline">Success</button>
						<button type="button" className="btn btn-danger btn-danger-outline">Danger</button>
                        <button type="button" className="btn btn-warning btn-warning-outline">Warning</button>
						<button type="button" className="btn btn-light btn-light-outline">Light</button>
						<button type="button" className="btn btn-inverted btn-inverted-outline">Inverted</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Buttons;
