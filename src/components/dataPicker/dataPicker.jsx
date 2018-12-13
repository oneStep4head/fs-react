import React, { Component } from 'react';
import Calendar from 'react-calendar';

class DatePicker extends Component {
  state = {
    date: new Date()
  };

  onChange = (date) => {
    this.setState({ date });
  };

  render() {
    return (
      <div>
        <Calendar className="date-picker" onChange={this.onChange} value={this.state.date} />
      </div>
    );
  }
}

export default DatePicker;
