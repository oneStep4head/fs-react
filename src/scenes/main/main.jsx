import React, { Component } from 'react';

import Header from 'components/header/header';
import Metrics from 'components/metrics/metrics';
import ValueSetter from 'components/value-setter/value-setter';
//
import MetricContext from 'components/metric-context/metric-context';
import createRequest from 'utils/create-request';
import { fetchMetrics, createMetric, deleteMetric } from 'utils/api/api-config';

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

  deleteMetric = (event) => {
    const { metricId } = event.currentTarget.dataset;
    const params = {
      metricId
    };

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
    const { metrics } = this.state;
    
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
