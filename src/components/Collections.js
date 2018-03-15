import React from 'react';
import Header from './Header';
import PanelNewCollection from './PanelNewCollection';
import ButtonNewElement from './ButtonNewElement';
import HrElement from './HrElement';
import CollectionListed from './CollectionListed';
import ModalDelete from './ModalDelete';
import NoData from './NoData';

import untilNowApi from '../utils/until-now-api-client';

class Collections extends React.Component{
	constructor(){
		super();
		this.state = {
			list: [],
			showPanelForNewData: false,
			showButtonNewElement: true
		};
	}

	componentWillMount(){
		untilNowApi.listCollections()
			.then( res => this.refreshList(res) )
			.catch(error => console.error(error));
	}

	refreshList = (results) => {
		if(results.status === 'OK'){
			this.setState({list:results.data})
		}
	}

	handlerOnClickButtonForNewData = () => {
		this.setState({
			showPanelForNewData: true,
			showButtonNewElement: false
		})
	}

	handlerClosePanelForNewData = () => {
		this.setState({
			showPanelForNewData: false,
			showButtonNewElement: true
		})
	}

	render() {

		let noDataToShow;
		if(this.state.list.length === 0){
			noDataToShow = <NoData />;
		}

		return (
			<section>
				<Header title={'Collections'} />
				<PanelNewCollection show={this.state.showPanelForNewData} onClick={this.handlerClosePanelForNewData} />
				<ButtonNewElement show={this.state.showButtonNewElement} text={'New collection'} onClick={this.handlerOnClickButtonForNewData} />
				<HrElement />
				<div className="row">
					{
						this.state.list.map( (collection) =>{
							return (
								<CollectionListed key={collection._id} id={collection._id} title={collection.name} count={'7'} />
							)
						} )
					}
				</div>
				{noDataToShow}
				<ModalDelete textForBody={'Are you sure you want to delete this collection? All the items included in the collection will be deleted!'}/>
			</section>
		)
	}
}

export default Collections;