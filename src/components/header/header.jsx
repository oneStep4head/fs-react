import React, { PureComponent } from 'react';
import Nav from 'components/nav/nav';
import Cookies from 'universal-cookie';

class Header extends PureComponent {
  logout = (event) => {
    event.preventDefault();

    const cookies = new Cookies();
    cookies.remove('userId');

    this.props.history.push('../');
  };

  render() {
    return (
      <header className="header">
        <div className="wrapper header__wrapper">
          <Nav />
          {/* {<input className="c-btn logout-btn" type="button" value="LogOut" onClick={this.logout} />} */}
        </div>
      </header>
    );
  }
}

export default Header;
