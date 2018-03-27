import React from 'react';
import { NavLink } from 'react-router-dom';

function NavMainLinksLG() {
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
	);
}

export default NavMainLinksLG;
