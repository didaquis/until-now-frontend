import React from 'react';
import MainHeader from './MainHeader';
import Features from './Features';

import untilNowApi from '../../utils/until-now-api-client';

class Home extends React.Component {
	componentDidMount() {
		// This is a trick for wake up the server.
		untilNowApi.ping()
			.then(() => null)
			.catch(() => null);
	}

	render() {
		return (
			<section>
				<MainHeader />
				<Features
					reverse
					title={'All your equipment well classified.'}
					subtitle={'Organize your gear easily.'}
					text={'Create collections and distribute your materials according to their category. Collections are sorted alphabetically so you can fast and efficiently find what you are looking for'}
					img={require('../../images/features_1.png')}
				/>
				<Features
					reverse={false}
					title={'Visualize straight away the age of your equipment.'}
					subtitle={'The color bar shows its renewal date.'}
					text={'Register all your equipment indicating the date of purchase and the expected replacement date. “Until Now” calculates how much time has passed and it’ll show you'}
					img={require('../../images/features_2.png')}
				/>
			</section>
		);
	}
}

export default Home;
