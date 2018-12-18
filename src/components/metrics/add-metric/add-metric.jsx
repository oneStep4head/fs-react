import React, { Component, createRef } from 'react';
import MetricContext from 'components/metric-context/metric-context';

class AddMetric extends Component {
  static contextType = MetricContext;

  textRef = createRef();

  onSubmit = (event) => {
    event.preventDefault();

    const { addMetric } = this.context;

    addMetric(this.textRef.current.value);
    this.textRef.current.value = '';
  };

  render() {
    return (
      <form className="add-metric" onSubmit={this.onSubmit}>
        <h2 className="add-metric__title">Enter new metric name:</h2>
        <input className="c-input add-metric__field" type="text" name="name" ref={this.textRef} />
        <input className="c-btn add-metric__btn" type="submit" value="Add" />
      </form>
    );
  }
}

export default AddMetric;
