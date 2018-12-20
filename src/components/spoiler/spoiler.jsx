import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'utils/class-names/class-names';

class Spoiler extends PureComponent {
  state = {
    isOpen: false
  };

  toggleSpoiler = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { head, children } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="spoiler">
        <div className="spoiler__head" onClick={this.toggleSpoiler}>
          {head}
        </div>
        <div className={classNames('spoiler__body', { opened: isOpen })}>{children}</div>
      </div>
    );
  }
}

export default Spoiler;
