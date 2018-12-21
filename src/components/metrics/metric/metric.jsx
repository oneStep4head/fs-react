import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from 'components/close-icon/close-icon';
import MetricContext from 'components/metric-context/metric-context';
import Modal from 'components/modal/modal';
import Chart from 'components/chart/chart';

class Metric extends PureComponent {
  static contextType = MetricContext;

  state = {
    isOpened: false
  };

  onClick = (event) => {
    const { deleteMetric } = this.context;
    const { metricId } = event.currentTarget.dataset;

    deleteMetric({ metricId });
  };

  showChart = () => {
    this.setState({ isOpened: true });
  };

  hideChart = () => {
    this.setState({ isOpened: false });
  };

  render() {
    const { metric } = this.props;
    const { isOpened } = this.state;

    return (
      <div className="metric" data-id={metric.id} onClick={this.showChart}>
        <p className="metric__name">{metric.name}</p>
        <div onClick={this.onClick} data-metric-id={metric.id}>
          <CloseIcon />
        </div>
        <Modal isOpen={isOpened} handleCloseModal={this.hideChart}>
          <Chart metric={metric} />
        </Modal>
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
