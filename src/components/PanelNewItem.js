import React from 'react';

class PanelNewItem extends React.Component {
	constructor() {
		super();
		this.state = {
			
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
									<form>
										<div className="form-row">
											<div className="form-group col-lg-6 col-md-12">
												<label htmlFor="inputName">Name</label>
												<input type="text" className="form-control" id="inputName" required autoFocus placeholder="Name" />
											</div>
											<div className="form-group col-lg-6 col-md-12">
												<label htmlFor="inputDatepicker">Dates</label>
												<div className="input-daterange input-group" id="inputDatepicker">
													<input type="text" className="input-sm form-control" name="start" required placeholder="Start Date" />
													<input type="text" className="input-sm form-control" name="end" required placeholder="End Date" />
												</div>
											</div>
											<div className="form-group col-lg-6 col-md-12">
												<label htmlFor="inputReference">Reference</label>
												<input type="text" className="form-control" id="inputReference" placeholder="Reference" />
											</div>
											<div className="form-group col-lg-6 col-md-12">
												<label htmlFor="inputNotes">Notes</label>
												<input type="text" className="form-control" id="inputNotes" placeholder="Notes" />
											</div>
											<div className="form-group col-lg-6 col-md-12">
												<label htmlFor="InputUrl">URL</label>
												<input type="text" className="form-control" id="InputUrl" placeholder="URL" />
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