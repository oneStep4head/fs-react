import React, { Component } from 'react';
import MetricContext from 'components/metric-context/metric-context';
import Chart from 'components/chart/chart';
import Spoiler from 'components/spoiler/spoiler';
import ValueEditor from 'components/value-editor/value-editor';

class Charts extends Component {
  static contextType = MetricContext;

  render() {
    const { metrics, updateMetric } = this.context;

    return (
      <div className="charts-container">
        {metrics.map(metric => (
          <div key={metric.id}>
            <Chart metric={metric} />
            <Spoiler head={`Edit values for "${metric.name}" metric`}>
              <ValueEditor metric={metric} updateMetric={updateMetric} />
            </Spoiler>
          </div>
        ))}
      </div>
    );
  }
}

export default Charts;
