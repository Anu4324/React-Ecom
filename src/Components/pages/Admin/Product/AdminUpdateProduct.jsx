import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getProduct,
  updateProduct,
} from "../../../../Store/ActionCreators/ProdctActionCreators";
export default function AdminUpdateProduct() {
  let [name, setName] = useState(""); // Initialize name state
  let { id } = useParams();
  let allStateData = useSelector((state) => state.ProductStateData);
  var dispatch = useDispatch();
  var navigate = useNavigate();

  function getInputData(e) {
    setName(e.target.value); // Update name state with user input 
  }

  function postData(e) {
    e.preventDefault();
    if (allStateData.slice(1).find((item) => item.name === name))
      alert("Product Name Already Exist!!!"); 
    else {
      dispatch(updateProduct({ id, name: name })); // Remove duplicate id key
      navigate("/AdminProduct");
    }
  }

  function getAPIData() {
    dispatch(getProduct());
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
        <h1 className="text-center text-white display-6 mt-5">Admin Product</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>

          <li className="breadcrumb-item">
        <Link to="/Shop">Shop</Link>
      </li>
      <li className="breadcrumb-item active text-white">
        <Link to="/AdminUpdateProduct" className="text-white">AdminUpdateProduct</Link>
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
            <h5 className="bg-primary text-center p-2 fw-bold ">
              Add To Product{" "}
              <Link to="/AdminAddProduct" className="ms-1">
                <i className="fas fa-plus"></i>
              </Link>
            </h5>
            <div className="row">
              <div className="col-md-1 col-sm-0"></div>
              <div className="col-md-10 col-sm-12 ">
                <form onSubmit={postData} className="mt-2">
                  <div className="mb-3">
                    <label htmlFor="Product">Product Name</label>

                    <input
                      type="text"
                      name="name"
                      onChange={getInputData}
                      placeholder={name ? name : "Enter Product Name"}
                      className="form-control mt-2"
                      value={name}
                    />
                  </div>
                  <div className="mb-3 btn-group w-100">
                    <button
                      type="reset"
                      className="btn btn-secondary text-light w-50"
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary text-light w-50"
                    >
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
