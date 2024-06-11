import React from 'react';
import './Classes.css'

function Classes() {
  return (
    <section id="classes">
      <div className="container">
        <div className="row clearfix justify-content-center">
          <h2><b>OUR CLASSES</b></h2>
          <div className="row justify-content-center">
            <div className="line" style={{ borderBottom: '5px solid rgb(247, 133, 2)', width: '50px', borderRadius: '10px' }}></div>
          </div>
          <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,<br /> laborum. Blanditiis, veniam?</h4>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="btnsDiv" className="nav nav-tabs nav-fill justify-content-center mt-4" style={{ border: 0 }}>
                <button id="yoga" className="my-button px-4 py-2 mb-2 mb-lg-0">Yoga</button>
                <button id="group" className="my-button px-4 py-2 mb-2 mb-lg-0">Group</button>
                <button id="solo" className="my-button px-4 py-2 mb-2 mb-lg-0">Solo</button>
                <button id="stret" className="my-button px-4 py-2 mb-2 mb-lg-0">Stretching</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div id="feat-cont" className="container mx-auto" style={{ display: 'flex', marginTop: '25px' }}>
            {/* Feature Content */}
          </div>
        </div>
        <div className="container" style={{ marginTop: '100px' }}>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-12">
              <h3><b>Bmi Calculator</b></h3>
              <p className="pe-lg-5 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquam quasi iste laborum, aliquid est!</p>
              <p className="pe-lg-5 mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quia cumque nostrum.</p>
              <form>
                <input id="height" type="number" name="height" placeholder="Your Height" />
                <label htmlFor="height"><p>CM</p></label>
                <input id="weight" type="number" name="weight" placeholder="Your Weight" />
                <label htmlFor="weight"><p>KG</p></label>
              </form>
            </div>
            <div className="calc col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <h5 id="resultbmi">Your BMI</h5>
              <img src="images/bmi-index.jpg" width="350px" height="250" alt="BMI Index" />
              <div id="after"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Classes;
