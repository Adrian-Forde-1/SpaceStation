import React from 'react';

//React Router DOM
import { Link, withRouter } from 'react-router-dom';

const SideNav = (props) => {
  console.log(props);
  const renderLinks = () => {};

  return (
    <nav className="side-nav">
      <ul className="side-nav__list">
        <li className="side-nav__list-item">
          <Link to="#">Home</Link>
        </li>
        <li className="side-nav__list-item">
          <Link to="#about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(SideNav);
