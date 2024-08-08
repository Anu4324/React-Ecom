import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getWishlist, deleteWishlist } from '../../../Store/ActionCreators/WishlistActionCreators';

export default function Profile() {
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
    joinDate: "",
  });
  const [wishlist, setWishlist] = useState([]);
  const allWishlistStateData = useSelector((state) => state.WishlistStateData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const response = await fetch("/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      console.log("Response Data:", responseData);

      const item = responseData.find(
        (item) => item.username === localStorage.getItem("username")
      );

      if (item) {
        setUser(item);
      } else {
        navigate("/login");
        return;
      }

      dispatch(getWishlist());

      if (allWishlistStateData.length > 0) {
        setWishlist(allWishlistStateData.filter((x) => x.userid === localStorage.getItem("userid")));
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDeleteItem = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      await dispatch(deleteWishlist({ id }));
      // Update cart state immediately after deleting an item
      setWishlist(wishlist.filter(item => item.id !== id));
      // Update subtotal and total after deletion
   
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <br />
      <br />

      {/* Top page of profile start */}
      <section>
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6 mt-5">Your Profile</h1>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/UpdateProfile">
                {localStorage.getItem("role") === "admin" ? "UpdateProfile" : "Update Profile"}
              </Link>
            </li>
            <li className="breadcrumb-item active text-white">
              <Link to="/AdminUser" className="text-white">Your Profile</Link>
            </li>
          </ol>
        </div>
      </section>
      {/* Top page of profile end */}

      {/* Profile start */}
      <section className="bg-pink py-4">
        <div className="container my-3 border p-3">
          <div className="row">
            <div className="col-md-5 d-flex justify-content-center">
              <img 
                src={user.pic ? `/img/${user.pic}` : `/img/imgs.png`} 
                alt="Profile"
                className="img-fluid w-75 h-75" 
              />
            </div>
            <div className="col-md-7">
              <h5 className="bg-primary text-center p-2 fw-bold border rounded">Your Profile</h5>
              <table className="table table-bordered table-hover">
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
                      <Link to="/UpdateProfile" className="btn btn-primary w-100">
                        Update Profile
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Product Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Brand/Color/Size</th>
                    <th scope="col">Price</th>
                    <th scope="col">Total</th>
                    <th scope="col">Shopping</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">
                        <div className="d-flex align-items-center">
                          <Link to={`/img/product/${item.pic}`} target="_blank" rel="noreferrer">
                            <img 
                              src={`/img/product/${item.pic}`} 
                              alt="Product" 
                              className="img-fluid me-5 rounded-circle" 
                              style={{ width: "80px", height: "80px" }} 
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
                        <p className="mb-0 mt-4">&#8377;{((item.price || 0) * (item.quantity || 1)).toFixed(2)}</p>
                      </td>
                      <td>
                        <Link to={`/SingleProduct/${item.productid}`}
                          className="btn btn-md rounded-circle bg-light border mt-4" 
                         
                        >
                          <i className="fa fa-shopping-cart text-danger"></i>
                        </Link>
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
          </div>
        </div>: <h3 className="text-center">No Product Added</h3>
      </section>
      {/* Profile end */}
    </>
  );
}
