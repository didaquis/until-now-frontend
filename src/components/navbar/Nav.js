import React from 'react';
import NavMain from './NavMain';

function Nav() {
	return (
		<div className="row mb-8">
			<span className="d-md-none">
				<NavMain />
			</span>

			<span className="d-none d-md-block">
				<NavMain />
			</span>
		</div>
	);
}

export default Nav;
