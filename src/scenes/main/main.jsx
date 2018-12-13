import React, { Component } from 'react';
import Header from 'components/header/header';
import Metrics from 'components/metrics/metrics';
import ValueSetter from 'components/value-setter/value-setter';
//

class Main extends Component {
  state = {
    shouldChildUpdateMetrics: false
  };

  updateMetrics = (value) => {
    this.setState({ shouldChildUpdateMetrics: value });
  };

  render() {
    const { shouldChildUpdateMetrics } = this.state;

    return (
      <div className="main">
        <Header />
        <ValueSetter
          shouldChildUpdateMetrics={shouldChildUpdateMetrics}
          updateMetrics={this.updateMetrics}
        />
        <Metrics updateMetrics={this.updateMetrics} />
      </div>
    );
  }
}

export default Main;
