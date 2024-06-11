import React from 'react';
import './Purchase.css'
function Purchase() {
  return (
    <section id="purchase">
      <div className="container">
        <h2>PURCHASE FROM US</h2>
        <div className="row justify-content-center">
          <div className="line" style={{ borderBottom: '5px solid rgb(247, 133, 2)', width: '50px', borderRadius: '10px' }}></div>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam accusamus odio quidem maiores? Officiis obcaecati accusamus consequuntur!</p>
        <div className="container">
          <div className="section-content">
            <div className="row justify-content-evenly">
              <div className="col-lg-3">
                <div className="product">
                  <a href="">
                    <img src="images/purchase1.jpg" height="350" alt="Product 1" />
                  </a>
                  <div className="product-header">
                    <h6 className="title">Kettlebell / 3kg</h6>
                    <p>89,99$ / 59,99$</p>
                    <br />
                    <a className="buy" href="#">
                      <i className="bi bi-cart-fill"> Add To Cart</i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product">
                  <a href="">
                    <img src="images/purchase2.jpg" height="350" alt="Product 2" />
                  </a>
                  <div className="product-header">
                    <h6 className="title">Kettlebell / 3kg</h6>
                    <p>89,99$ / 59,99$</p>
                    <br />
                    <a className="buy" href="#">
                      <i className="bi bi-cart-fill"> Add To Cart</i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product">
                  <a href="">
                    <img src="images/purchase3.jpg" height="350" alt="Product 3" />
                  </a>
                  <div className="product-header">
                    <h6 className="title">Kettlebell / 3kg</h6>
                    <p>89,99$ / 59,99$</p>
                    <br />
                    <a className="buy" href="#">
                      <i className="bi bi-cart-fill"> Add To Cart</i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product">
                  <a href="">
                    <img src="images/purchase4.jpg" height="350" alt="Product 4" />
                  </a>
                  <div className="product-header">
                    <h6 className="title">Kettlebell / 3kg</h6>
                    <p>89,99$ / 59,99$</p>
                    <br />
                    <a className="buy" href="#">
                      <i className="bi bi-cart-fill"> Add To Cart</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Purchase;
