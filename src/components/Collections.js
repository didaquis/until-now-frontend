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
			list: []
		};
	}

	componentWillMount(){
		untilNowApi.listCollections()
			.then( res => this.refreshList(res) )
			.catch(error => console.error(error));
	}

	refreshList = (results) => {
		if(results.status === 'OK'){
			this.setState({list:results.data});
		};
	}

	render() {
		return (
			<section>
				<Header title={'Collections'} />
				<PanelNewCollection />
				<ButtonNewElement text={'New collection'} />
				<HrElement />
				<div className="row">
					{
						this.state.list.map( (collection) =>{
							return (
								<CollectionListed key={collection._id} title={collection.name} count={'7'} />
							)
						} )
					}
				</div>
				<NoData />
				<ModalDelete textForBody={'Are you sure you want to delete this item?'}/>
			</section>
		)
	}
}

export default Collections;