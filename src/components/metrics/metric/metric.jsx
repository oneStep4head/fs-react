import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from 'components/close-icon/close-icon';
import className from 'utils/class-names/class-names';

class Metric extends PureComponent {
  render() {
    const { metric, deleteMetric } = this.props;

    return (
      <div
        className={`metric ${metric.isCompleted ? 'metric__complited' : ''}`}
        data-id={metric.id}
      >
        <p className="metric__name">{metric.name}</p>
        <div
          onClick={(e) => {
            deleteMetric(e);
          }}
          data-metric-id={metric.id}
        >
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
  }).isRequired,
  toggleMetric: PropTypes.func.isRequired
};

export default Metric;
