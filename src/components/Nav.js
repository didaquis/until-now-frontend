import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarLoginButton from './NavbarLoginButton';
import NavMainLinksLG from './NavMainLinksLG';
import NavMainLinksXS from './NavMainLinksXS';

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
					data-target="#navbarCollapse"
					aria-controls="navbarCollapse"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					{
						(recoverToken()) ?
							(
								<span className="mr-auto">
									<span className="d-none d-lg-block mr-auto">
										<NavMainLinksLG />
									</span>
									<span className="d-md-none mr-auto">
										<NavMainLinksXS />
									</span>
								</span>
							)
							:
							(
								<ul className="navbar-nav mr-auto"></ul>
							)
					}
					<NavbarLoginButton />
				</div>
			</nav>
		</div>
	);
}

export default Nav;
