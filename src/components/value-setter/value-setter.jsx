import React, { Component } from 'react';
import Calendar from 'react-calendar';
import createRequest from 'utils/create-request';
import { addDataToMetric } from 'utils/api/api-config';
import MetricContext from 'components/metric-context/metric-context';

class ValueSetter extends Component {
  static contextType = MetricContext;

  state = {
    currentDate: new Date(),
    selectValue: '',
    inputValue: ''
  };

  onCalendarDateChange = (currentDate) => {
    this.setState({ currentDate });
  };

  onSelectValueChange = (event) => {
    this.setState({ selectValue: event.target.value });
  };

  onInputValueChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  addValueToMetric = (event) => {
    event.preventDefault();
    const { selectValue, currentDate, inputValue } = this.state;

    const params = {
      metricId: selectValue
    };
    const body = {
      newValue: {
        date: Date.UTC(
          currentDate.getUTCFullYear(),
          currentDate.getUTCMonth(),
          currentDate.getUTCDate()
        ),
        value: inputValue
      }
    };

    createRequest(addDataToMetric, params, body).then(({ status, data }) => {
      if (status === 'OK') {
        console.log(data);
      }
    });
  };

  render() {
    const { currentDate } = this.state;
    const { metrics } = this.context;

    return (
      <div className="value-setter">
        <Calendar
          className="date-picker"
          onChange={this.onCalendarDateChange}
          value={currentDate}
        />
        <form className="set-value" onSubmit={this.addValueToMetric}>
          <select className="set-value__select" onChange={this.onSelectValueChange}>
            <option>--select-something--</option>
            {metrics.map(metric => (
              <option key={metric.id} value={metric.id}>
                {metric.name}
              </option>
            ))}
          </select>
          <input type="set-value__txt-input" onChange={this.onInputValueChange} />
          <input className="btn set-value__btn" type="submit" value="Set!" />
        </form>
      </div>
    );
  }
}

export default ValueSetter;
