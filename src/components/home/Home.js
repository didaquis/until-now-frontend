import React from 'react';
import MainHeader from './MainHeader';
import Features from './Features';

function Home() {
	return (
		<section>
			<MainHeader />
			<Features
				reverse
				title={'Oh yeah, it\'s that good.'}
				subtitle={'See for yourself.'}
				text={'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'}
				img={require('../../images/features_1.png')}
			/>
			<Features
				reverse={false}
				title={'Oh yeah, it\'s that good.'}
				subtitle={'See for yourself.'}
				text={'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'}
				img={require('../../images/features_2.png')}
			/>
		</section>
	);
}

export default Home;
