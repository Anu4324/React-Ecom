import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";
import Home from './pages/Home/Home';
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Pages/Cart";
import Chackout from "./pages/Pages/Chackout";
// import ProductDetails from "./pages/Pages/ProductDetails";
import Blog from "./pages/Pages/Blog";
import OrderTrack from "./pages/Pages/OrderTrack";
import Contact from "./pages/Contact/Contact";
import AdminHome from "./pages/Admin/AdminHome";
import AdminUser from "./pages/Admin/AdminUser";

import AdminMaincategory from "./pages/Admin/Maincategory/AdminMaincategory";
import AdminAddMaincategory from "./pages/Admin/Maincategory/AdminAddMaincategory";
import AdminUpdateMaincategory from "./pages/Admin/Maincategory/AdminUpdateMaincategory";

import AdminSubcategory from "./pages/Admin/Subcategory/AdminSubcategory";
import AdminAddSubcategory from "./pages/Admin/Subcategory/AdminAddSubcategory";
import AdminUpdateSubcategory from "./pages/Admin/Subcategory/AdminUpdateSubcategory";

import AdminBrand from "./pages/Admin/Brand/AdminBrand";
import AdminAddBrand from "./pages/Admin/Brand/AdminAddBrand";
import AdminUpdateBrand from "./pages/Admin/Brand/AdminUpdateBrand";

import AdminProduct from "./pages/Admin/Product/AdminProduct";
import AdminAddProduct from "./pages/Admin/Product/AdminAddProduct";
import AdminUpdateProduct from "./pages/Admin/Product/AdminUpdateProduct";
import SingleProduct from "./pages/Pages/SingleProduct";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import Profile from "./pages/Profile/Profile";
import UpdateProfile from "./pages/Profile/UpdateProfile";
import Demo from "./pages/Shop/Demo";
export default function App() {
  
return (
<>  
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:mc" element={<Home />} />
      {/* <Route path="/Shop" element={<Shop />} /> */}
      <Route path="/Shop/:mc/:sc/:br" element={<Shop />} />
      <Route path="/Cart" element={<Cart />}/>
      <Route path="/Chackout" element={<Chackout />} />
      <Route path="/Blog" element={<Blog />}/>
      <Route path="/OrderTrack" element={<OrderTrack />} />
      <Route path="/SingleProduct/:id" component={SingleProduct} element={<SingleProduct />} />
      {/* <Route path="/Product-Details/:id" element={<ProductDetails />}/> */}
      <Route path="/Contact" element={<Contact />} />
      <Route path="/AdminHome" element={<AdminHome/>}/>
      <Route path="/AdminUser" element={<AdminUser/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/UpdateProfile" element={<UpdateProfile/>} />
      <Route path="/Demo" element={<Demo/>} />


      <Route path="/AdminMaincategory" element={<AdminMaincategory/>} />
      <Route path="/AdminAddMaincategory" element={<AdminAddMaincategory/>} />
      <Route path="/AdminUpdateMaincategory/:id" element={<AdminUpdateMaincategory/>} />

      <Route path="/AdminSubcategory" element={<AdminSubcategory/>} />
      <Route path="/AdminAddSubcategory" element={<AdminAddSubcategory/>} />
      <Route path="/AdminUpdateSubcategory/:id" element={<AdminUpdateSubcategory/>} />

      <Route path="/AdminBrand" element={<AdminBrand/>} />
      <Route path="/AdminAddBrand" element={<AdminAddBrand/>} />
      <Route path="/AdminUpdateBrand/:id" element={<AdminUpdateBrand/>} />

      <Route path="/AdminProduct" element={<AdminProduct/>} />
      <Route path="/AdminAddProduct" element={<AdminAddProduct/>} />
      <Route path="/AdminUpdateProduct/:id" element={<AdminUpdateProduct/>} />

    </Routes>
    <Footer />
  </BrowserRouter>
</>
);
}