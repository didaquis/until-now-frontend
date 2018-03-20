import React from 'react';

function Features(props){
	let reverseClassNameForText, reverseClassNameForPicture = '';
	if(props.reverse){
		reverseClassNameForText = 'order-md-2';
		reverseClassNameForPicture = 'order-md-1';
	}

	return(
		<section>
			<hr className="featurette-divider mt-5 mb-5" />
			<div className="row featurette">
				<div className={`col-md-6 ${reverseClassNameForText}`}>
					<h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
					<p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
				</div>
				<div className={`col-md-6 ${reverseClassNameForPicture}`}>
					<img className="featurette-image img-fluid mx-auto rounded" alt="feature" src={props.img} data-holder-rendered="true" />
				</div>
			</div>
		</section>
	)
}

export default Features;