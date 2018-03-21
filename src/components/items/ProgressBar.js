import React from 'react';

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
			</th>
		</tr>
	);
}

export default ProgressBar;
