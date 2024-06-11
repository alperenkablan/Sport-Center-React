import React from 'react';
import './Review.css'

function Review() {
  return (
    <section id="review">
      <div className="container">
        <div className="row clearfix justify-content-center">
          <div className="col-lg-6 col-md-7 text-center">
            <h2><b>REVIEW CLIENT</b></h2>
            <div className="row justify-content-center">
              <div className="line" style={{ borderBottom: '5px solid rgb(247, 133, 2)', width: '50px', borderRadius: '10px' }}></div>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, velit. Quo, laborum?</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div id="testimonial-slider" className="owl-carousel" style={{ display: 'flex', marginTop: '55px' }}>
              <div className="testimonial">
                <div className="pic">
                  <img src="images/client1.jpg" alt="Client 1" />
                </div>
                <div className="testimonial-profile">
                  <h3 className="title">Diet Expert</h3>
                  <span className="post">CFO</span>
                </div>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.
                </p>
              </div>
              <div className="testimonial">
                <div className="pic">
                  <img src="images/client2.jpg" alt="Client 2" />
                </div>
                <div className="testimonial-profile">
                  <h3 className="title">Cardio Trainer</h3>
                  <span className="post">CEO</span>
                </div>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
