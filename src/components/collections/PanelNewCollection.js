import React from 'react';

import MessageValidateForm from '../MessageValidateForm';

import untilNowApi from '../../utils/until-now-api-client';

class PanelNewCollection extends React.Component {
	constructor() {
		super();
		this.state = {
			nameCollectionInput: ''
		};
	}

	fillInput = (input) => {
		if (input.id === 'nameCollectionInput') {
			this.setState({ nameCollectionInput: input.value });
		}
	}

	handlerSubmit = () => {
		untilNowApi.createCollection(this.state.nameCollectionInput, '5aa6bb9e341a690ff909faee')
			.then(res => {
				if (res.status === 'OK') {
					window.location.reload();
				} else {
					console.log(res);
				}
			})
			.catch(err => console.log(err));
	}

	handlerClose = () => {
		this.setState({ nameCollectionInput: '' });
		this.props.onClick();
	}

	render() {
		if (this.props.show) {
			return (
				<section>
					<div className="row">
						<div className="col-md-8 offset-md-2">
							<div className="card">
								<div className="card-body">
									<h4 className="card-title">Add new collection</h4>
									<form onSubmit={(e) => { e.preventDefault(); this.handlerSubmit(); }}>
										<div className="form-group">
											<label htmlFor="nameCollectionInput">
												Name of collection
											</label>
											<input
												type="text"
												className="form-control"
												id="nameCollectionInput"
												aria-describedby="nameCollectionHelp"
												placeholder="Enter name of collection"
												required
												pattern="[A-Za-z0-9.\-_\*\/\|]{3,}"
												autoFocus
												onChange={e => this.fillInput(e.target)}
												value={this.state.nameCollectionInput}
											/>
											<small id="nameCollectionHelp" className="form-text text-muted">At least 3 chars. Spaces are not valid chars</small>
											{
												(this.state.nameCollectionInput === '') ?
													(<MessageValidateForm text={'Provide name of collection'} />) : ('')
											}
										</div>
										<button onClick={(e) => { e.preventDefault(); this.handlerClose(); }} className="btn btn-secondary">Close
										</button>
										<button type="submit" className="btn btn-success float-right">Create</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
			);
		}
		return null;
	}
}

export default PanelNewCollection;
