import React from 'react';
import './HeroBottom.css'

function HeroBottom() {
  return (
    <section id="hero-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center cols">
            <h3>325</h3>
            <h4>Course</h4>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center cols">
            <h3>405</h3>
            <h4>Work Out</h4>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center cols">
            <h3>305</h3>
            <h4>Working Hour</h4>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center cols">
            <h3>705</h3>
            <h4>Happy Client</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBottom;
