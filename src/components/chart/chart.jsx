import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

class Chart extends PureComponent {
  static propTypes = {
    metric: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      data: PropTypes.array.isRequired
    }).isRequired
  };

  formatDate = (timestamp) => {
    const date = new Date(timestamp);

    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  };

  render() {
    const { metric } = this.props;
    // TODO: check for more usable decision
    metric.data.sort((a, b) => a.date - b.date);

    const data = metric.data.map(({ date, value }) => ({
      date: this.formatDate(date),
      value
    }));

    return (
      <div className="chart-container" data-id={metric.id}>
        <h2 className="chart__name">{metric.name}</h2>
        <ResponsiveContainer width="100%" height={300}>
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
            <Line
              name={metric.name}
              type="monotone"
              dataKey="value"
              stroke="#ed1b2f"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Chart;
