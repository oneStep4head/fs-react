import React, { Component } from 'react';
import Header from 'components/header/header';
import Loader from 'components/loader/loader';
import Metrics from 'components/metrics/metrics';
import ValueSetter from 'components/value-setter/value-setter';
import MetricContext from 'components/metric-context/metric-context';
import createRequest from 'utils/create-request';
import { fetchMetrics, createMetric, deleteMetric } from 'utils/api/api-config';
import classNames from 'utils/class-names/class-names';


class Main extends Component {
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

  addMetric = (name) => {
    this.setState({ isLoading: true });

    createRequest(createMetric, null, { name }).then(({ status, data }) => {
      if (status === 'OK') {
        this.setState(({ metrics }) => ({
          isLoading: false,
          metrics: metrics.concat(data)
        }));
      }
    });
  };

  deleteMetric = (params) => {
    const { metricId } = params;
    this.setState({ isLoading: true });

    createRequest(deleteMetric, params, null).then(({ status }) => {
      if (status === 'OK') {
        this.setState(({ metrics }) => ({
          isLoading: false,
          metrics: metrics.filter(metric => metric.id !== metricId)
        }));
      }
    });
  };

  render() {
    const { metrics, isLoading } = this.state;
    if (isLoading) {
      return (
        <Loader />
      );
    }
    return (
      <div className="main page">
        <Header />
        <div className="container">
          <MetricContext.Provider
            value={{
              metrics,
              deleteMetric: this.deleteMetric,
              addMetric: this.addMetric
            }}
          >
            <ValueSetter />
            <Metrics />
          </MetricContext.Provider>
        </div>
      </div>
    );
  }
}


export default Main;
