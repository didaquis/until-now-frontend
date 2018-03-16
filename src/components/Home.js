import React from 'react';
import MainHeader from './MainHeader';
import Features from './Features';

function Home(props) {

	return (
		<section>
			<MainHeader />
			<Features reverse={true} />
			<Features reverse={false} />
		</section>
	)
}

export default Home;