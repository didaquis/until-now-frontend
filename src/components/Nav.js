import React from 'react';
import { NavLink } from 'react-router-dom';


function Nav() {
	return (
		<div className="row mb-8">
			<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
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
							<NavLink exact to="/collections" activeClassName="active" className="nav-link" replace>Collections</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact to="/items" activeClassName="active" className="nav-link" replace>Items</NavLink>
						</li>
					</ul>
					{/* <form className="form-inline mt-2 mt-md-0">
						<button className="btn btn-light my-2 my-sm-0" type="submit">Logout</button>
					</form> */}
				</div>
			</nav>
		</div>
	);
}

export default Nav;
