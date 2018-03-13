import React from 'react';

function Header(props) {

	return (
		<div className="row">
			<div className="col">
				<h2 className="text-center mb-4">{props.title}</h2>
			</div>
		</div>
	)
}

export default Header;