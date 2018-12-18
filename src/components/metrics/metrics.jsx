import React, { Component } from 'react';
import MetricContext from 'components/metric-context/metric-context';
// import Modal from 'react-modal';
import Modal from 'components/modal/modal';
import AddMetric from './add-metric/add-metric';
import Metric from './metric/metric';

class Metrics extends Component {
  static contextType = MetricContext;

  state = {
    showModal: false
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

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { metrics } = this.context;

    return (
      <div className="metrics">
        {metrics.map(metric => (
          <Metric metric={metric} key={metric.id} />
        ))}
        <div className="metrics__new-metric" onClick={this.handleOpenModal}>
          +
        </div>
        <Modal isOpen={this.state.showModal} handleCloseModal={this.handleCloseModal}>
          <AddMetric />
        </Modal>
      </div>
    );
  }
}

export default Metrics;
