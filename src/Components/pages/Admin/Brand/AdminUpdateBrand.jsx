import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
getBrand,
updateBrand,
} from "../../../../Store/ActionCreators/BrandActionCreators";

export default function AdminUpdateBrand() {
let [name, setName] = useState("");
let image= useRef(""); // Initialize name state
let { id } = useParams();
let allStateData = useSelector((state) => state.BrandStateData);
var dispatch = useDispatch();
var navigate = useNavigate();

function getInputData(e) {
setName(e.target.value); // Update name state with user input
}
function getInputFile(e) {
  image.current = e.target.files[0].name;
  }

function postData(e) {
e.preventDefault();
let item = allStateData.slice(1).find((item) => item.name === name)
if (item && item.id!==Number(id))
alert("Brand Name Already Exist!!!");
else {
dispatch(updateBrand({ id,id,name:name,pic:image.current })); // Remove duplicate id key
navigate("/AdminBrand");
}
}

function getAPIData() {
dispatch(getBrand());
if (allStateData.length) {
var item = allStateData.find((item) => item.id === Number(id));
if (item) setName(item.name); // Set the name state with existing name
}
}

useEffect(() => {
getAPIData();
}, [allStateData.length]); // Trigger effect when allStateData.length changes

return (
<>
  {/*
  <!-- Single Page Header start --> */}
  <br />
  <br />

  <div className="container-fluid page-header py-5">
    <h1 className="text-center text-white display-6 mt-5">AdminBrand</h1>
    <ol className="breadcrumb justify-content-center mb-0">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>

      <li className="breadcrumb-item">
        <Link to="/Shop">Shop</Link>
      </li>
      <li className="breadcrumb-item active text-white">
        <Link to="/AdminUpdateBrand" className="text-white">AdminUpdateBrand</Link>
      </li>
    </ol>
  </div>
  {/*
  <!-- Single Page Header End --> */}

  <div className="container my-3">
    <div className="row">
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="col-md-9">
        <h5 className="bg-primary text-center p-2 fw-bold">
          Add To Brand{" "}
          <Link to="/AdminAddBrand" className="ms-1">
          <i className="fas fa-plus"></i>
          </Link>
        </h5>
        <div className="row">
          <div className="col-md-1 col-sm-0"></div>
          <div className="col-md-10 col-sm-12 ">
            <form onSubmit={postData} className="mt-2">
             <div className="row">
             <div className="mb-3 col-6">
                <label htmlFor="brand">Brand Name</label>
                <input type="text" name="name" onChange={getInputData} placeholder={name ? name : "Enter Brand Name" }
                  className="form-control mt-2" value={name} />
              </div>
              <div className="mb-3 col-6">
                <label>Image</label>
                <input type="file" name="pic" onChange={getInputFile} 
                  className="form-control mt-2" />
              </div>
             </div>
              <div className="mb-3 btn-group w-100">
                <button type="reset" className="btn btn-secondary text-light w-50">
                  Reset
                </button>
                <button type="submit" className="btn btn-primary text-light w-50">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-1 col-sm-0"></div>
        </div>
      </div>
    </div>
  </div>
</>
);
}