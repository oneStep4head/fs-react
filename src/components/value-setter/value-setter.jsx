import React, { Component } from 'react';
import Calendar from 'react-calendar';
import createRequest from 'utils/create-request';
import { fetchMetrics, addDataToMetric } from 'utils/api/api-config';
import classNames from 'utils/class-names/class-names';

class ValueSetter extends Component {
  state = {
    metrics: [],
    isLoading: true,
    currentDate: new Date(),
    selectValue: '',
    inputValue: ''
  };

  componentDidMount() {
    createRequest(fetchMetrics).then(({ status, data: metrics }) => {
      if (status === 'OK') {
        this.setState({ isLoading: false, metrics });
      }
    });
  }

  // componentWillReceiveProps(nextProps) {
  //   const { shouldChildUpdateMetrics } = this.props;

  //   if (nextProps.shouldChildUpdateMetrics !== shouldChildUpdateMetrics) {
  //     createRequest(fetchMetrics).then(({ status, data: metrics }) => {
  //       if (status === 'OK') {
  //         this.setState({ isLoading: false, metrics });
  //       }
  //     })
  //   }
  // }

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

    console.log(params);
    console.log(body);

    // createRequest(addDataToMetric, params, body).then(({ status, data }) => {
    //   if (status === 'OK') {
    //     console.log(data);
    //   }
    // });
  };

  render() {
    const { currentDate, isLoading, metrics } = this.state;

    const { shouldChildUpdateMetrics, updateMetrics } = this.props;

    if (shouldChildUpdateMetrics) {
      createRequest(fetchMetrics)
        .then(({ status, data: metrics }) => {
          if (status === 'OK') {
            this.setState({ isLoading: false, metrics });
          }
        })
        .then(() => {
          updateMetrics(!shouldChildUpdateMetrics);
        });
    }

    return (
      <div className={classNames('value-setter', { loading: isLoading })}>
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
