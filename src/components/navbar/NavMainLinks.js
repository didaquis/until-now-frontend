import React from 'react';
import { NavLink } from 'react-router-dom';

function NavMainLinks() {
	return (
		<ul className="navbar-nav mr-auto">
			<li className="nav-item">
				<NavLink
					exact
					to="/collections"
					activeClassName="active"
					className="nav-link"
					replace
				>
					Manage collections
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
	);
}

export default NavMainLinks;
