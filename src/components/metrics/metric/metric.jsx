import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from 'components/close-icon/close-icon';
import MetricContext from 'components/metric-context/metric-context';

class Metric extends PureComponent {
  static contextType = MetricContext;

  onClick = (event) => {
    const { deleteMetric } = this.context;
    const { metricId } = event.currentTarget.dataset;

    deleteMetric({ metricId });
  };

  render() {
    const { metric } = this.props;

    return (
      <div className="metric" data-id={metric.id}>
        <p className="metric__name">{metric.name}</p>
        <div onClick={this.onClick} data-metric-id={metric.id}>
          <CloseIcon />
        </div>
      </div>
    );
  }
}

Metric.propTypes = {
  metric: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Metric;
