import React from 'react';
import './styles.scss';

const Footer = () => {
  return (
      <div className='footer-wrap'>
        <div className="row">
          <div className="col-md-6">
            <div className="title">About us</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio impedit repellendus ut vel.
              Consequatur corporis, fuga fugiat laudantium maxime nam neque nisi nostrum officia officiis optio
              repellat, tempora vel.
            </div>
          </div>
          <div className="col-md-3">
            <div className="title">Sitemap</div>
            <div>
              <div>Nurses</div>
              <div>Employers</div>
              <div>Social Networking</div>
              <div>Jobs</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="title">Privacy</div>
            <div>
              <div>Terms of use</div>
              <div>Privacy policy</div>
              <div>Cookie policy</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
