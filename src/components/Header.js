import React from 'react';

function Header(props) {

	return (
		<div className="row">
			<div className="col">
				<h2 className="text-center mb-4">{props.title}</h2>
				<p className="text-center lead">{props.subtitle}</p>
			</div>
		</div>
	)
}

export default Header;