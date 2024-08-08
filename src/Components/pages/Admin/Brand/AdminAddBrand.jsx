import React, { useEffect, useRef } from "react";
import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
createBrand,
getBrand,
} from "../../../../Store/ActionCreators/BrandActionCreators";

export default function AdminAddBrand() {
let name = useRef("");
let image= useRef("");
let allStateData = useSelector((state) => state.BrandStateData);
var dispatch = useDispatch();
var navigate = useNavigate();

function getInputData(e) {
name.current = e.target.value;
}

function getInputFile(e) {
  image.current = e.target.files[0].name;
  }


function postData(e) {
e.preventDefault();
if (allStateData.slice(1).find((item) => item.name === name.current))
alert("Brand Name Already Exist!!!");
else {
dispatch(createBrand({ name: name.current,pic:image.current }));
navigate("/AdminBrand");
}
}

useEffect(() => {
function getAPIData() {
dispatch(getBrand());
}

getAPIData();
}, [dispatch, allStateData.length]);

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
        <Link to="/AdminAddBrand" className="text-white">AdminAddBrand</Link>
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
              <div className="row g-1">
              <div className="mb-3 col-6">
                <label> Brand Name</label>
                <input type="text" name="name" onChange={getInputData} placeholder="Enter Brand Name"
                  className="form-control mt-2" />
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
                <button onclick="location.href = 'AdminBrand';"className="btn btn-primary text-light w-50">
                  Back
                </button>
                <button type="submit" className="btn btn-secondary text-light w-50">
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