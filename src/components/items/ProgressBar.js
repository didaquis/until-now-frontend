import React from 'react';

import { formatDate } from '../../utils/util-functions';

function ProgressBar(props) {
	return (
		<tr>
			<th scope="row" colSpan="2">
				<div className="progress" style={{ height: '24px' }}>
					<div
						className={`progress-bar-striped progress-bar-animated progress-bar bg-${props.colorOfProgressBar}`}
						role="progressbar"
						style={{ width: `${props.progressNumber}%`, height: '24px' }}
						aria-valuenow={props.progressNumber}
						aria-valuemin="0"
						aria-valuemax="100"
					>
					</div>
				</div>
				<small className="form-text text-muted float-left ml-1">{props.readableStart}</small>
				<small className="form-text text-muted float-right mr-1">{props.readableEnd}</small>
			</th>
		</tr>
	);
}

export default ProgressBar;
