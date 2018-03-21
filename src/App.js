import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/home/Home';
import Collections from './components/collections/Collections';
import Items from './components/items/Items';
import Footer from './components/Footer';
import Error404 from './components/Error404';


class App extends Component {
	render() {
		return (
			<HashRouter>
				<div className="container-fluid p-4">
					<Nav />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/collections" component={Collections} />
						<Route path="/collection/:idOfCollection" component={Items} />
						<Route component={Error404} />
					</Switch>
					<Footer />
				</div>
			</HashRouter>
		);
	}
}

export default App;
