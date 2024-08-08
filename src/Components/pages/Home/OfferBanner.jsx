import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from '../../../Store/ActionCreators/ProdctActionCreators';


export default function OfferBanner() {
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
          <div className="container-fluid service py-5">
      <div className="container py-5">
        <div className="row g-4 justify-content-center">
          <div className="col-md-6 col-lg-4">
            <Link to="/Shop/All/All/All" className="shop-now-link">
              <div className="service-item bg-secondary rounded border border-secondary ">
                <img
                  src="img/product/insta-1.jpg"
                  className="img-fluid rounded-top w-100"
                  alt="/"
                />
                <div className="px-4 rounded-bottom">
                  <div className="service-content bg-primary text-center p-4 rounded">
                    <h5 className="text-white">Shop here</h5>
                    <h3 className="mb-0">20% OFF</h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-6 col-lg-4">
            <Link to="/Shop/All/All/All" className="shop-now-link">
              <div className="service-item bg-secondary rounded border border-secondary">
                <img
                  src="img/product/insta-2.jpg"
                  className="img-fluid rounded-top w-100"
                  alt="/"
                />
                <div className="px-4 rounded-bottom">
                  <div className="service-content bg-primary text-center p-4 rounded">
                    <h5 className="text-white">Male Shart</h5>
                    <h3 className="mb-0">25% OFF</h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-6 col-lg-4">
            <Link to="/Shop/All/All/All" className="shop-now-link">
              <div className="service-item bg-secondary rounded border border-secondary">
                <img
                  src="img/product/insta-3.jpg"
                  className="img-fluid rounded-top w-100"
                  alt="/"
                />
                <div className="px-4 rounded-bottom">
                  <div className="service-content bg-primary text-center p-4 rounded">
                    <h5 className="text-white">Male Shart</h5>
                    <h3 className="mb-0">25% OFF</h3>
                  </div>
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



