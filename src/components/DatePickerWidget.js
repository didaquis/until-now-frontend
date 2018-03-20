import React from "react";



import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';

import { DateTimePicker } from "react-widgets";
import "react-widgets/dist/css/react-widgets.css";

Moment.locale('en');
momentLocalizer();

class DatePickerWidget extends React.Component {
  constructor() {
    super();
    this.state = {

	};
  }

  render() {
	let colors = ['orange', 'red', 'blue', 'purple'];
    return (
		<DateTimePicker 
			name={'prueba'}
			defaultValue={new Date()} 
			data={colors} 
			format='YYYY-MM-DD' 
			time={false} 
			max={new Date()} 
			// min={new Date()} 
			//value={this.state.value}
            //onChange={value => this.setState({ value })} 
		/>
	)
  }
}

export default DatePickerWidget;