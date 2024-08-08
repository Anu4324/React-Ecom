import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
createProduct,
getProduct,
} from "../../../../Store/ActionCreators/ProdctActionCreators";
import { getBrand } from "../../../../Store/ActionCreators/BrandActionCreators";
import { getSubcategory } from "../../../../Store/ActionCreators/SubcategoryActionCreators";
import { getMaincategory } from "../../../../Store/ActionCreators/MaincategoryActionCreators";

export default function AdminAddProduct() {
let [data, setData] = useState({
name: "",
maincategory: "",
subcategory: "",
brand: "",
color: "",
size: "",
baseprice: "",
discount: "",
finalprice: "",
stock: "In Stock",
description: "This is Sample Product",
pic1: "",
pic2: "",
pic3: "",
pic4: "",
});

let allStateData = useSelector((state) => state.ProductStateData);
let allMaincategoryStateData = useSelector(
(state) => state.MaincategoryStateData
);
let allSubcategoryStateData = useSelector(
(state) => state.SubcategoryStateData
);
let allBrandStateData = useSelector((state) => state.BrandStateData);

var dispatch = useDispatch();
var navigate = useNavigate();

function getInputData(e) {
const { name, value } = e.target;
setData((prevData) => ({
...prevData,
[name]: value,
// Recalculate final price whenever base price or discount changes
finalprice: calculateFinalPrice(prevData.baseprice, prevData.discount),
}));
}

function getInputFile(e) {
const { name, files } = e.target;
setData((prevData) => ({
...prevData,
[name]: files[0].name,
}));
}

function calculateFinalPrice(baseprice, discount) {
return Math.round(baseprice - (baseprice * discount) / 100);
}

function postData(e) {
e.preventDefault();
const item = {
name: data.name,
maincategory: data.maincategory,
subcategory: data.subcategory,
brand: data.brand,
color: data.color,
size: data.size,
baseprice: data.baseprice,
discount: data.discount,
finalprice: data.finalprice,
stock: data.stock,
description: data.description,
pic1: data.pic1,
pic2: data.pic2,
pic3: data.pic3,
pic4: data.pic4,
};
dispatch(createProduct(item));
navigate("/AdminProduct");
}

useEffect(() => {
dispatch(getProduct());
dispatch(getMaincategory());
dispatch(getSubcategory());
dispatch(getBrand());
// Set default values if available
if (
allMaincategoryStateData.length &&
allSubcategoryStateData.length &&
allBrandStateData.length
) {
setData((prevData) => ({
...prevData,
maincategory: allMaincategoryStateData.slice(1).reverse()[0].name,
subcategory: allSubcategoryStateData.slice(1).reverse()[0].name,
brand: allBrandStateData.slice(1).reverse()[0].name,
}));
}
}, [
dispatch,
allStateData.length,
allMaincategoryStateData.length,
allSubcategoryStateData.length,
allBrandStateData.length,
]);

return (
<>
  {/* Single Page Header start */}
  <br />
  <br />
  <div className="container-fluid page-header py-5">
    <h1 className="text-center text-white display-6 mt-5">Admin Product</h1>
    <ol className="breadcrumb justify-content-center mb-0">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <li className="breadcrumb-item">
        <Link to="/Shop">Shop</Link>
      </li>
      <li className="breadcrumb-item active text-white">
        <Link to="/AdminAddProduct" className="text-white">
        AdminAddProduct
        </Link>
      </li>
    </ol>
  </div>
  {/* Single Page Header End */}

  <div className="container my-3">
    <div className="row">
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="col-md-9">
        <h5 className="bg-primary text-center p-2 fw-bold">
          Add To Product{" "}
          <Link to="/AdminAddProduct" className="ms-1">
          <i className="fas fa-plus"></i>
          </Link>
        </h5>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <form onSubmit={postData} className="mt-2">
              <div className="mb-3">
                <label>Product Name</label>
                <input type="text" name="name" onChange={getInputData} placeholder="Enter Product Name"
                  className="form-control mt-2" />
              </div>
              <div className="row mb-3">
                <div className="col-lg-3 col-sm-6">
                  <label>Maincategory Name</label>
                  <select name="maincategory" onChange={getInputData} className="form-control mt-2">
                    <option value="">Maincategory</option>
                    {allMaincategoryStateData &&
                    allMaincategoryStateData
                    .slice(1)
                    .reverse()
                    .map((item, index) => (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                    ))}
                  </select>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <label>Subcategory Name</label>
                  <select name="subcategory" onChange={getInputData} className="form-control mt-2">
                    <option value="">Subcategory</option>
                    {allSubcategoryStateData &&
                    allSubcategoryStateData
                    .slice(1)
                    .reverse()
                    .map((item, index) => (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                    ))}
                  </select>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <label>Brand Name</label>
                  <select name="brand" onChange={getInputData} className="form-control mt-2">
                    <option value="">Brand</option>
                    {allBrandStateData &&
                    allBrandStateData
                    .slice(1)
                    .reverse()
                    .map((item, index) => (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                    ))}
                  </select>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <label>Stock</label>
                  <select name="stock" onChange={getInputData} className="form-control mt-2" value={data.stock}>
                    <option value="In Stock">In Stock</option>
                    <option value="Out Of Stock">Out Of Stock</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label>Color</label>
                  <input type="text" name="color" onChange={getInputData} placeholder="Enter Color"
                    className="form-control mt-2" />
                </div>
                <div className="col-md-6">
                  <label>Size</label>
                  <input type="text" name="size" onChange={getInputData} placeholder="Enter Size"
                    className="form-control mt-2" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label>Base Price</label>
                  <input type="number" name="baseprice" onChange={getInputData} placeholder="Enter Base Price"
                    className="form-control mt-2" />
                </div>
                <div className="col-md-6">
                  <label>Discount</label>
                  <input type="number" name="discount" onChange={getInputData} placeholder="Enter Discount"
                    className="form-control mt-2" />
                </div>
              </div>
              <div className="mb-3">
                <label>Description</label>
                <textarea type="text" name="description" onChange={getInputData} rows="5" className="form-control"
                  placeholder="Product Description......" value={data.description} />
                </div>
                  <div className="row mb-3">
                    <div className="col-md-3">
                      <label htmlFor="" className="mb-2">
                        Image 1
                      </label>
                      <input
                        type="file"
                        name="pic1"
                        onChange={getInputFile}
                        accept="image/*"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="" className="mb-2">
                        Image 2
                      </label>
                      <input
                        type="file"
                        name="pic2"
                        onChange={getInputFile}
                        accept="image/*"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="" className="mb-2">
                        Image 3
                      </label>
                      <input
                        type="file"
                        name="pic3"
                        onChange={getInputFile}
                        accept="image/*"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="" className="mb-2">
                        Image 4
                      </label>
                      <input
                        type="file"
                        name="pic4"
                        onChange={getInputFile}
                        accept="image/*"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="mb-3 btn-group w-100">
                    <button
                      type="reset"
                      className="btn btn-secondary text-light w-50"
                    >
                      Reset
                    </button>
                    <button
                      onclick="location.href = 'AdminProduct';"
                      className="btn btn-primary text-light w-50"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="btn btn-secondary text-light w-50"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}