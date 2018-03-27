import React from 'react';
import './ButtonSpinner.css';

function ButtonSpinner(props) {
	if (props.visible) {
		return (
			<span className="spanPosition">
				<span className="spinner"></span>
			</span>
		);
	}
	return null;
}

export default ButtonSpinner;
