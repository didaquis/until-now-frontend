import React from 'react';
import { NavLink } from 'react-router-dom';

function NavMainLinksXS() {
	return (
		<span data-toggle="collapse" data-target="#navbarCollapse">
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
		</span>
	);
}

export default NavMainLinksXS;
