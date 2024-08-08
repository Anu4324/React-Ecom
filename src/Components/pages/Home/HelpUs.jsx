import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from '../../../Store/ActionCreators/ProdctActionCreators';

export default function HelpUs() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const allProductStateData = useSelector((state) => state.ProductStateData);
  useEffect(() => {
    if (allProductStateData && allProductStateData.length) {
      // Slice and reverse logic to get the latest 6 products
      setProducts(allProductStateData.slice(1, 9).reverse());
    }
  }, [allProductStateData]);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);


  return (
    <>
        
        <div className="container-fluid featurs">
      <div className="container">
      <div className="main_title mb-3 text-center">
              <h2 className='mb-4 fs-4'>
                <span>Our HelpUs</span>
              </h2>
              <p>Bring called seed first of third give itself now ment</p>
            </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <Link className="shop-now-link" to="/Shop">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary-1 mb-4 mx-auto">
                  <i className="fas fa-car-side fs-4 text-white"></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>Free Shipping</h5>
                  <p className="mb-0">Free on order over $300</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <Link
              className="shop-now-link"
              to="https://www.bankbazaar.com/credit-card/shopping-credit-cards.html"
              target="_block"
            >
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary-1 mb-4 mx-auto">
                  <i className="fas fa-user-shield fs-4 text-white"></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>Security Payment</h5>
                  <p className="mb-0">100% security payment</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <Link className="shop-now-link" to="/OrderTrack">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary-1 mb-4 mx-auto">
                  <i className="fas fa-exchange-alt fs-4 text-white"></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>30 Day Return</h5>
                  <p className="mb-0">30 day money guarantee</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <Link className="shop-now-link" to="/Contact">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary-1 mb-4 mx-auto">
                  <i className="fa fa-phone-alt fs-4 text-white"></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>24/7 Support</h5>
                  <p className="mb-0">Support every time fast</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}
