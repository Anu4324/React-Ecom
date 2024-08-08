import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
deleteMaincategory,getMaincategory,} 
from "../../../../Store/ActionCreators/MaincategoryActionCreators";
export default function AdminMaincategory() {
var [data, setData] = useState([]);
var allStateData = useSelector((state) => state.MaincategoryStateData);
var dispatch = useDispatch();

function deleteItem(id) {
if (window.confirm("Are You Sure to Delete tha Item :")) {
dispatch(deleteMaincategory({ id: id }));
getAPIData();
}

}

function getAPIData() {
dispatch(getMaincategory()); 
if (allStateData.length) setData(allStateData.slice(1).reverse());
}

useEffect(() => {
getAPIData();
}, [allStateData.length]);

return (
<>
  {/*<!-- Single Page Header start --> */}

  <br /><br />
  <div className="container-fluid page-header py-5">
    <h1 className="text-center text-white display-6 mt-5">
      AdminMaincategory
    </h1>
    <ol className="breadcrumb justify-content-center mb-0">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>

      <li className="breadcrumb-item">
        <Link to="/Shop">Shop</Link>
      </li>
      <li className="breadcrumb-item active text-white">
        <Link to="/AdminMaincategory" className="text-white">AdminMaincategory</Link>
      </li>
    </ol>
  </div>

  {/*<!-- Single Page Header End --> */}

  <div className="container my-3">
    <div className="row">
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="col-md-9">
        <h5 className="bg-primary text-center p-2 fw-bold">
          Maincategory{" "}
          <Link to="/AdminAddMaincategory" className="ms-1">
          <i className="fas fa-plus fw-bold"></i>
          </Link>
        </h5>

        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <tbody>
              <tr className="text-center">
                <th className="text-blacks">Id</th>
                <th className="text-blacks">Name</th>
                <th className="text-blacks">Edit</th>
                <th className="text-blacks">Delete</th>
              </tr>
              {data.map((item, index) => {
              return (
              <tr key={index} className="text-center">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <Link to={"/AdminUpdateMaincategory/" + item.id} className="text-primary">
                  <i className="fa fa-edit"></i>
                  </Link>
                </td>
                <td>
                  <button onClick={()=> deleteItem(item.id)}
                    className="btn text-primary"
                    >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
              );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</>
);
}