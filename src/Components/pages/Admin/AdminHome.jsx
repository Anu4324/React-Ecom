import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";export default function AdminHome() {
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
  const navigate = useNavigate();

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
        (itme) => itme.username === localStorage.getItem("username")
      );

      if (item) {
        setUser(item);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error:", error);
      // Optionally, you can redirect to an error page or show a message
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {/*
  <!-- Single Page Header start --> */}
      <br />
      <br />
 
      <div className="container-fluid page-header py-5">
      <h1 className="text-center text-white display-6 mt-5">Admin Section</h1>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/Shop/All/All/All">Shop</Link>
        </li>
        <li className="breadcrumb-item active text-white">
          <Link to="/AdminHome" className="text-white">Admin</Link>
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
          <h5 className="bg-primary text-center p-2 fw-bold">Admin-Home</h5>
          <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
                  <img src={user.pic ? `/img/${user.pic}` : `/img/imgs.png`} imagealt="Profile" className="img-fluid w-75 h-100"/>
                </div>
            <div className="col-md-7">
              <table className="table table-bordered table-hover">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>{user.name}</td>
                  </tr>
                  <tr>
                    <th>User Name</th>
                    <td>{user.username}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{user.email}</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>{user.number}</td>
                  </tr>
                  <tr>
                    <td colspan="2" className="text-center p-3 mb-3">
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
