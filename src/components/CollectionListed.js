import React from 'react';

import { NavLink } from 'react-router-dom';


function CollectionListed(props) {
	return (
		<div className="col-lg-4 col-md-6 col-sm-12 mb-5">
			<div className="media">
				<div className="media-body">
					<div className="d-inline-block">
						<h4 className="mt-2">{props.title}</h4>
					</div>
					<div className="d-inline-block">
						<small>
							<span className="float-right ml-3 badge badge-pill badge-dark">&nbsp;{props.count}&nbsp;</span>
						</small>
					</div>
					<br />
					<button type="button" className="btn btn-danger btn-sm mr-2" data-toggle="modal" data-target="#exampleModal">Delete collection</button>
					<NavLink exact to={`/collection/${props.id}`} className="btn btn-primary btn-sm">View Items</NavLink>
					{/* <a href="/collection/" className="btn btn-primary btn-sm">View Items</a> */}
				</div>
			</div>
		</div>
	)
}

export default CollectionListed;