import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Nav from './components/navbar/Nav';
import Home from './components/home/Home';
import LoginForm from './components/login/LoginForm';
import Collections from './components/collections/Collections';
import Items from './components/items/Items';
import ItemsSummary from './components/items/ItemsSummary';
import Footer from './components/Footer';
import Error404 from './components/Error404';


const App = () => {
	return (
		<HashRouter>
			<div className="container-fluid p-4 view">
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={LoginForm} />
					<Route exact path="/collections" component={Collections} />
					<Route exact path="/summary" component={ItemsSummary} />
					<Route path="/collection/:idOfCollection" component={Items} />
					<Route component={Error404} />
				</Switch>
				<Footer />
			</div>
		</HashRouter>
	);
};

export default App;
