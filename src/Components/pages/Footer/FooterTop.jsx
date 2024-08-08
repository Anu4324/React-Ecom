import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FooterTop() {

useEffect(() => {

const handleScrollToTop = () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
};
const link = document.querySelector('.shop-now-link');
link.addEventListener('click', handleScrollToTop);

const links = document.querySelectorAll('.footer-item .btn-link ');
links.forEach(link => {
link.addEventListener('click', handleScrollToTop);
});

const scrollToTop = () => {
window.scrollTo({
top: 0,
behavior: "smooth"
});
};

const homeToTopLink = document.querySelector('.home-to-top');
if (homeToTopLink) {
homeToTopLink.addEventListener('click', scrollToTop);
}
return () => {
if (homeToTopLink) {
homeToTopLink.removeEventListener('click', scrollToTop);
}
links.forEach(link => {
link.removeEventListener('click', handleScrollToTop);

});
};
}, []);

return (
<>
  {/*
  <!-- Footer Start --> */}
  <section className='bg-pink'>
  <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
    <div className="container py-5">
      <div className="pb-4 mb-4" style={{ borderBottom: "1px solid rgba(226, 175, 24, 0.5)" }}>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Link to="/" className="home-to-top">
            <h1 className="text-primary p-0">
              <span className="fw-bold nav-link p-0"><i className="color-blue">BEST</i>Deals</span>
            </h1>
            <p className="text-secondary mb-0">Fresh products</p>
            </Link>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="position-relative mx-auto">
              <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type="text"
                placeholder="Your Email" />
              <Link to="/Contact"
                className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white"
                style={{ top: "0", right: "0" }}>
              Subscribe Now
              </Link>

            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="d-flex justify-content-end pt-3">
              <Link className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle" to="https://x.com/?lang=en"
                target='_block'>
              <i className="fab fa-twitter"></i>
              </Link>
              <Link className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                to="https://www.facebook.com/" target='_block'>
              <i className="fab fa-facebook-f"></i>
              </Link>
              <Link className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                to="https://www.youtube.com/" target='_block'>
              <i className="fab fa-youtube"></i>
              </Link>
              <Link className="btn btn-outline-secondary btn-md-square rounded-circle" to="https://www.linkedin.com/"
                target='_block'>
              <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-5"> 
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="footer-item">
            <h4 className="text-light mb-2">Why People Like us!</h4>
            <p className="mb-4">
              typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the like Aldus PageMaker
              including of Lorem Ipsum.
            </p>
            <Link className="btn border border-secondary w-75 rounded-pill text-primary shop-now-link" to="/Shop/All/All/All">
            <i className="fa fa-shopping-bag me-1 text-primary"></i> Shop Now
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="d-flex flex-column text-start footer-item">
            <h4 className="text-light mb-3">Shop Info</h4>
            <Link className="btn-link" to="/Shop">Shop Category</Link>
            <Link className="btn-link" to="/Product-Details">Product Details</Link>
            <Link className="btn-link" to="/Chackout">Product Checkout</Link>
            <Link className="btn-link" to="/Cart">Shopping Cart</Link>
            <Link className="btn-link" to="/Blog">Blog Details</Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="d-flex flex-column text-start footer-item">
            <h4 className="text-light mb-3">Account</h4>
            <Link className="btn-link" to="/">Home</Link>
            <Link className="btn-link" to="/Shop/All/All/All">Shop</Link>
            <Link className="btn-link" to="/Cart">Cart</Link>
            <Link className="btn-link" to="/Contact">Contact</Link>
            <Link className="btn-link" to="/OrderTrack">Tracking</Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="footer-item">
            <h4 className="text-light mb-3">Contact</h4>

            <i className="fas fa-map-marker-alt">
              <Link to="https://maps.google.com/?ll=latitude,longitude" target="_brack" className="d-inline-flex">
              <p className="ms-2 orange">B-803 New Ashok Nager Delhi</p>
              </Link>
            </i>
            <i className="fas fa-envelope ">
              <Link to="mailto:anuragksingh109@gmail.com" target="_brack" className="d-inline-flex">
              <p className="ms-2">anuragksingh109@gmail.com</p>
              </Link>
            </i>
            <i className="fa fa-phone-alt ">
              <Link to="tel:9170973916" target="_brack" className="d-inline-flex">
              <p className="ms-2 orange">9154858745,9170973916</p>
              </Link>
            </i>
            <p>Payment Accepted</p>
            <Link className="" to="https://www.bankbazaar.com/credit-card/shopping-credit-cards.html" target="_brack">
            <img src="img/payment.png" className="img-fluid" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  {/*
  <!-- Footer End --> */}
</>
);
}