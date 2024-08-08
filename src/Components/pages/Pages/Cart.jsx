import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCart, deleteCart } from '../../../Store/ActionCreators/CartActionCreators';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(40.0); // Flat rate
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();
  const allCartStateData = useSelector((state) => state.CartStateData);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

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

  const calculateSubtotal = (cartItems) => {
    return cartItems.reduce((acc, item) => {
      return acc + (item.price || 0) * (item.quantity || 1);
    }, 0);
  };

  const handleQuantityChange = (id, change) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max((item.quantity || 1) + change, 1) } // Prevent negative quantity
        : item
    ));
  };

  const handleDeleteItem = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      await dispatch(deleteCart({ id }));
      // Update cart state immediately after deleting an item
      setCart(cart.filter(item => item.id !== id));
      // Update subtotal and total after deletion
      const subtotalValue = calculateSubtotal(cart.filter(item => item.id !== id));
      setSubtotal(subtotalValue);
      setTotal(subtotalValue + shipping);
    }
  };

  useEffect(() => {
    const subtotalValue = calculateSubtotal(cart);
    setSubtotal(subtotalValue);
    setTotal(subtotalValue + shipping);
  }, [cart, shipping]);

  const handleImageError = (event) => {
    event.target.src = "img/product/images (12).jpeg"; // Fallback image
  };

  return (
    <>
      {/* Page Header */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6 mt-5">Cart</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/Home">Home</Link>
          </li>
          <li className="breadcrumb-item active text-white">
            <Link to="/Shop" className="text-white">Cart</Link>
          </li>
        </ol>
      </div>

      {/* Cart Page Content */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Product Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Brand/Color/Size</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <Link to={`/img/product/${item.pic}`} target="_blank" rel="noreferrer">
                          <img
                            src={`/img/product/${item.pic}`} // Correct path for images in public folder
                            className="img-fluid me-5 rounded-circle"
                            style={{ width: "80px", height: "80px" }}
                            alt="Product"
                            onError={handleImageError}
                          />
                        </Link>
                      </div>
                    </th>
                    <td>
                      <p className="mb-0 mt-4">{item.name}</p>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">{item.brand}/{item.color}/{item.size}</p>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">&#8377;{(item.price || 0).toFixed(2)}</p>
                    </td>
                    <td>
                      <div className="input-group quantity mt-4" style={{ width: "100px" }}>
                        <div className="input-group-btn">
                          <button
                            className="btn btn-sm btn-minus rounded-circle bg-light border"
                            onClick={() => handleQuantityChange(item.id, -1)}
                          >
                            <i className="fa fa-minus"></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm text-center border-0 bg-none"
                          value={item.quantity || 1}
                          readOnly
                          style={{ background: "none" }}
                        />
                        <div className="input-group-btn">
                          <button
                            className="btn btn-sm btn-plus rounded-circle bg-light border"
                            onClick={() => handleQuantityChange(item.id, 1)}
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">&#8377;{((item.price || 0) * (item.quantity || 1)).toFixed(2)}</p>
                    </td>
                    <td>
                      <button
                        className="btn btn-md rounded-circle bg-light border mt-4"
                        onClick={() => handleDeleteItem(item.id)}
                      >
                        <i className="fa fa-trash text-danger"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="row g-4 justify-content-end">
            <div className="col-7">
              <div className="mt-5">
                <input
                  type="text"
                  className="border-0000 me-5 py-2 mb-4 w-75"
                  placeholder="Coupon Code"
                />
                <button className="btn border-secondary rounded-pill px-4 py-2 text-primary w-75" type="button">
                  Apply Coupon
                </button>
              </div>
            </div>
            <div className="col-5 py-3">
              <div className="bg-light rounded">
                <div className="p-4">
                  <h1 className="display-6">Cart <span className="fw-normal">Total</span></h1>
                  <div className="d-flex justify-content-between mb-2">
                    <h5 className="mb-0 me-4">Subtotal:</h5>
                    <p className="mb-0">&#8377;{(subtotal || 0).toFixed(2)}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-0 me-4">Shipping</h5>
                    <div>
                      <p className="mb-0">Flat rate: &#8377;{(shipping || 0).toFixed(2)}</p>
                    </div>
                  </div>
                  <p className="mb-0 text-end">Shipping to Cart.</p>
                </div>
                <div className="py-2 mb-4 border-top border-bottom d-flex justify-content-between">
                  <h5 className="mb-0 ps-4 me-4">Total</h5>
                  <p className="mb-0 pe-4">&#8377;{(total || 0).toFixed(2)}</p>
                </div>
                <Link to="/Chackout" className="btn border-secondary rounded-pill px-4 ms-5 py-2 text-primary text-uppercase mb-4 w-75" type="button">
                  Proceed Checkout
                </Link>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </>
  );
}
