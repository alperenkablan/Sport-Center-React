import React from 'react';
import './Hero.css'

function Hero() {
  return (
    <section id="hero" style={{ backgroundImage: 'url(images/hero-man.jpg)' }}>
      <div className="container">
        <div className="row atf-content-details">
          <div className="col-lg-7 col-md-7 col-12 atf-single-details text-start" style={{ marginTop: '150px' }}>
            <h5>Powerful</h5>
            <h2 className="mb-0 d-block d-lg-block text-uppercase">
              Group<br />Practice<br />With Trainer
            </h2>
            <p className="pe-lg-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br />
              Dolor unde ad impedit adipisci natus facilis voluptatibus ipsa,<br />
              a quos, velit nulla error corporis magnam molestias.
            </p>
            <div className="hero-bottom">
              <a href="" className="btn btn-primary">Sign Up</a>
              <a href="" className="btn btn-secondary">Details</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
