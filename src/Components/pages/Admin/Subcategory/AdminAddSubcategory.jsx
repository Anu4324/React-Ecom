import React, { useEffect, useRef } from "react";
import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
createSubcategory,
getSubcategory,
} from "../../../../Store/ActionCreators/SubcategoryActionCreators";

export default function AdminAddSubcategory() {
let name = useRef("");
let allStateData = useSelector((state) => state.SubcategoryStateData);
var dispatch = useDispatch();
var navigate = useNavigate();
function getInputData(e) {
name.current = e.target.value;
}
function postData(e) {
e.preventDefault();
if (allStateData.slice(1).find((item) => item.name === name.current))
alert("Subcategory Name Already Exist!!!");
else {
dispatch(createSubcategory({ name: name.current }));
navigate("/AdminSubcategory");
}
}

useEffect(() => {
function getAPIData() {
dispatch(getSubcategory());
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
    <h1 className="text-center text-white display-6 mt-5">
      AdminSubcategory
    </h1>
    <ol className="breadcrumb justify-content-center mb-0">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <li className="breadcrumb-item">
        <Link to="/Shop">Shop</Link>
      </li>
      <li className="breadcrumb-item active text-white">
        <Link to="/AdminAddSubcategory" className="text-white">AdminAddSubcategory</Link>
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
          Add To Subcategory{" "}
          <Link to="/AdminAddSubcategory " className="ms-1">
          <i className="fas fa-plus"></i>
          </Link>
        </h5>
        <div className="row">
          <div className="col-md-1 col-sm-0"></div>
          <div className="col-md-10 col-sm-12 ">
            <form onSubmit={postData} className="mt-2">
              <div className="mb-3">
                <label> Subcategory Name</label>
                <input type="text" name="name" onChange={getInputData} placeholder="Enter Subcategory Name"
                  className="form-control mt-2" />
              </div>
              <div className="mb-3 btn-group w-100">
                <button type="reset" className="btn btn-secondary text-light w-50">
                  Reset
                </button>
                <button onclick="location.href = 'AdminSubcategory';"className="btn btn-primary text-light w-50">
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