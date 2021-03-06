import React from 'react';
import Header from '../Header';
import HrElement from '../HrElement';
import ItemListedSummary from './ItemListedSummary';
import NoData from '../NoData';
import Spinner from '../Spinner/Spinner';

import { recoverToken, recoverUserId, deleteSessionSTO, today } from '../../utils/util-functions';

import untilNowApi from '../../utils/until-now-api-client';


class ItemsSummary extends React.Component {
	constructor() {
		super();
		this.state = {
			list: [],
			searching: true
		};
	}

	componentDidMount() {
		untilNowApi.listItems(recoverUserId(), recoverToken())
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
					title={'Equipment summary'}
					subtitle={'A quick preview of all your equipment classified by their limit date'}
				/>
				<HrElement />
				<div className="row">
					{
						this.state.list.map((item) => {
							return (
								<ItemListedSummary
									dateEnd={item.dateEnd}
									dateStart={item.dateStart}
									key={item._id}
									title={item.name}
									today={today()}
								/>
							);
						})
					}
				</div>
				{searching}
				{noDataToShow}
			</section>
		);
	}
}

export default ItemsSummary;
