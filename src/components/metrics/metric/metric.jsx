import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import className from 'utils/class-names/class-names';

class Metric extends PureComponent {
  // shouldComponentUpdate(nextProps) {
  //   const { isCompleted } = this.props.metric;

  //   return nextProps.metric.isCompleted !== isCompleted;
  // }

  render() {
    const { metric, toggleMetric } = this.props;

    return (
      <div
        className={`metric ${metric.isCompleted ? 'metric__complited' : ''}`}
        onClick={toggleMetric}
        data-id={metric.id}
      >
        {metric.name}
      </div>
    );
  }
}

Metric.propTypes = {
  metric: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool
  }).isRequired,
  toggleMetric: PropTypes.func.isRequired
};

export default Metric;
