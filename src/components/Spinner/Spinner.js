import React from 'react';
import './Spinner.css';

function Spinner() {
	return (
		<div className="row">
			<div className="col mt-4 mb-4">
				<div className="mx-auto loader"></div>
			</div>
		</div>
	);
}

export default Spinner;
