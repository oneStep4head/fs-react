import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ValueEditor extends PureComponent {
  static propTypes = {};

  state = {
    newData: []
  };

  updateData = (event) => {
    const { id } = event.currentTarget.dataset;
    const { metric } = this.props;

    this.setState({
      newData: metric.data.map((dataObj) => {
        if (dataObj.id === id) {
          const { children } = event.currentTarget;

          const date = Date.parse(new Date(children[0].value));
          const { value } = children[1];

          return { ...dataObj, date, value };
        }
        return dataObj;
      })
    });
  };

  pushNewDataToMetric = (event) => {
    event.preventDefault();

    const { newData } = this.state;

    if (newData.length !== 0) {
      const { metricId } = event.currentTarget.dataset;
      const { updateMetric } = this.props;

      updateMetric(metricId, newData);
    } else {
      console.log('nothing changed');
    }
  };

  render() {
    const { metric } = this.props;

    return (
      <form data-metric-id={metric.id} onSubmit={this.pushNewDataToMetric} className="vlaue-editor">
        {metric.data.map(dataObj => (
          <div data-id={dataObj.id} className="value" onChange={this.updateData} key={dataObj.id}>
            <input
              name="date"
              type="date"
              defaultValue={new Date(dataObj.date).toISOString().substr(0, 10)}
            />
            <input name="value" type="text" defaultValue={dataObj.value} />
          </div>
        ))}
        <input type="submit" value="Edit" />
      </form>
    );
  }
}

export default ValueEditor;
