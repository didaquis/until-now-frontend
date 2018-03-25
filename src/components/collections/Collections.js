import React from 'react';
import Header from '../Header';
import PanelNewCollection from './PanelNewCollection';
import ButtonNewElement from '../ButtonNewElement';
import HrElement from '../HrElement';
import CollectionListed from './CollectionListed';
import ModalDelete from '../ModalDelete';
import NoData from '../NoData';
import Spinner from '../Spinner/Spinner';

import { recoverToken, recoverUserId } from '../../utils/util-functions';

import untilNowApi from '../../utils/until-now-api-client';

class Collections extends React.Component {
	constructor() {
		super();
		this.state = {
			list: [],
			searching: true,
			showPanelForNewData: false,
			showButtonNewElement: true,
			dataForModalDelete: ''
		};
	}

	componentDidMount() {
		untilNowApi.listCollections(recoverUserId(), recoverToken())
			.then(res => this.refreshList(res))
			.catch(() => {
				this.props.history.push('/login');
			});
	}

	componentWillReceiveProps() {
		this.setState({ dataForModalDelete: '' });
	}

	refreshList = (results) => {
		if (results.status === 'OK') {
			this.setState({ list: results.data, searching: false });
		}
	}

	handlerOnClickButtonForNewData = () => {
		this.setState({
			showPanelForNewData: true,
			showButtonNewElement: false,
			dataForModalDelete: ''
		});
	}

	handlerClosePanelForNewData = () => {
		this.setState({
			showPanelForNewData: false,
			showButtonNewElement: true,
			dataForModalDelete: ''
		});
	}

	handlerOnClickButtonForOpenModal = (id) => {
		this.setState({ dataForModalDelete: id });
	}

	render() {
		let noDataToShow;
		if (this.state.list.length === 0 && !this.state.searching) {
			noDataToShow = <NoData />;
		}

		let searching;
		if (this.state.searching) {
			searching = <Spinner />;
		}

		return (
			<section>
				<Header
					title={'Collections'}
					subtitle={'View and manage all your equipment collections'}
				/>
				<PanelNewCollection
					show={this.state.showPanelForNewData}
					onClick={this.handlerClosePanelForNewData}
				/>
				<ButtonNewElement
					show={this.state.showButtonNewElement}
					text={'New collection'}
					onClick={this.handlerOnClickButtonForNewData}
				/>
				<HrElement />
				<div className="row">
					{
						this.state.list.map((collection) => {
							return (
								<CollectionListed
									key={collection._id}
									id={collection._id}
									title={collection.name}
									count={collection.itemsCount}
									handlerOnClickButtonForOpenModal={this.handlerOnClickButtonForOpenModal}
								/>
							);
						})
					}
				</div>
				{searching}
				{noDataToShow}
				<ModalDelete
					textForBody={'Are you sure you want to delete this collection? All the equipment included in this collection will be deleted!'}
					dataForModalDelete={this.state.dataForModalDelete}
					target={'collection'}
				/>
			</section>
		);
	}
}

export default Collections;
