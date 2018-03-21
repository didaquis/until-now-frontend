import React from 'react';

import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';

import { Calendar } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';

Moment.locale('en');
momentLocalizer();
class DateSelector extends React.Component {
	constructor() {
		super();
		this.state = {
		};
	}

	handlerOnChange = (value) => {
		this.setState({ value });
		this.props.onChange(this.props.calendarIdentifier, value);
	}

	render() {
		return (
			<Calendar
				className="mb-2 mt-1"
				id={this.props.idValue}
				max={this.props.max}
				min={this.props.min}
				value={this.state.value}
				onChange={value => this.handlerOnChange(value)}
				views={['year', 'decade']}
				footer={false}
			/>
		);
	}
}

export default DateSelector;
