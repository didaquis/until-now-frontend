import React from 'react';

import untilNowApi from '../utils/until-now-api-client';

class PanelNewItem extends React.Component {
	constructor() {
		super();
		this.state = {
			inputName: '',
			inputStart: '',
			inputEnd: '',
			inputReference: '',
			inputNotes: '',
			idOfCollection: ''
		}
	}

	componentWillMount(){
		this.setState({idOfCollection: this.props.idOfCollection});
	}


	fillInput = (input) => {
		if(input.id === 'inputName'){
			this.setState({ inputName: input.value });
		}
		if(input.id === 'inputStart'){
			this.setState({ inputStart: input.value });
		}
		if(input.id === 'inputEnd'){
			this.setState({ inputEnd: input.value });
		}
		if(input.id === 'inputReference'){
			this.setState({ inputReference: input.value });
		}
		if(input.id === 'inputNotes'){
			this.setState({ inputNotes: input.value });
		}
	}

	handlerSubmit = () =>{
		untilNowApi.createItem(this.state.inputName, this.state.inputStart, this.state.inputEnd, this.state.inputReference, this.state.inputNotes, this.state.idOfCollection )
			.then(res => {
				if(res.status === 'OK'){
					window.location.reload();
				}else{
					console.log(res)
				}
			})
			.catch(err => console.error(err))
	}

	render() {
		if (this.props.show) {
			return (
				<section>
					<div className="row">
						<div className="col-md-8 offset-md-2">
							<div className="card">
								<div className="card-body">
									<h4 className="card-title">Add new Items</h4>
									<form onSubmit={(e) => { e.preventDefault(); this.handlerSubmit() }}>
										<div className="form-row">
											<div className="form-group col-lg-6 col-md-12">
												<label htmlFor="inputName">Name</label>
												<input type="text" className="form-control" id="inputName" required autoFocus placeholder="Name" onChange={e => this.fillInput(e.target)} value={this.state.inputName} />
											</div>
											<div className="form-group col-lg-6 col-md-12">
												<label htmlFor="inputDatepicker">Dates</label>
												<div className="input-daterange input-group" id="inputDatepicker">
													<input type="text" className="input-sm form-control" name="inputStart" id="inputStart" required placeholder="Start Date" onChange={e => this.fillInput(e.target)} value={this.state.inputStart} />
													<input type="text" className="input-sm form-control" name="inputEnd" id="inputEnd" required placeholder="End Date" onChange={e => this.fillInput(e.target)} value={this.state.inputEnd} />
												</div>
											</div>
											<div className="form-group col-lg-6 col-md-12">
												<label htmlFor="inputReference">Reference</label>
												<input type="text" className="form-control" id="inputReference" placeholder="Reference" onChange={e => this.fillInput(e.target)} value={this.state.inputReference} />
											</div>
											<div className="form-group col-lg-6 col-md-12">
												<label htmlFor="inputNotes">Notes</label>
												<input type="text" className="form-control" id="inputNotes" placeholder="Notes" onChange={e => this.fillInput(e.target)} value={this.state.inputNotes} />
											</div>
										</div>
										<button onClick={ (e) => { e.preventDefault(); this.props.onClick() }} className="btn btn-secondary">Close</button>
										<button type="submit" className="btn btn-success float-right">Create</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
			)
		} else {
			return null
		}
	}
}

export default PanelNewItem;