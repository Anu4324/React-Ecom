import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../Store/ActionCreators/CartActionCreators';

export default function Checkout() {
  const [user, setUser] = useState({
    pic: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    pin: "",
    city: "",
    state: "",
    country: "",
  });
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(40.0); // Flat rate
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allCartStateData = useSelector((state) => state.CartStateData);

  // Fetch user data
  const getData = async () => {
    try {
      const response = await fetch("/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error('Network response was not ok.');
      const responseData = await response.json();
      console.log("Response Data:", responseData);

      const item = responseData.find(
        (item) => item.username === localStorage.getItem("username")
      );

      if (item) {
        setUser(item);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      navigate("/login");
    }
  };

  // Fetch cart data
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  // Update cart and calculate totals
  useEffect(() => {
    if (Array.isArray(allCartStateData)) {
      setCart(allCartStateData);
      const subtotalValue = calculateSubtotal(allCartStateData);
      setSubtotal(subtotalValue);
      setTotal(subtotalValue + shipping);
    } else {
      setCart([]);
      setSubtotal(0);
      setTotal(0);
    }
  }, [allCartStateData]);

  // Calculate subtotal
  const calculateSubtotal = (cartItems) => {
    return cartItems.reduce((acc, item) => {
      return acc + (item.price || 0) * (item.quantity || 1);
    }, 0);
  };

  // Fetch user data on component mount
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* Page Header */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6 mt-5">Checkout</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/Shop">Shop</Link>
          </li>
          <li className="breadcrumb-item active text-white">
            <Link to="/Checkout" className="text-white">Checkout</Link>
          </li>
        </ol>
      </div>

      {/* Checkout Page */}
      <section className="checkout_area section_gap">
        <div className="container">
          {/* Returning Customer Section */}
          <div className="returning_customer">
            <div className="check_title" style={{ marginLeft: "26px" }}>
              <h2>
                Returning Customer?
                <Link to="/login" className="ms-2">Click here to login</Link>
              </h2>
            </div>
            <p>
              If you have shopped with us before, please enter your details in the
              boxes below. If you are a new customer, please proceed to the
              Billing & Shipping section.
            </p>
            <form className="row contact_form" action="#" method="post" noValidate>
              <div className="col-md-6 form-group p_star">
                <input type="text" className="form-control" id="name" name="name" placeholder="Username or Email" />
              </div>
              <div className="col-md-6 form-group p_star">
                <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
              </div>
              <div className="col-md-12 form-group">
                <button type="submit" className="btn submit_btn">Send Message</button>
                <div className="creat_account">
                  <input type="checkbox" id="f-option" name="selector" />
                  <label htmlFor="f-option">Remember me</label>
                </div>
              </div>
            </form>
          </div>

          {/* Coupon Area */}
          <div className="cupon_area">
            <div className="check_title" style={{ marginLeft: "26px" }}>
          
            </div>
            <div className="d-flex mt-2">
             <input className="form-control mt-0" type="text" placeholder="Enter coupon code" />
              <span><Link className="tp_btn fw-bold" to="/">Apply Coupon</Link></span>
            </div>
          </div>

          {/* Billing Details */}
          <div className="billing_details">
            <div className="row">
              <div className="col-lg-7 border">
                <h2 className="fw-bold text-primary py-3 border-bottom-inset">Billing Details</h2>
                <table className="table table-hover">
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <td>{user.name}</td>
                    </tr>
                    <tr>
                      <th>Username</th>
                      <td>{localStorage.getItem("username")}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <td>{user.phone}</td>
                    </tr>
                    <tr>
                      <th>Address</th>
                      <td>{user.address}</td>
                    </tr>
                    <tr>
                      <th>PIN Code</th>
                      <td>{user.pin}</td>
                    </tr>
                    <tr>
                      <th>City</th>
                      <td>{user.city}</td>
                    </tr>
                    <tr>
                      <th>State</th>
                      <td>{user.state}</td>
                    </tr>
                    <tr>
                      <th>Country</th>
                      <td>{user.country}</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="text-center py-4">
                        <Link to="/UpdateProfile" className="btn btn-primary w-100 m-auto">
                          Update Profile
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Order Summary */}
              <div className="col-lg-5">
                <div className="order_box border">
                  <h2 className="fw-bold text-primary">Your Order Summary</h2>
                  <ul className="list">
                    <li>
                      <Link to="#" className="fw-bold">Product
                      <span className="fw-bold">Total</span>
                      </Link>
                    </li>
                    {cart.map((item) => (
                      <li key={item.id}>
                        <Link to="#" className="fw-bold">
                          {item.name}(&#8377;{item.price} X {item.qty})
                          <span className="fw-bold">&#8377;{item.price * item.qty}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="list list_2">
                    <li>
                      <Link to="#" className="fw-bold">Subtotal
                      <span>&#8377;{subtotal}</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="fw-bold">Shipping
                      <span>&#8377;{shipping}</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="fw-bold">Total
                      <span>&#8377;{total}</span>
                      </Link>
                    </li>
                  </ul>
                  <div className="payment_item">
                    <div className="radion_btn">
                      <input type="radio" id="f-option5" name="payment-method" />
                      <label htmlFor="f-option5" className="fw-bold">Check payments</label>
                      <div className="check"></div>
                    </div>
                    <p>
                      Please send a check to Store Name, Store Street, Store Town,
                      Store State / County, Store Postcode.
                    </p>
                  </div>
                  <div className="payment_item active">
                    <div className="radion_btn">
                      <input type="radio" id="f-option6" name="payment-method" />
                      <label htmlFor="f-option6" className="fw-bold">Paynow</label>
                      <img src="img/product/single-product/card.jpg" alt="paytem" className="img-fluid w-auto" />
                      <div className="check"></div>
                    </div>
                  </div>
                  
                  <div className="place_order mt-3">
            <Link to="/OrderConfirmation" className="btn btn-primary w-100">
              Place Order
            </Link>
          </div>
                </div>
              </div>
            </div>
          </div>

          {/* Place Order */}
        
        </div>
      </section>
    </>
  );
}
