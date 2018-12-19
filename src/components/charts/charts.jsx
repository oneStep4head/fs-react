import React, { Component } from 'react';
import MetricContext from 'components/metric-context/metric-context';
import Chart from 'components/chart/chart';

class Charts extends Component {
  static contextType = MetricContext;

  render() {
    const { metrics } = this.context;

    return (
      <div className="charts-container">
        {metrics.map(metric => (
          <Chart metric={metric} />
        ))}
      </div>
    );
  }
}

export default Charts;
