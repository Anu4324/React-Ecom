import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Sample data for slider
const slides = [
  { id: 1, src: "assets/img/slider/01/slider-1.jpg?text=Slide+1" },
  { id: 2, src: "assets/img/slider/01/slider-2.jpg?text=Slide+2" },
  { id: 3, src: "assets/img/slider/01/slider-3.jpg?text=Slide+3" },
];

const Demo = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    items: 1,
  };

  return (
    <div className="slider-container mt-5 pt-5">
    <div className="row">
      <div className="col-lg-4">
      <OwlCarousel className="owl-theme mt-5 pt-5" {...options}>
        {slides.map((slide) => (
          <div className="item" key={slide.id}>
            <img src={slide.src} alt={`Slide ${slide.id}`} />
          </div>
        ))}
      </OwlCarousel>
      </div>
      <div className="col-lg-4">
      <OwlCarousel className="owl-theme mt-5 pt-5" {...options}>
        {slides.map((slide) => (
          <div className="item" key={slide.id}>
            <img src={slide.src} alt={`Slide ${slide.id}`} />
          </div>
        ))}
      </OwlCarousel>
      </div>
      <div className="col-lg-4">
      <OwlCarousel className="owl-theme mt-5 pt-5" {...options}>
        {slides.map((slide) => (
          <div className="item" key={slide.id}>
            <img src={slide.src} alt={`Slide ${slide.id}`} />
          </div>
        ))}
      </OwlCarousel>
      </div>
    </div>
    </div>
  );
};

export default Demo;

// import { useDispatch, useSelector } from 'react-redux';
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { getWishlist} from '../../../Store/ActionCreators/WishlistActionCreators'; // Correctly import the action
// creators

// export default function Profile() {
// const [user, setUser] = useState({
// pic: "",
// name: "",
// email: "",
// phone: "",
// address: "",
// pin: "",
// city: "",
// state: "",
// country: "",
// joinDate: "",
// });
// const [wishlist, setWishlist] = useState([]);
// const allWishlistStateData = useSelector((state) => state.WishlistStateData);
// const navigate = useNavigate();
// const dispatch = useDispatch();

// const getData = async () => {
// try {
// const response = await fetch("/user", {
// method: "GET",
// headers: {
// "Content-Type": "application/json",
// },
// });
// const responseData = await response.json();
// console.log("Response Data:", responseData);

// const item = responseData.find(
// (item) => item.username === localStorage.getItem("username")
// );

// if (item) {
// setUser(item);
// } else {
// navigate("/login");
// return;
// }

// dispatch(getWishlist());
// } catch (error) {
// console.error("Error:", error);
// }
// };

// useEffect(() => {
// getData();
// }, []);

// useEffect(() => {
// if (allWishlistStateData.length > 0) {
// setWishlist(allWishlistStateData.filter((x) => x.userid === localStorage.getItem("userid")));
// }
// }, [allWishlistStateData]);

// return (
// <>
//   <br />
//   <br />

//   {/* Top page of profile start */}
//   <section>
//     <div className="container-fluid page-header py-5">
//       <h1 className="text-center text-white display-6 mt-5">Your Profile</h1>
//       <ol className="breadcrumb justify-content-center mb-0">
//         <li className="breadcrumb-item">
//           <Link to="/">Home</Link>
//         </li>
//         <li className="breadcrumb-item">
//           <Link to="/UpdateProfile">
//           {localStorage.getItem("role") === "admin" ? "Update Profile" : "Update Profile"}
//           </Link>
//         </li>
//         <li className="breadcrumb-item active text-white">
//           <Link to="/AdminUser" className="text-white">Your Profile</Link>
//         </li>
//       </ol>
//     </div>
//   </section>
//   {/* Top page of profile end */}

//   {/* Profile start */}
//   <section className="bg-pink py-4">
//     <div className="container my-3 border p-3">
//       <div className="row">
//         <div className="col-md-5 d-flex justify-content-center">
//           <img src={user.pic ? `/img/${user.pic}` : `/img/imgs.png`} alt="Profile" className="img-fluid w-75 h-75" />
//         </div>
//         <div className="col-md-7">
//           <h5 className="bg-primary text-center p-2 fw-bold border rounded">Your Profile</h5>
//           <table className="table table-bordered table-hover">
//             <tbody>
//               <tr>
//                 <th>Name</th>
//                 <td>{user.name}</td>
//               </tr>
//               <tr>
//                 <th>Username</th>
//                 <td>{localStorage.getItem("username")}</td>
//               </tr>
//               <tr>
//                 <th>Email</th>
//                 <td>{user.email}</td>
//               </tr>
//               <tr>
//                 <th>Phone</th>
//                 <td>{user.phone}</td>
//               </tr>
//               <tr>
//                 <th>Address</th>
//                 <td>{user.address}</td>
//               </tr>
//               <tr>
//                 <th>PIN Code</th>
//                 <td>{user.pin}</td>
//               </tr>
//               <tr>
//                 <th>City</th>
//                 <td>{user.city}</td>
//               </tr>
//               <tr>
//                 <th>State</th>
//                 <td>{user.state}</td>
//               </tr>
//               <tr>
//                 <th>Country</th>
//                 <td>{user.country}</td>
//               </tr>
//               <tr>
//                 <td colSpan="2" className="text-center py-4">
//                   <Link to="/UpdateProfile" className="btn btn-primary w-100">
//                   Update Profile
//                   </Link>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <div className="row">
//         {wishlist.length > 0 ? (
//         <div className="table-responsive">
//           <table className="table">
//             <thead>
//               <tr>
//                 <th scope="col">Product Image</th>
//                 <th scope="col">Name</th>
//                 <th scope="col">Brand/Color/Size</th>
//                 <th scope="col">Price</th>
//                 <th scope="col">Total</th>
//                 <th scope="col">Shopping</th>
//                 <th scope="col">Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               {wishlist.map((item, index) => (
//               <tr key={index}>
//                 <th scope="row">
//                   <div className="d-flex align-items-center">
//                     <Link to={`/img/product/${item.pic}`} target="_blank" rel="noreferrer">
//                     <img src={`/img/product/${item.pic}`} alt="Product" className="img-fluid me-5 rounded-circle"
//                       style={{ width: "80px", height: "80px" }} />
//                     </Link>
//                   </div>
//                 </th>
//                 <td>
//                   <p className="mb-0 mt-4">{item.name}</p>
//                 </td>
//                 <td>
//                   <p className="mb-0 mt-4">{item.brand}/{item.color}/{item.size}</p>
//                 </td>
//                 <td>
//                   <p className="mb-0 mt-4">&#8377;{(item.price || 0).toFixed(2)}</p>
//                 </td>
//                 <td>
//                   <p className="mb-0 mt-4">&#8377;{((item.price || 0) * (item.quantity || 1)).toFixed(2)}</p>
//                 </td>
//                 <td>
//                   <Link to={`/SingleProduct/${item.productid}`}
//                     className="btn btn-md rounded-circle bg-light border mt-4">
//                   <i className="fa fa-shopping-cart text-danger"></i>
//                   </Link>
//                 </td>
//                 <td>
//                   <button className="btn btn-md rounded-circle bg-light border mt-4" onClick={() => removeFromWishlist(item)}>
//                     <i className="fa fa-trash text-danger"></i>
//                   </button>
//                 </td>
//               </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         ) : (
//         <h1 className="text-center">No Product Added</h1>
//         )}
//       </div>
//     </div>
//   </section>
//   {/* Profile end */}
// </>
// );
// }


// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { getCart } from '../../../Store/ActionCreators/CartActionCreators';

// export default function Cart() {
//   const [cart, setCart] = useState([]);
//   const [subtotal, setSubtotal] = useState(0);
//   const [shipping, setShipping] = useState(40.0); // Flat rate
//   const [total, setTotal] = useState(0);

//   const dispatch = useDispatch();
//   const allCartStateData = useSelector((state) => state.CartStateData);

//   useEffect(() => {
//     dispatch(getCart());
//   }, [dispatch]);

//   useEffect(() => {
//     if (Array.isArray(allCartStateData)) {
//       setCart(allCartStateData);
//       const subtotalValue = calculateSubtotal(allCartStateData);
//       setSubtotal(subtotalValue);
//       setTotal(subtotalValue + shipping);
//     } else {
//       setCart([]);
//       setSubtotal(0);
//       setShipping(3.0); // Reset to default shipping rate
//       setTotal(0);
//     }
//   }, [allCartStateData]);

//   const calculateSubtotal = (cartItems) => {
//     return cartItems.reduce((acc, item) => {
//       return acc + (item.price || 0) * (item.quantity || 1);
//     }, 0);
//   };

//   const handleQuantityChange = (id, change) => {
//     setCart(cart.map(item =>
//       item.id === id
//         ? { ...item, quantity: Math.max((item.quantity || 1) + change, 1) } // Prevent negative quantity
//         : item
//     ));
//   };

//   const handleRemoveItem = (id) => {
//     setCart(cart.filter(item => item.id !== id));
//   };

//   useEffect(() => {
//     const subtotalValue = calculateSubtotal(cart);
//     setSubtotal(subtotalValue);
//     setTotal(subtotalValue + shipping);
//   }, [cart, shipping]);

//   const handleImageError = (event) => {
//     event.target.src = "img/product/images (12).jpeg"; // Fallback image
//   };

//   return (
//     <>
//       {/* Page Header */}
//       <div className="container-fluid page-header py-5">
//         <h1 className="text-center text-white display-6 mt-5">Cart</h1>
//         <ol className="breadcrumb justify-content-center mb-0">
//           <li className="breadcrumb-item">
//             <Link to="/Home">Home</Link>
//           </li>
//           <li className="breadcrumb-item active text-white">
//             <Link to="/Shop" className="text-white">Cart</Link>
//           </li>
//         </ol>
//       </div>

//       {/* Cart Page Content */}
//       <div className="container-fluid py-5">
//         <div className="container py-5">
//           <div className="table-responsive">
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th scope="col">ProductImage</th>
//                   <th scope="col">Name</th>
//                   <th scope="col">Brand/Color/Size</th>
//                   <th scope="col">Price</th>
//                   <th scope="col">Quantity</th>
//                   <th scope="col">Total</th>
//                   <th scope="col">Delete</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cart.map((item, index) => (
//                   <tr key={index}>
//                     <th scope="row">
//                       <div className="d-flex align-items-center">
//                       <Link to={`/img/product/${item.pic}`} target="_blank" rel="noreferrer">
//             <img
//                 src={`/img/product/${item.pic}`} // Correct path for images in public folder
//                 className="img-fluid me-5 rounded-circle"
//                 style={{ width: "80px", height: "80px" }}
//                 alt="Product"
//             />
//         </Link>
//                       </div>
//                     </th>
//                     <td>
//                       <p className="mb-0 mt-4">{item.name}</p>
//                     </td>
//                     <td>
//                       <p className="mb-0 mt-4">{item.brand}/{item.color}/{item.size}</p>
//                     </td>

//                     <td>
//                       <p className="mb-0 mt-4">&#8377;{(item.price || 0).toFixed(2)}</p>
//                     </td>
//                     <td>
//                       <div className="input-group quantity mt-4" style={{ width: "100px" }}>
//                         <div className="input-group-btn">
//                           <button
//                             className="btn btn-sm btn-minus rounded-circle bg-light border"
//                             onClick={() => handleQuantityChange(item.id, -1)}
//                           >
//                             <i className="fa fa-minus"></i>
//                           </button>
//                         </div>
//                         <input
//                           type="text"
//                           className="form-control form-control-sm text-center border-0 bg-none"
//                           value={item.quantity || 1}
//                           readOnly
//                         style={{background: "none"}}/>
//                         <div className="input-group-btn">
//                           <button
//                             className="btn btn-sm btn-plus rounded-circle bg-light border"
//                             onClick={() => handleQuantityChange(item.id, 1)}
//                           >
//                             <i className="fa fa-plus"></i>
//                           </button>
//                         </div>
//                       </div>
//                     </td>
//                     <td>
//                       <p className="mb-0 mt-4">&#8377;{((item.price || 0) * (item.quantity || 1)).toFixed(2)}</p>
//                     </td>
//                     <td>
//                       <button
//                         className="btn btn-md rounded-circle bg-light border mt-4"
//                         onClick={() => handleRemoveItem(item.id)}
//                       >
//                         <i className="fa fa-trash text-danger"></i>
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="row g-4 justify-content-end">
//             <div className="col-7">
//               <div className="mt-5">
//                 <input
//                   type="text"
//                   className="border-0000 me-5 py-2 mb-4 w-75"
//                   placeholder="Coupon Code"
//                 />
//                 <button className="btn border-secondary rounded-pill px-4 py-2 text-primary w-75" type="button">
//                   Apply Coupon
//                 </button>
//               </div>
//             </div>
//             <div className="col-5 py-3">
//               <div className="bg-light rounded">
//                 <div className="p-4">
//                   <h1 className="display-6">Cart <span className="fw-normal">Total</span></h1>
//                   <div className="d-flex justify-content-between mb-2">
//                     <h5 className="mb-0 me-4">Subtotal:</h5>
//                     <p className="mb-0">&#8377;{(subtotal || 0).toFixed(2)}</p>
//                   </div>
//                   <div className="d-flex justify-content-between">
//                     <h5 className="mb-0 me-4">Shipping</h5>
//                     <div>
//                       <p className="mb-0">Flat rate: {(shipping || 0).toFixed(2)}</p>
//                     </div>
//                   </div>
//                   <p className="mb-0 text-end">Shipping to Cart.</p>
//                 </div>
//                 <div className="py-2 mb-4 border-top border-bottom d-flex justify-content-between">
//                   <h5 className="mb-0 ps-4 me-4">Total</h5>
//                   <p className="mb-0 pe-4">&#8377;{(total || 0).toFixed(2)}</p>
//                 </div>
//                 <Link to="/checkout"  className="btn border-secondary rounded-pill px-4 ms-5 py-2 text-primary text-uppercase mb-4 w-75" type="button">
//                   Proceed Checkout
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
