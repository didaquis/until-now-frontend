import React from 'react';
import Header from './Header';
import PanelNewCollection from './PanelNewCollection';
import ButtonNewElement from './ButtonNewElement';
import HrElement from './HrElement';
import CollectionListed from './CollectionListed';
import ModalDelete from './ModalDelete';
import NoData from './NoData';

function Collections(props) {
	return (
		<section>
			<Header title={'Collections'} />
			<PanelNewCollection />
			<ButtonNewElement text={'New collection'} />
			<HrElement />
			<div className="row">
				<CollectionListed title={'ABC'} count={'7'} />
			</div>
			<NoData />
			<ModalDelete textForBody={'Are you sure you want to delete this item?'}/>
		</section>
	)
}

export default Collections;