import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import Metrics from 'metrics/metrics';
// import DatePicker from 'calendar/calendar';
// HOW IT SHOULD BE
import Main from 'scenes/main/main';
import About from 'scenes/about/about';

function Root() {
  return (
    <BrowserRouter>
      <div>
        {/* <Link to="/">main</Link>
        <Link to="/about">about</Link> */}
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default Root;
