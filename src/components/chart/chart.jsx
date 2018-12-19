import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

class Chart extends PureComponent {
  static propTypes = {
    metric: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      data: PropTypes.array.isRequired
    }).isRequired
  };

  render() {
    const { metric } = this.props;
    const data = metric.data.map(({ date, value }) => ({
      date: new Date(date).getDate(),
      value
    }));

    // const data = metric.data.forEach((dataObj) => {
    //   dataObj.date = dataObj.date.toString();
    // });
    console.log(data);

    return (
      <div className="chart-container" data-id={metric.id}>
        <h2 className="chart__name">{metric.name}</h2>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 10" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line name={metric.name} type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </div>
    );
  }
}

export default Chart;
