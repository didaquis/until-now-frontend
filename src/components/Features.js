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
					<h2 className="featurette-heading">{props.title} <span className="text-muted">{props.subtitle}</span></h2>
					<p className="lead">{props.text}</p>
				</div>
				<div className={`col-md-6 ${reverseClassNameForPicture}`}>
					<img className="featurette-image img-fluid mx-auto rounded" alt="feature" src={props.img} data-holder-rendered="true" />
				</div>
			</div>
		</section>
	)
}

export default Features;