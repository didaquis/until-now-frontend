import React from 'react';

function MessageValidateForm(props) {
	return (
		<small className="p-2 form-text bg-danger text-white">
			{props.text}
		</small>
	);
}

export default MessageValidateForm;
