import React from 'react';
import './Trainer.css'

function Trainer() {
  return (
    <section id="trainer" style={{ backgroundColor: '#f1f8ff' }}>
      <div className="container">
        <h2>OUR BEST TRAINERS</h2>
        <div className="row justify-content-center">
          <div className="line" style={{ borderBottom: '5px solid rgb(247, 133, 2)', width: '50px', borderRadius: '10px' }}></div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptas eaque delectus.</p>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 col-12">
              <div className="our-team">
                <img src="images/trainer1.jpg" alt="Trainer 1" />
                <div className="team-content">
                  <h3 className="title">Bella</h3>
                  <span className="post">Cardio Trainer</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <div className="our-team">
                <img src="images/trainer2.jpg" alt="Trainer 2" />
                <div className="team-content">
                  <h3 className="title">Scott</h3>
                  <span className="post">Diet Expert</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <div className="our-team">
                <img src="images/trainer3.jpg" alt="Trainer 3" />
                <div className="team-content">
                  <h3 className="title">Ashley</h3>
                  <span className="post">Lead Trainer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trainer;
