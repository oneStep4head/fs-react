import React, { Component } from 'react';
import Header from 'components/header/header';
import Loader from 'components/loader/loader';
import MetricContext from 'components/metric-context/metric-context';
import createRequest from 'utils/create-request';
import { fetchMetrics } from 'utils/api/api-config';
import Charts from 'components/charts/charts';

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

  render() {
    const { metrics, isLoading } = this.state;
    if (isLoading) {
      return <Loader />;
    }
    return (
      <div className="main page">
        <Header />
        <div className="container">
          <MetricContext.Provider
            value={{
              metrics
            }}
          >
            <Charts />
          </MetricContext.Provider>
        </div>
      </div>
    );
  }
}

export default Metrics;
