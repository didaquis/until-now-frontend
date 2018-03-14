import React from 'react';
import Header from './Header';
import PanelNewItem from './PanelNewItem';
import ButtonNewElement from './ButtonNewElement';
import HrElement from './HrElement';
import ItemListed from './ItemListed';
import ModalDelete from './ModalDelete';
import NoData from './NoData';

import untilNowApi from '../utils/until-now-api-client';

class Items extends React.Component {
	constructor(){
		super();
		this.state = {
			list: []
		};
	}

	componentWillMount(){
		untilNowApi.listItems()
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
				<Header title={'Items'} />
				<PanelNewItem />
				<ButtonNewElement text={'New item'} />
				<HrElement />
				<div className="row">

					{
						this.state.list.map( (item) =>{
							return (
								<ItemListed 
									dateEnd={item.dateEnd} 
									dateStart={item.dateStart} 
									key={item._id} 
									notes={item.notes} 
									reference={item.refNumber} 
									title={item.name} 
									url={item.url} 
								/>
							)
						} )
					}
				</div>
				<NoData />
				<ModalDelete textForBody={'Are you sure you want to delete this collection? All the items included in the collection will be deleted!'}/>
			</section>
		)
	}
}

export default Items;