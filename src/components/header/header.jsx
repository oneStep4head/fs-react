import React, { PureComponent } from 'react';
import Nav from 'components/nav/nav';

class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <Nav />
      </header>
    );
  }
}

export default Header;
