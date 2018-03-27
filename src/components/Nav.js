import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarLoginButton from './NavbarLoginButton';
import NavMainLinks from './NavMainLinks';

import { recoverToken } from '../utils/util-functions';

function Nav() {
	return (
		<div className="row mb-8">
			<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark nav-padd">
				<NavLink className="navbar-brand" exact to="/" replace>Until Now</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarCollapseXS"
					aria-controls="navbarCollapse"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

					<div className="d-md-none collapse navbar-collapse" id="navbarCollapseXS" data-toggle="collapse" data-target="#navbarCollapseXS">
						{
							(recoverToken()) ?
								(<NavMainLinks />)
								:
								(<ul className="navbar-nav mr-auto"></ul>)
						}
						<NavbarLoginButton />
					</div>

					<div className="d-none d-md-block collapse navbar-collapse" >
						{
							(recoverToken()) ?
								(<NavMainLinks />)
								:
								(<ul className="navbar-nav mr-auto"></ul>)
						}
						<NavbarLoginButton />
					</div>

			</nav>
		</div>
	);
}

export default Nav;
