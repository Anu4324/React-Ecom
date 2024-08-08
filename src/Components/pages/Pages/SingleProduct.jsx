import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../Store/ActionCreators/ProdctActionCreators";
import {getCart,createCart,} from "../../../Store/ActionCreators/CartActionCreators";
import {getWishlist,createWishlist,} from "../../../Store/ActionCreators/WishlistActionCreators";
import ReactOwlCarousel from "react-owl-carousel";
import BrandLogo from "./BrandLogo";

export default function ProductDetail() {
const [product, setProduct] = useState(null);
const [qty, setQty] = useState(1);
const dispatch = useDispatch(); 
const { id } = useParams();
const navigate = useNavigate();
const allProductStateData = useSelector((state) => state.ProductStateData);
const allCartStateData = useSelector((state) => state.CartStateData);
const allWishlistStateData = useSelector((state) => state.WishlistStateData);
const userid = localStorage.getItem("userid");

useEffect(() => {
  dispatch(getProduct());
  dispatch(getCart());
  dispatch(getWishlist());
}, [dispatch]);

useEffect(() => {
  dispatch(getProduct(id)); // Dispatch action to fetch product details based on id
}, [dispatch, id]);

useEffect(() => {
  if (allProductStateData && allProductStateData.length > 0) {
    const foundProduct = allProductStateData.find((item) => item.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      console.log("Product not found");
    }
  }
}, [allProductStateData, id]);

const handleQtyChange = (change) => {
  setQty((prevQty) => {
    const newQty = prevQty + change;
    return newQty > 0 ? newQty : 1;
  });
};

const addToCart = () => {
  // Check if the user is logged in
  if (userid) {
    // If logged in, proceed with adding the item to the cart
    if (product && product.id) {
      const existingItem = allCartStateData.find(
        (x) => x.productId === product.id && x.userid === userid
      );

      const cartPayload = {
        userid,
        productid: product.id,
        name: product.name,
        color: product.color,
        size: product.size,
        brand: product.brand,
        price: product.finalprice,
        pic: product.pic1,
        qty,
        total: product.finalprice * qty,
      };

      console.log("Dispatching ADD_TO_CART with payload:", cartPayload);

      dispatch(createCart(cartPayload));
      navigate("/Cart");
    } else {
      console.error("Product information is missing.");
    }
  } else {
    // If not logged in, store the intent and redirect to the login page
    localStorage.setItem('redirectAfterLogin', JSON.stringify({
      action: 'add_to_cart',
      productId: product?.id,
      qty
    }));
    
    navigate("/login");
  }
};


const addToWishlist = () => {                // Wishlist action
  if (product && product.id && userid) {
    const wishlistPayload = {
      userid,
      productid: product.id,
      name: product.name,
      color: product.color,
      size: product.size,
      brand: product.brand,
      price: product.finalprice,
      pic: product.pic1,
    };


    dispatch(createWishlist(wishlistPayload));
    navigate("/Cart");
  } else {
    console.error("Product or User ID is missing.");
  }
    
  navigate("/Profile");
};
const formatDate = () => {                   // Date format
  const dateObj = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return dateObj.toLocaleDateString("en-US", options);
};
return (
<>
  <br />
  <br />

  {/*============== heard top name start================== */}
  <section>
    <div className="container-fluid page-header pt-5">
      <h1 className="text-center text-white display-6 mt-5">
        Product Details
      </h1>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/Shop/All/All/All">Shop</Link>
        </li>
        <li className="breadcrumb-item active text-white">
          <Link to="/ProductDetails" className="text-white">
          Product Details
          </Link>
        </li>
      </ol>
    </div>
  </section>
  {/*============== heard top name end=====================*/}

  {/*============== Product Details Section Start==========*/}
  <section>
    <div className="product_image_area">
      <div className="container">
        <div className="row s_product_inner">
          <div className="col-lg-6">
            <div className="s_product_img">
              <div id="productCarousel" className="carousel slide" data-ride="carousel" data-interval="1000">
                <ol className="carousel-indicators" style={{ height: "100px" }}>
                  {product && product.pic1 && (
                  <li data-target="#productCarousel" data-slide-to="0" className="active">
                    <Link to={`/Shop/All/All/All`} className="d-block w-100 h-100">
                    <img src={`/img/product/${product?.pic1}`} className="d-block w-100 h-100" alt="Slide 1" />
                    </Link>
                  </li>
                  )}
                  {product && product.pic2 && (
                  <li data-target="#productCarousel" data-slide-to="1">
                    <Link to={`/Shop/Male/All/All`} className="d-block w-100 h-100">
                    <img src={`/img/product/${product?.pic2}`} className="d-block w-100 h-100" alt="Slide 2" />
                    </Link>
                  </li>
                  )}
                  {product && product.pic3 && (
                  <li data-target="#productCarousel" data-slide-to="2">
                    <Link to={`/Shop/All/Female/All`} className="d-block w-100 h-100">
                    <img src={`/img/product/${product?.pic3}`} className="d-block w-100 h-100" alt="Slide 3" />
                    </Link>
                  </li>
                  )}
                  {product && product.pic4 && (
                  <li data-target="#productCarousel" data-slide-to="3">
                    <Link to={`/Shop/All/All/Kids`} className="d-block w-100 h-100">
                    <img src={`/img/product/${product?.pic4}`} className="d-block w-100 h-100" alt="Slide 4" />
                    </Link>
                  </li>
                  )}
                </ol>
                <div className="carousel-inner" style={{ height: "400px" }}>
                  {product && product.pic1 && (
                  <div className="carousel-item active">
                    <img className="d-block w-100" src={`/img/product/${product?.pic1}`} alt="First slide" />
                  </div>
                  )}
                  {product && product.pic2 && (
                  <div className="carousel-item">
                    <img className="d-block w-100" src={`/img/product/${product?.pic2}`} alt="Second slide" />
                  </div>
                  )}
                  {product && product.pic3 && (
                  <div className="carousel-item">
                    <img className="d-block w-100" src={`/img/product/${product?.pic3}`} alt="Third slide" />
                  </div>
                  )}
                  {product && product.pic4 && (
                  <div className="carousel-item">
                    <img className="d-block w-100" src={`/img/product/${product?.pic4}`} alt="Fourth slide" />
                  </div>
                  )}
                </div>
                <a className="carousel-control-prev" href="#productCarousel" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#productCarousel" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="s_product_text">
              <h2>
                <Link to={`/Shop/All/All/All`}>{product?.name} </Link>{" "}
                  </h2>{" "}
                  <h2 className=" fs-5">
                Price:
                <del className="mr-4 text-danger fw-bold ms-2" style={{ fontSize: "18px" }}>
                  ₹{product?.baseprice}
                </del>
                <span className="text-center fs-6 text-success">
                  {product?.discount}% Off
                </span>
                <span className="ms-2">: ₹{product?.finalprice}</span>
              </h2>
              <ul className="list">
                <li>
                  <Link className="active" to="/Shop/All/All/All">
                  <span className="text-danger">Category</span> :{" "}
                  {product?.maincategory} | {product?.subcategory} |
                  {product?.brand}
                  </Link>
                </li>
                <li>
                  <Link>
                  <span className="text-danger">Color</span> :{" "}
                  {product?.color} | Size : {product?.size}
                  </Link>
                </li>
                <li>
                  <Link>
                  <span className="text-danger">Availability</span> :{" "}
                  {product?.stock}
                  </Link>
                </li>
              </ul>
              <p>
                {product?.description
                ? product.description.length > 135
                ? `${product?.description.substring(0, 135)}...`
                : product.description
                : "Description not available"}
              </p>
              <div className="quantity-selector mb-4">
                <label htmlFor="qty" className="fs-6">
                  Quantity:
                </label>
                <button onClick={()=> handleQtyChange(1)}
                  className="quantity-button plus ms-3"
                  type="button"
                  >
                  <i className="fas fa-plus"></i>
                </button>
                <div className="product_count">
                  <input type="text" name="qty" id="sst" min="1" value={qty} onChange={(e)=>
                  setQty(parseInt(e.target.value, 10))}
                  size="2"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  max="5"
                  title="Quantity:"
                  className="input-text qty"
                  />
                </div>
                <button onClick={()=> handleQtyChange(-1)}
                  className="quantity-button minus"
                  type="button"
                  >
                  <i className="fas fa-minus"></i>
                </button>
              </div>
              <div className="card_area">
                <button onClick={addToWishlist} className="icon_btn border">
                  <i className="fas fa-heart text-danger"></i>
                </button>
                <button onClick={addToCart} className="main_btn cart-now-link">
                  Add to Cart
                </button>
                <button onClick={addToWishlist} className="icon_btn border">
                  <i className="fas fa-heart text-danger"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*============== Product Details End=====================*/}

  {/*============== Related Products Start Slider===========*/}
  <section>
    <div className="container-fluid testimonial py-3">
      <div className="container">
        <div className="testimonial-header text-center">
          <h3 className="text-primary fw-bold py-4">
            Our Related Products
          </h3>
        </div>
        <ReactOwlCarousel className="owl-theme" loop margin={30} items={4} autoplay={true} autoplayTimeout={2000} nav>
          {allProductStateData.map((item, index) => (
          <div key={index} className="testimonial-item img-border-radius rounded border text-center"
            style={{ background: "#f3f3f3" }}>
            <Link to={`/SingleProduct/${item.id}`} className="d-block w-100 h-100">
            <img src={`/img/product/${item.pic4}`} className="d-block mx-auto img-fluid rounded"
              style={{ width: "100px", height: "100px" }} alt={`product-${item.id}`} />
            <h6 className="text-center mt-1">
              {item.name}
              <br />
              <del className="mr-4 text-danger fw-bold ms-2" style={{ fontSize: "15px" }}>
                ₹{item.baseprice}
              </del>
              <span className="text-center text-success" style={{ marginTop: "-10px" }}>
                {item.discount}% Off
              </span>
              <span className="ms-2">₹{item.finalprice}</span>
            </h6>
            <div className="px-4">
              <Link className="btn border-secondary cart-now-link rounded-2 text-primary w-100 h-100 p-1 mb-3"
                to="/Cart">
              <i className="fa fa-shopping-bag me-2 text-primary"></i>
              Add to cart
              </Link>
            </div>
            </Link>
          </div>
          ))}
        </ReactOwlCarousel>
      </div>
    </div>
  </section>
  {/*============== Related Products End Slider==============*/}

  {/*============== Product Description Start================*/}

  <section className="product_description_area pb-5">
    <div className="container">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
            aria-selected="true">
            Description
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
            aria-controls="profile" aria-selected="false">
            Specification
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
            aria-selected="false">
            Comments
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review"
            aria-selected="false">
            Reviews
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
          <h5>{product?.description}</h5>
        </div>
        <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <h5>Name</h5>
                  </td>
                  <td>
                    <h5>{product?.name}</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Maincategory</h5>
                  </td>
                  <td>
                    <h5>{product?.maincategory}</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Subcategory</h5>
                  </td>
                  <td>
                    <h5>{product?.subcategory || "N/A"}</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Brand</h5>
                  </td>
                  <td>
                    <h5>{product?.brand || "N/A"}</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Color</h5>
                  </td>
                  <td>
                    <h5>{product?.color || "N/A"}</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Size</h5>
                  </td>
                  <td>
                    <h5>{product?.size || "N/A"}</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Quantity</h5>
                  </td>
                  <td>
                    <h5>{product?.stock || "N/A"}</h5>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          <div className="row">
            <div className="col-lg-6">
              <div className="comment_list">
                <div className="review_item">
                  <div className="media">
                    <div className="d-flex">
                      <img src={`/img/product/${product?.pic4}`} alt=""
                        className="img-fluid w-25 h-100 rounded-circle" />
                    </div>
                    <div className="media-body">
                      <h2 className="fs-4 fw-bold pt-2">{product?.name}</h2>
                      <h4>{formatDate()}</h4>
                      <Link className="reply_btn" to="/">
                      Reply
                      </Link>
                    </div>
                  </div>
                  <p className="fs-6 text-dark ">
                    {product?.description || "No comments available"}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="review_box">
                <h4>Post a comment</h4>
                <form className="row contact_form" id="contactForm" novalidate="novalidate">
                  <div className="col-md-12">
                    <div className="form-group mb-2">
                      <input type="text" className="form-control" id="name" name="name" placeholder="Your Full name" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group mb-2">
                          <input type="text" className="form-control" id="number" name="number"
                            placeholder="Phone Number" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-2">
                          <input type="email" className="form-control" id="email" name="email"
                            placeholder="Email Address" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-2">
                      <textarea className="form-control" name="message" id="message" rows="3"
                        placeholder="Message"></textarea>
                    </div>
                  </div>
                  <div className="col-md-12 text-right">
                    <button type="submit" value="submit" className="btn submit_btn">
                      Submit Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
          <div className="row">
            <div className="col-lg-6">
              <div className="row total_rate">
                <div className="col-6">
                  <div className="box_total">
                    <h5>Overall</h5>
                    <h4>4.0</h4>
                    <h6>(03 Reviews)</h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="rating_list">
                    <h3>Based on 3 Reviews</h3>
                    <ul className="list">
                      <li>
                        <Link to="/">
                        5 Star <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i> 01
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                        4 Star <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i> 01
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                        3 Star <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i> 01
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                        2 Star <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i> 01
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                        1 Star <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i> 01
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="review_list">
                <div className="review_item">
                  <div className="media">
                    <div className="d-flex">
                      <img src={`/img/product/${product?.pic4}`} alt=""
                        className="img-fluid w-25 h-100 rounded-circle" />
                    </div>
                    <div className="media-body">
                      <h2 className="fs-4 fw-bold pt-2">{product?.name}</h2>
                      <i className="fa fa-star text-danger"></i>
                      <i className="fa fa-star text-danger"></i>
                      <i className="fa fa-star text-danger"></i>
                      <i className="fa fa-star text-danger"></i>
                      <i className="fa fa-star text-danger"></i>
                    </div>
                  </div>
                  <p className="fs-6 text-dark ">
                    {product?.description || "No reviews available"}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="review_box">
                <h4>Add a Review</h4>
                <p>Your Rating:</p>
                <ul className="list">
                  <li>
                    <Link to="/">
                    <i className="fa fa-star"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                    <i className="fa fa-star"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                    <i className="fa fa-star"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                    <i className="fa fa-star"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                    <i className="fa fa-star"></i>
                    </Link>
                  </li>
                </ul>
                <p>Outstanding</p>
                <form className="row contact_form mb-2" id="contactForm" novalidate="novalidate">
                  <div className="col-md-12">
                    <div className="form-group mb-3">
                      <input type="text" className="form-control" id="name" name="name" placeholder="Your Full name" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <input type="text" className="form-control" id="number" name="number"
                            placeholder="Phone Number" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <input type="email" className="form-control" id="email" name="email"
                            placeholder="Email Address" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-3">
                      <textarea className="form-control" name="message" id="message" rows="4"
                        placeholder="Message"></textarea>
                    </div>
                  </div>
                  <div className="col-md-12 text-right mb-4">
                    <button type="submit" value="submit" className="btn submit_btn rounded-1" target="_brack">
                      Submit Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*============== Product Description End ==================*/}

  {/*============== Brand Logo Section Start================= */}
  <BrandLogo className="mt-4 py-5" />
  {/*============== Brand Logo Section End ===================*/}

</>
);
}