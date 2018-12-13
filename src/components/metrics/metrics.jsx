import React, { Component } from 'react';
import createRequest from 'utils/create-request';
import { fetchMetrics, createMetric } from 'utils/api/api-config';
import classNames from 'utils/class-names/class-names';
import AddMetric from './add-metric/add-metric';
import Metric from './metric/metric';

class Metrics extends Component {
  state = {
    metrics: [],
    isLoading: true
  };

  componentDidMount() {
    createRequest(fetchMetrics).then(({ status, data: metrics }) => {
      if (status === 'OK') {
        this.setState({ isLoading: false, metrics });
      }
    });
  }

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

  // TODO: MAKE MODAL FROM <AddMetric /> SHIT NIGGA!
  addMetric = (name) => {
    this.setState({ isLoading: true });

    createRequest(createMetric, null, { name })
      .then(({ status, data }) => {
        if (status === 'OK') {
          this.setState(({ metrics }) => ({
            isLoading: false,
            metrics: metrics.concat(data)
          }));
        }
      })
      .then(() => {
        this.updateMetrics(true);
      });
  };

  // Throw flag out to all flag subscribers update
  updateMetrics = (metrics) => {
    const { updateMetrics } = this.props;

    updateMetrics(metrics);
  };

  render() {
    const { metrics, isLoading } = this.state;

    return (
      <div className={classNames('metrics', { loading: isLoading })}>
        {metrics.map(metric => (
          <Metric metric={metric} toggleMetric={this.toggleMetric} key={metric.id} />
        ))}
        <AddMetric addMetric={this.addMetric} />
      </div>
    );
  }
}

export default Metrics;
