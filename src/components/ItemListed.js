import React from 'react';

function ItemListed(props) {
	return (
		<div className="col-md-6 col-sm-12 mb-5">
			<table className="table table-bordered">
				<thead>
					<tr>
						<th scope="col" colSpan="2">{props.title}</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">Date Start</th>
						<td>{props.dateStart}</td>
					</tr>
					<tr>
						<th scope="row">Date End</th>
						<td>{props.dateEnd}</td>
					</tr>
					<tr>
						<th scope="row">Reference</th>
						<td>{props.reference}</td>
					</tr>
					<tr>
						<th scope="row">Notes</th>
						<td>{props.notes}</td>
					</tr>
					<tr>
						<th scope="row">URL</th>
						<td>{props.url}</td>
					</tr>
					<tr>
						<th scope="row" colSpan="2">
							<div className="progress" style={{ height: '24px' }}>
								<div className="progress-bar-striped progress-bar-animated progress-bar bg-success" role="progressbar" style={{ width: '40%', height: '24px' }}
									aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
						</th>
					</tr>
					<tr>
						<th scope="row" colSpan="2">
							<button type="button" className="btn btn-danger btn-sm mr-2" data-toggle="modal" data-target="#exampleModal">Delete Item</button>
						</th>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default ItemListed;