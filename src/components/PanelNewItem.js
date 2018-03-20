import React from 'react';

import DateSelector from './DateSelector';

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
		if(input.id === 'inputReference'){
			this.setState({ inputReference: input.value });
		}
		if(input.id === 'inputNotes'){
			this.setState({ inputNotes: input.value });
		}
	}

	handlerSubmit = () =>{

		if( this.state.inputStart !== '' 
			&& this.state.inputEnd !== '' 
			&& (new Date(this.state.inputStart) < new Date(this.state.inputEnd) ) 
		){
			untilNowApi.createItem(this.state.inputName, this.state.inputStart, this.state.inputEnd, this.state.inputReference, this.state.inputNotes, this.state.idOfCollection )
				.then(res => {
					if(res.status === 'OK'){
						window.location.reload();
					}else{
						console.log(res)
					}
				})
				.catch(err => console.error(err));
		}else{
			console.error('Check calendar values!')
		}
	}

	handlerOnChangeCalendar = (calendar, value) => {
		if(calendar === 'dateStart'){
			this.setState({ inputStart: value });
		}
		if(calendar === 'dateEnd'){
			this.setState({ inputEnd: value });
		}
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
											<div className="form-group col-md-12">
												<label htmlFor="inputName">Name</label>
												<input type="text" className="form-control" id="inputName" required autoFocus placeholder="Name" onChange={e => this.fillInput(e.target)} value={this.state.inputName} />
											</div>
											<div className="form-group col-lg-6 col-md-12">
												<label htmlFor="startDate">Start Date</label>
												<DateSelector calendarIdentifier={'dateStart'} onChange={this.handlerOnChangeCalendar} idValue={'startDate'} min={new Date('2010, 01, 01')} max={new Date()} />
											</div>
											<div className="form-group col-lg-6 col-md-12">
												<label htmlFor="endDate">End Date</label>
												<DateSelector calendarIdentifier={'dateEnd'} onChange={this.handlerOnChangeCalendar} idValue={'endDate'} min={new Date(+new Date() + 86400000)} max={new Date('2085, 01, 01')}/>
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