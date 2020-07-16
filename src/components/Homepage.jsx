import React from 'react';

//React Router DOM
import { Link } from 'react-router-dom';

//Resources
import videoPosterImg from '../resources/video/Animation Of Stars loading img.PNG';
import homepagevideo from '../resources/video/Animation Of Stars.mp4';

//Components
import SideNav from './Navigation/SideNav.jsx';

const Homepage = () => {
  return (
    <div className="homepage">
      <SideNav />
      <video
        poster={videoPosterImg}
        className="homepage__video-bg"
        autoPlay
        muted
        loop
      >
        <source src={homepagevideo} type="video/mp4" />
      </video>

      <div className="homepage__content">
        <h1>
          Discover Space <br /> Through SpaceX
        </h1>
        <div className="homepage__content-horizontal-line"></div>
        <div className="homepage__content-cta-container">
          <h4>Travel to</h4> <Link to="/launchpad">Launchpad</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
