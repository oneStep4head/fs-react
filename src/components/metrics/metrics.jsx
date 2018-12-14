import React, { Component } from 'react';
import MetricContext from 'components/metric-context/metric-context';
import AddMetric from './add-metric/add-metric';
import Metric from './metric/metric';

class Metrics extends Component {
  static contextType = MetricContext;

  // УЧЕБНЫЙ МЕТОД, ТАК ДЛЯ ПИМЕРА
  toggleMetric = (event) => {
    const { id } = event.currentTarget.dataset;

    this.setState(state => ({
      metrics: state.metrics.map((metric) => {
        if (metric.id === id) {
          return { ...metric, isCompleted: !metric.isCompleted };
        }
        return metric;
      })
    }));
  };

  render() {
    const { metrics } = this.context;

    return (
      <div className="metrics">
        {metrics.map(metric => (
          <Metric metric={metric} key={metric.id} />
        ))}
        <AddMetric />
      </div>
    );
  }
}

export default Metrics;
