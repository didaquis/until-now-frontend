import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { recoverToken, deleteSessionSTO } from '../utils/util-functions';

import untilNowApi from '../utils/until-now-api-client';

class ModalDelete extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			dataForModalDelete: '',
			target: ''
		};

		this.toggle = this.toggle.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.dataForModalDelete !== '') {
			this.setState({ dataForModalDelete: nextProps.dataForModalDelete, target: nextProps.target });
			this.toggle();
		}
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}


	handlerSubmit = () => {
		if (this.state.target === 'collection') {
			untilNowApi.deleteCollection(this.state.dataForModalDelete, recoverToken())
				.then(res => {
					if (res.status === 'OK') {
						window.location.reload();
					} else {
						console.log(res);
					}
				})
				.catch(() => {
					deleteSessionSTO();
					this.props.history.push('/login');
				});
		}
		if (this.state.target === 'item') {
			untilNowApi.deleteItem(this.state.dataForModalDelete, recoverToken())
				.then(res => {
					if (res.status === 'OK') {
						window.location.reload();
					} else {
						console.log(res);
					}
				})
				.catch(() => {
					deleteSessionSTO();
					this.props.history.push('/login');
				});
		}
	}

	render() {
		return (
			<div>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>Delete</ModalHeader>
					<ModalBody>
						{this.props.children}
					</ModalBody>
					<ModalFooter>
						<button type="button" className="btn btn-secondary mr-auto" onClick={this.toggle}>Close</button>
						<form onSubmit={(e) => { e.preventDefault(); this.handlerSubmit(); }}>
							<button type="submit" className="btn btn-danger">Delete</button>
						</form>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

export default ModalDelete;
