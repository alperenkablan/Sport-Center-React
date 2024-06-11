import React from 'react';
import './Contact.css'

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <h2><b>CONTACT US</b></h2>
        <div className="row justify-content-center">
          <div className="line" style={{ borderBottom: '5px solid rgb(247, 133, 2)', width: '50px', borderRadius: '10px' }}></div>
        </div>
        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,<br /> est quidem dolorem voluptatum incidunt impedit.</h4>
      </div>
      <div className="section-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-12 ml-5">
              <div className="contact-info text-left">
                <div className="contact-details">
                  <div className="contact-number">
                    <h6>Mobile Number</h6>
                    <p>+135 773 321 4442</p>
                  </div>
                </div>
                <div className="contact-details">
                  <div className="contact-mail">
                    <h6>Email Address</h6>
                    <p>demo@demo.com</p>
                  </div>
                </div>
              </div>
              <h3 className="contact-title">Make An Appointment</h3>
              <form action="return false" className="contact-form">
                <div className="col-lg-6" style={{ width: '100%' }}>
                  <input type="text" name="name" placeholder="Your Name" className="form-control mt-4" />
                </div>
                <div className="col-lg-6" style={{ width: '100%' }}>
                  <input type="text" name="Email" placeholder="Your E-mail" className="form-control mt-4" />
                </div>
                <div className="col-lg-6" style={{ width: '100%' }}>
                  <textarea name="message" rows="5" placeholder="Your Message" className="form-control mt-4"></textarea>
                </div>
              </form>
            </div>
            <div className="col-xl-6 col-12">
              <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58412.646104249376!2d90.33993992167967!3d23.790477699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79ea98ff963%3A0x66e9b447bcfb162!2sFitness%20Gym%20Gulshan%202!5e0!3m2!1sen!2sbd!4v1684259809691!5m2!1sen!2sbd"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
