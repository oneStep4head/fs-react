import React, { Component, createRef } from 'react';
import Loader from 'components/loader/loader';
import createRequest from 'utils/create-request';
import { fetchUserByName, createUser } from 'utils/api/api-config';
import Cookies from 'universal-cookie';

class Welcome extends Component {
  cookies = new Cookies();

  isAuth = this.cookies.get('userId') !== undefined;

  userNameRef = createRef();

  componentDidMount() {
    const { isAuth, redirectAuthorized } = this;
    if (isAuth) redirectAuthorized();
  }

  redirectAuthorized = () => {
    this.props.history.push('/main');
  };

  auth = (event) => {
    event.preventDefault();
    const { cookies, userNameRef, redirectAuthorized } = this;
    const userName = userNameRef.current.value;

    createRequest(fetchUserByName, { userName }, null).then(({ status, data }) => {
      if (data !== undefined) {
        cookies.set('userId', data.id);
        redirectAuthorized();
      } else {
        createRequest(createUser, null, { userName }).then(({ status, data }) => {
          if (status === 'OK' && data !== undefined) {
            cookies.set('userId', data.id);
            redirectAuthorized();
          } else {
            console.log(status);
          }
        });
      }
    });
  };

  render() {
    return (
      <section className="welcome-screen">
        <div className="welcome">
          <h2>Check this out!</h2>
          <form action="submit" onSubmit={this.auth}>
            <p>Enter your name:</p>
            <input className="input" type="text" ref={this.userNameRef} />
            <input className="btn" type="submit" />
          </form>
        </div>
      </section>
    );
  }
}

export default Welcome;
