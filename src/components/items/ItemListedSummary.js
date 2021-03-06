import React from 'react';
import { formatDate, calculateNumberForProgress, calculateColorOfProgressBar, getDateReadable } from '../../utils/util-functions';

import ProgressBar from './ProgressBar';


function ItemListedSummary(props) {
	const readableStart = getDateReadable(props.dateStart);
	const readableEnd = getDateReadable(props.dateEnd);

	const progressNumber = calculateNumberForProgress(formatDate(props.dateStart), props.today, formatDate(props.dateEnd));
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
					<ProgressBar
						colorOfProgressBar={colorOfProgressBar}
						progressNumber={progressNumber}
						readableStart={readableStart}
						readableEnd={readableEnd}
					/>
				</tbody>
			</table>
		</div>
	);
}

export default ItemListedSummary;
