import React from 'react';
import { formatDate, calculateNumberForProgress, calculateColorOfProgressBar, today } from '../../utils/util-functions';

import ProgressBar from './ProgressBar';


function ItemListed(props) {
	const progressNumber = calculateNumberForProgress(formatDate(props.dateStart), today(), formatDate(props.dateEnd));
	const colorOfProgressBar = calculateColorOfProgressBar(progressNumber);

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
						<td>{formatDate(props.dateStart)}</td>
					</tr>
					<tr>
						<th scope="row">Date End</th>
						<td>{formatDate(props.dateEnd)}</td>
					</tr>
					<tr>
						<th scope="row">Reference</th>
						<td>{props.reference}</td>
					</tr>
					<tr>
						<th scope="row">Notes</th>
						<td>{props.notes}</td>
					</tr>
					<ProgressBar colorOfProgressBar={colorOfProgressBar} progressNumber={progressNumber} />
					<tr>
						<th scope="row" colSpan="2">
							<button type="button" className="btn btn-outline-danger btn-sm mr-2" onClick={(e) => { e.preventDefault(); props.handlerOnClickButtonForOpenModal(props.id); }} >Delete equipment</button>
						</th>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default ItemListed;
