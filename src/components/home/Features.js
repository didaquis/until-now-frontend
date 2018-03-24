import React from 'react';
import Mac from './Mac/Mac';

function Features(props) {
	let reverseClassNameForText;
	let reverseClassNameForPicture = '';
	if (props.reverse) {
		reverseClassNameForText = 'order-lg-2';
		reverseClassNameForPicture = 'order-lg-1';
	}

	return (
		<section>
			<hr className="featurette-divider mt-5 mb-5" />
			<div className="row featurette">
				<div className={`col-lg-6 ${reverseClassNameForText}`}>
					<h2 className="featurette-heading">{props.title} </h2>
					<h2><span className="text-muted">{props.subtitle}</span></h2>
					<p className="lead mb-5">{props.text}</p>
				</div>
				<div className={`col-lg-6 ${reverseClassNameForPicture}`}>
					<Mac img={props.img} altText={'feature'} />
				</div>
			</div>
		</section>
	);
}

export default Features;
