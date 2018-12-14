import React, { Component } from 'react';
import classNames from 'utils/class-names/class-names';
// in context using transform
import MetricContext from 'components/metric-context/metric-context';
//
import AddMetric from './add-metric/add-metric';
import Metric from './metric/metric';

// componentDidMount() {
//   createRequest(fetchMetrics).then(({ status, data: metrics }) => {
//     if (status === 'OK') {
//       this.setState({ isLoading: false, metrics });
//     }
//   });
// }

class Metrics extends Component {
  static contextType = MetricContext;

  state = {
    // metrics: [],
    isLoading: true
  };

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
    const { metrics, deleteMetric, isLoading } = this.context;

    return (
      <div className={classNames('metrics', { loading: isLoading })}>
        {metrics.map(metric => (
          <Metric
            deleteMetric={deleteMetric}
            metric={metric}
            toggleMetric={this.toggleMetric}
            key={metric.id}
          />
        ))}
        <AddMetric />
      </div>
    );
  }
}

export default Metrics;
