import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from '../../../Store/ActionCreators/ProdctActionCreators';

export default function Bestsaler() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const allProductStateData = useSelector((state) => state.ProductStateData);
  useEffect(() => {
    if (allProductStateData && allProductStateData.length) {
      // Slice and reverse logic to get the latest 6 products
      setProducts(allProductStateData.slice(0, 9).reverse());
    }
  }, [allProductStateData]);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
          {/*<!-- Bestsaler Product Start --> */}

    <div className="container-fluid">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: "700px" }}>
        <div className="main_title">
              <h2 className='mb-4 fs-2'>
                <span>Bestseller Products</span>
              </h2>
              <p> Latin words, combined with a handful of model sentence structures,
              to generate Lorem Ipsum which looks reasonable.</p>
            </div>
        </div>
        <div className="row g-4">
          {products.map((item, index) => (
            <div key={index} className="col-lg-4">
              <div className="py-4 ps-2 rounded bg-light">
                <div className="row align-items-center">
                  <div className="col-6 fruite-img m-auto">
                    <img src={`/img/product/${item.pic3}`}
                      className="img-fluid rounded-circle w-100 "alt="/" style={{ height: "160px" }}/>
                  </div>
                  <div className="col-6">
                    <Link to={`/Product-Details/${item.id}`} className="h5">
                      {item.name}
                    </Link>
                    <div className="d-flex my-3">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <del className="text-danger fs-6 fw-bold">
                      &#8377;{item.baseprice}
                    </del>
                   
                    <span className="text-center text-success fw-bold mx-1" style={{fontSize: "14px",marginTop: "5px"}}>
                      {item.discount}% Off
                    </span>
                    <span className="fs-6 text-black fw-bold">
                      &#8377;{item.finalprice}
                    </span>
                    {/* <Link to="/Shop/All/All/All" className="shop-now-link"> */}
                    <Link
                      // to={"/ProductDetails/" + item.id}
                      to={`/SingleProduct/${item.id}`}
                      className="btn border border-secondary shop-now-link cart-now-link rounded-pill text-primary mt-2 "
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/*<!-- Bestsaler Product End --> */}
    </>
  )
}
