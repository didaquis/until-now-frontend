import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarLoginButton from './NavbarLoginButton';
import NavMainLinks from './NavMainLinks';

import { recoverToken } from '../../utils/util-functions';

function NavMain() {
	return (
		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark nav-padd">
			<span data-toggle="collapse" data-target="#navbarCollapse">
			<NavLink className="navbar-brand" exact to="/" replace>Until Now</NavLink>
			</span>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarCollapse"
				aria-controls="navbarCollapse"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarCollapse" data-toggle="collapse" data-target="#navbarCollapse">
				{
					(recoverToken()) ?
						(<NavMainLinks />)
						:
						(<ul className="navbar-nav mr-auto"></ul>)
				}
				<NavbarLoginButton />
			</div>
		</nav>
	);
}

export default NavMain;
