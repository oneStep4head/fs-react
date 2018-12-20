import React, { Component, createRef } from 'react';
import Calendar from 'react-calendar';
import createRequest from 'utils/create-request';
import { addDataToMetric } from 'utils/api/api-config';
import MetricContext from 'components/metric-context/metric-context';

class ValueSetter extends Component {
  static contextType = MetricContext;

  state = {
    currentDate: new Date()
  };

  selectRef = createRef();

  inputRef = createRef();

  onCalendarDateChange = (currentDate) => {
    this.setState({ currentDate });
  };

  // TODO
  addValueToMetric = (event) => {
    event.preventDefault();
    const { currentDate } = this.state;

    const params = {
      metricId: this.selectRef.current.value
    };
    const body = {
      newValue: {
        date: Date.UTC(
          currentDate.getUTCFullYear(),
          currentDate.getUTCMonth(),
          currentDate.getUTCDate()
        ),
        value: this.inputRef.current.value
      }
    };

    createRequest(addDataToMetric, params, body).then(({ status, data }) => {
      if (status === 'OK') {
        console.log(data);
      }
    });
    this.inputRef.current.value = '';
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
          <select
            className="c-select set-value__select"
            ref={this.selectRef}
            onChange={this.onSelectValueChange}
          >
            <option>--select-something--</option>
            {metrics.map(metric => (
              <option key={metric.id} value={metric.id}>
                {metric.name}
              </option>
            ))}
          </select>
          <input
            className="c-input set-value__txt-input"
            type="text"
            placeholder="New value here..."
            ref={this.inputRef}
            pattern="[0-9]+"
            required
          />
          <input className="c-btn set-value__btn" type="submit" value="Set!" />
        </form>
      </div>
    );
  }
}

export default ValueSetter;
