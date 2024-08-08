import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from '../../../Store/ActionCreators/ProdctActionCreators';

export default function Inspired() {
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
        {/* Inspired productsSection Start */}

    <section className="inspired_product_area section_gap_bottom_custom mb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center mx-auto mb-5">
            <div className="main_title mb-3">
              <h2 className='mb-4 fs-2'>
                <span>Inspired products</span>
              </h2>
              <p>Bring called seed first of third give itself now ment</p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {products.map((item, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
          <div className="single-product">
                <div className="product-img">
                  <img
                    className="img-fluid w-100"
                    src={`/img/product/${item.pic4}`}
                    style={{ height: "225px" }}
                    alt=""
                  />
                  <div className="p_icon">
                    <Link to="/">
                      <i className="fa fa-eye" aria-hidden="true"></i>
                    </Link>
                    <Link to="/">
                      <i className="fa fa-heart" aria-hidden="true"></i>
                    </Link>
                    <Link to="/Shop/All/All/All" className="shop-now-link">
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
                <div className="product-btm">
                  <Link to={`/SingleProduct/${item.id}`} className="d-block text-center">
                    <h4 className="fw-bold">{item.name}</h4>
                  </Link>
                  <div className="mt-2 text-center">
                    <del className="mr-4 text-danger fs-6 fw-bold">
                      &#8377;{item.baseprice}
                    </del>
                    <span className="text-center text-success fw-bold mx-2" style={{fontSize: "14px",marginTop: "5px"}}>{item.discount}% Off </span>
                    <span className="fw-bold fs-6">&#8377;{item.finalprice}</span>

                    <Link
                      className="btn border border-secondary cart-now-link rounded-pill text-primary w-100 mt-3"
                      to="/Cart"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </section>

    {/* Inspired products Section End */}

      
    </>
  )
}
