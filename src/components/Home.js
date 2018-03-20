import React from 'react';
import MainHeader from './MainHeader';
import Features from './Features';

function Home(props) {

	return (
		<section>
			<MainHeader />
			<Features reverse={true} img={require('../images/features_1.png')} />
			<Features reverse={false} img={require('../images/features_2.png')} />
		</section>
	)
}

export default Home;