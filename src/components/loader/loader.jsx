import React from 'react';
import loader from './loader.gif';

function Loader() {
  return (
    <div className="overlay">
      <figure className="loader">
        <img className="loader__img" src={loader} alt="...Loading data" />
        <figcaption className="loader__title">Loading...</figcaption>
      </figure>
    </div>
  );
}

export default Loader;
