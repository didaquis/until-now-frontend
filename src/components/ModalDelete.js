import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}


	componentWillReceiveProps(nextProps){
		if(nextProps.dataForModalDelete !== ''){
			this.setState({ dataForModalDelete: nextProps.dataForModalDelete, target:nextProps.target });
			this.toggle();
		}
	}

	handlerSubmit = () => {
		console.log('submit: ')
		if(this.state.target === 'collection'){
			console.log('submit delete collection: ')
			untilNowApi.deleteCollection(this.state.dataForModalDelete)
				.then(res => {
					if(res.status === 'OK'){
						window.location.reload();
					}else{
						console.log(res)
					}
				})
				.catch(err => console.error(err))
		}
		if(this.state.target === 'item'){
			console.log('submit delete item: ' + this.state.dataForModalDelete)
			untilNowApi.deleteItem(this.state.dataForModalDelete)
				.then(res => {
					if(res.status === 'OK'){
						window.location.reload();
					}else{
						console.log(res)
					}
				})
				.catch(err => console.error(err))
		}
	}

	render() {
		return (
			<div>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>Delete</ModalHeader>
					<ModalBody>
						<p>{this.props.textForBody}</p>
					</ModalBody>
					<ModalFooter>
						<button type="button" className="btn btn-secondary mr-auto" onClick={this.toggle}>Close</button>
						<form onSubmit={(e) => { e.preventDefault(); this.handlerSubmit() }}>
							<button type="submit" className="btn btn-danger">Delete</button>
						</form>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

export default ModalDelete;
