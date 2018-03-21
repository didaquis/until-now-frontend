import React from 'react';

function Footer() {
	return (
		<footer className="container mt-7">
			<nav className="navbar fixed-bottom navbar-dark bg-dark">
				<div className="col text-center">
					<small className="text-light">Made by Dídac García</small>
					<a href="https://twitter.com/didaquis" rel="noopener noreferrer" target="_blank" title="didaquis en Twitter"><i className="fa fa-twitter fa-lg mr-2 ml-2"></i></a>
					<a href="https://github.com/didaquis" rel="noopener noreferrer" target="_blank" title="didaquis en GitHub"><i className="fa fa-github fa-lg mr-2 ml-2"></i></a>
				</div>
			</nav>
		</footer>
	);
}

export default Footer;
