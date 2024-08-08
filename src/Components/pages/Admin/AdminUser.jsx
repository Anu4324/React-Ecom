import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
export default function AdminUser() {
  return (
    <>
      {/*
  <!-- Single Page Hea der start --> */}
      <br />
      <br />
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6 mt-5">Admin User</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>

          <li className="breadcrumb-item">
        <Link to="/Shop/All/All/All">Shop</Link>
      </li>
      <li className="breadcrumb-item active text-white">
        <Link to="/AdminUser" className="text-white">Admin User</Link>
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
            <h5 className="bg-primary text-center p-2 fw-bold">Admin-User</h5>
            <div className="row">
              <div className="col-md-5">
              <img src="/img/team1-2.jpg" alt="image" className="w-75 ms-5 img-fluid" />
              </div>
              <div className="col-md-7">
                <table className="table table-bordered table-hover">
            <tbody>
           
                  <tr>
                    <th>User Name</th>
                    <td>User@232</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>anuragksingh109@gmail.com</td>
                  </tr>
                  <tr>
                    <th>Password</th>
                    <td>User@12345</td>
                  </tr>
                  <tr>
                    <td colspan="2" className="text-center py-4">
                      <Link to="/UpdateProfile" className="btn btn-primary w-100">
                        Update Profile
                      </Link>
                    </td>
                  </tr>
            </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
