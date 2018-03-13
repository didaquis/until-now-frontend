import React from 'react';
import Header from './Header';
import PanelNewItem from './PanelNewItem';
import ButtonNewElement from './ButtonNewElement';
import HrElement from './HrElement';
import ItemListed from './ItemListed';
import ModalDelete from './ModalDelete';
import NoData from './NoData';

function Items(props) {
	return (
		<section>
			<Header title={'Items'} />
			<PanelNewItem />
			<ButtonNewElement text={'New item'} />
			<HrElement />
			<div className="row">
				<ItemListed 
					dateEnd={'2020-02-02'} 
					dateStart={'2016-01-01'} 
					notes={'This rope has few uses'} 
					reference={'GA78/9327329-MM'} 
					title={'Beal rope modell Cobra'} 
					url={'https://www.wikipedia.es/'} 
				/>
			</div>
			<NoData />
			<ModalDelete textForBody={'Are you sure you want to delete this collection? All the items included in the collection will be deleted!'}/>
		</section>
	)
}

export default Items;