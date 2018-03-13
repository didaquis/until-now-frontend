import React from 'react';

function ButtonNewElement(props) {
	return (
		<div className="row">
			<div className="col">
				<button type="button" className="btn btn-success">{props.text}</button>
			</div>
		</div>
	)
}

export default ButtonNewElement;