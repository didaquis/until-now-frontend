import React from 'react';
import Header from '../Header';
import PanelNewItem from './PanelNewItem';
import ButtonNewElement from '../ButtonNewElement';
import HrElement from '../HrElement';
import ItemListed from './ItemListed';
import ModalDelete from '../ModalDelete';
import NoData from '../NoData';
import Spinner from '../Spinner/Spinner';

import { recoverToken, recoverUserId, deleteSessionSTO } from '../../utils/util-functions';

import untilNowApi from '../../utils/until-now-api-client';


class Items extends React.Component {
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
		untilNowApi.listItemsInCollection(this.props.match.params.idOfCollection,recoverUserId() , recoverToken())
			.then(res => this.refreshList(res))
			.catch(() => {
				deleteSessionSTO();
				this.props.history.push('/login');
			});
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
					title={'Equipment'}
					subtitle={'View and manage all the technical gear of this collection'}
				/>
				<PanelNewItem
					show={this.state.showPanelForNewData}
					onClick={this.handlerClosePanelForNewData}
					idOfCollection={this.props.match.params.idOfCollection}
				/>
				<ButtonNewElement show={this.state.showButtonNewElement} text={'New equipment'} onClick={this.handlerOnClickButtonForNewData} />
				<HrElement />
				<div className="row">
					{
						this.state.list.map((item) => {
							return (
								<ItemListed
									dateEnd={item.dateEnd}
									dateStart={item.dateStart}
									handlerOnClickButtonForOpenModal={this.handlerOnClickButtonForOpenModal}
									id={item._id}
									key={item._id}
									notes={item.notes}
									reference={item.refNumber}
									title={item.name}
								/>
							);
						})
					}
				</div>
				{searching}
				{noDataToShow}
				<ModalDelete
					textForBody={'Are you sure you want to delete this equipment?'}
					dataForModalDelete={this.state.dataForModalDelete}
					target={'item'}
				/>
			</section>
		);
	}
}

export default Items;
