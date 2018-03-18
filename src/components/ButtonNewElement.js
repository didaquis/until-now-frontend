import React from 'react';

function ButtonNewElement(props) {
	if(props.show){
		return (
			<div className="row">
				<div className="col">
					<button type="button" onClick={ (e) => { e.preventDefault(); props.onClick() } } className="btn btn-success btn-sm">{props.text}</button>
				</div>
			</div>
		)
	}else{
		return null
	}
}

export default ButtonNewElement;