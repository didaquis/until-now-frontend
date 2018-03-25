import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { recoverSessionSTO, deleteSessionSTO } from '../../utils/util-functions';

class LoginButton extends React.Component {
	constructor() {
		super();
		this.state = {
		};
	}

	handlerLogout = () => {
		deleteSessionSTO();
		this.props.history.push('/');
	}

	render() {
		if (recoverSessionSTO('userData')) {
			return (
				<div className="form-inline mt-2 mt-md-0">
					<button
						className="btn btn-light btn-sm my-2 my-sm-0"
						onClick={(e) => { e.preventDefault(); this.handlerLogout(); }}
					>
						Logout
					</button>
				</div>
			);
		}
		return (
			<div className="form-inline mt-2 mt-md-0">
				<NavLink
					exact
					to="/login"
					className="btn btn-light btn-sm my-2 my-sm-0"
					replace
				>
					Login
				</NavLink>
			</div>
		);
	}
}

export default withRouter(LoginButton);
