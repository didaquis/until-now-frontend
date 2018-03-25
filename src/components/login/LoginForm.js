import React from 'react';
import MessageValidateForm from '../MessageValidateForm';

import { saveSessionSTO, deleteSessionSTO, recoverToken } from '../../utils/util-functions';

import untilNowApi from '../../utils/until-now-api-client';

class LoginForm extends React.Component {
	constructor() {
		super();
		this.state = {
			usernameInput: '',
			passwordInput: ''
		};
	}

	componentWillMount() {
		if (recoverToken()) {
			this.props.history.push('/categories');
		}
	}

	fillInput = (e) => {
		const prop = e.target.name;
		this.setState({ [prop]: e.target.value });
	}

	handlerSubmit = () => {
		untilNowApi.loginUser(this.state.usernameInput, this.state.passwordInput)
			.then(res => {
				if (res.status === 'OK') {
					saveSessionSTO('userData', res.data);
					this.props.history.push('/categories');
				} else {
					console.log(res);
					deleteSessionSTO();
				}
			})
			.catch(err => {
				console.log(err);
				deleteSessionSTO();
			});
	}

	render() {
		return (
			<section>
				<div className="row">
					<div className="col-md-8 offset-md-2">
						<div className="card">
							<div className="card-body">
								<h4 className="card-title">Login form</h4>
								<form onSubmit={(e) => { e.preventDefault(); this.handlerSubmit(); }}>
									<div className="form-group">
										<label htmlFor="usernameInput">
											Username
										</label>
										<input
											type="text"
											className="form-control"
											id="usernameInput"
											name="usernameInput"
											aria-describedby="usernameHelp"
											placeholder="Enter your username"
											required
											pattern="[A-Za-z0-9.\-_\*\/\|]{3,}"
											autoFocus
											onChange={e => this.fillInput(e)}
											value={this.state.nameCollectionInput}
										/>
										<small id="usernameHelp" className="form-text text-muted">At least 3 chars. Spaces are not valid chars</small>
										{
											(this.state.usernameInput === '') ?
												(<MessageValidateForm text={'Provide username'} />) : ('')
										}
									</div>
									<div className="form-group">
										<label htmlFor="passwordInput">
											Password
										</label>
										<input
											type="password"
											className="form-control"
											id="passwordInput"
											name="passwordInput"
											aria-describedby="passwordHelp"
											placeholder="Enter your password"
											required
											pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!*^?+-_@#$%&]{8,}$"
											onChange={e => this.fillInput(e)}
											value={this.state.nameCollectionInput}
										/>
										<small id="passwordHelp" className="form-text text-muted">At least 8 chars. Must contain numbers, lowercase chars and uppercase chars</small>
										{
											(this.state.passwordInput === '') ?
												(<MessageValidateForm text={'Provide password'} />) : ('')
										}
									</div>

									<button type="submit" className="btn btn-success float-right">Login</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default LoginForm;
