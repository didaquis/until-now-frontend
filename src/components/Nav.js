import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginButton from './login/LoginButton';


function Nav() {
	return (
		<div className="row mb-8">
			<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark nav-padd">
				<a className="navbar-brand" href="/">Until Now</a>
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
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<NavLink
								exact
								to="/categories"
								activeClassName="active"
								className="nav-link"
								replace
							>
								Categories
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
					<LoginButton />
				</div>
			</nav>
		</div>
	);
}

export default Nav;
