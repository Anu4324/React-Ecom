import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from '../../../Store/ActionCreators/ProdctActionCreators';

export default function HeroHeader() {
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
          <div className="container-fluid py-5 mt-5 hero-header">
      <div className="container pt-5 mt-5">
        <div className="row g-5 align-items-center">
          <div className="col-md-12 col-lg-7">
            <h4 className="mb-3 text-secondary">Get More The 90% Discount</h4>
            <h3 className="mb-2 display-30 text-primary">
              Show{" "}
              <span style={{ color: "#00103e" }}>
                Your <br />
                Personal
              </span>{" "}
              Style
            </h3>
            <p className="text-blacks">
              Fowl saw dry which a above together place.
            </p>
            <div className="position-relative mx-auto text-center">
              <Link className="btn border border-secondary rounded-pill px-3 text-primary" to="/Shop/All/All/All">
              <i className="fa fa-shopping-bag me-2 text-primary"></i> Shop
              Now
              </Link>
              <Link className="btn border border-secondary rounded-pill px-3 text-primary ms-5" to="/Contact">
              <i className="fa fa-shopping-bag me-2 text-primary"></i> Contact
              Us
              </Link>
            </div>
          </div>
          <div className="col-md-12 col-lg-5">
            <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel"
              data-bs-interval="1000">
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active rounded">
                  <img src="img/Product/male.jpg" className="img-fluid w-100 h-100 bg-secondary rounded"
                    alt="First slide" />
                  <Link to="/shop/Male/All/All" className="btn px-4 py-2 text-white rounded">
                  Male
                  </Link>
                </div>
                <div className="carousel-item rounded">
                  <img src="img/Product/female.jpg" className="img-fluid w-100 h-100 rounded" alt="Second slide" />
                  <Link to="/shop/All/Female/All" className="btn px-4 py-2 text-white rounded">
                  Female
                  </Link>
                </div>
                <div className="carousel-item rounded">
                  <img src="img/Product/kids.jpg" className="img-fluid w-100 h-100 rounded" alt="Second slide" />
                  <Link to="/shop/All/All/Kids" className="btn px-4 py-2 text-white rounded">
                  Kids
                  </Link>
                </div>{" "}
                <div className="carousel-item rounded">
                  <img src="img/Product/all.jpg" className="img-fluid w-100 h-100 rounded" alt="Second slide" />
                  <Link to="/shop/All/All/All" className="btn px-4 py-2 text-white rounded">
                  All Shop
                  </Link>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
