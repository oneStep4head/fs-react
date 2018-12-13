import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Nav extends PureComponent {
  render() {
    return (
      <nav className="nav">
        <Link className="nav__item" to="/">
          main
        </Link>
        <Link className="nav__item" to="/metrics">
          metrics
        </Link>
        <Link className="nav__item" to="/about">
          about
        </Link>
      </nav>
    );
  }
}

export default Nav;
