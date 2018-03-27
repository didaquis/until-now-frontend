import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarLoginButton from './NavbarLoginButton';

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
								<ul className="navbar-nav mr-auto">
									<li className="nav-item">
										<NavLink
											exact
											to="/collections"
											activeClassName="active"
											className="nav-link"
											replace
										>
											Collections
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											exact
											to="/summary"
											activeClassName="active"
											className="nav-link"
											replace
										>
											Equipment summary
										</NavLink>
									</li>
								</ul>
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
