import React from 'react';
import './Mac.css';

function Mac(props) {
	return (
		<div className="css-mb with-glare">
			<div className="mb-display-position">
				<div className="mb-display">
					<div className="mb-screen-position">
						<div className="mb-screen">
							<img
								src={props.img}
								alt={props.altText}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="mb-body"></div>
			<div className="mb-bottom-cover"></div>
		</div>
	);
}

export default Mac;
