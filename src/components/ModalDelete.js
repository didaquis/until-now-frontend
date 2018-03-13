import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalDelete extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	render() {
		return (
			<div>
				{/* <button type="button" class="btn btn-light mr-auto" onClick={this.toggle}>Show Modal</button> */}
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>Delete</ModalHeader>
					<ModalBody>
						<p>{this.props.textForBody}</p>
					</ModalBody>
					<ModalFooter>
						<button type="button" class="btn btn-secondary mr-auto" onClick={this.toggle}>Close</button>
						{/* <Button color="danger" onClick={this.toggle}>Delete</Button> */}
						<button type="button" class="btn btn-danger">Delete</button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

export default ModalDelete;
