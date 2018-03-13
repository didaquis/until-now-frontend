import React from 'react';

function PanelNewCollection(props) {
	return (
		<section>
			<div className="row">
				<div className="col-md-8 offset-md-2">
					<div className="card">
						<div className="card-body">
							<h4 className="card-title">Add new collection</h4>
							<form>
								<div className="form-group">
									<label htmlFor="nameCollectionInput">Name of collection</label>
									<input type="text" className="form-control" id="nameCollectionInput" aria-describedby="nameCollectionHelp" placeholder="Enter name of collection"
										required pattern="[A-Za-z0-9.\-_\*\/\|]{3,}" autoFocus />
									<small id="nameCollectionHelp" className="form-text text-muted">At least 3 chars</small>
								</div>
								<a href="#" className="btn btn-secondary" data-dismiss="modal">Close</a>
								<button type="submit" className="btn btn-success float-right">Create</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PanelNewCollection;