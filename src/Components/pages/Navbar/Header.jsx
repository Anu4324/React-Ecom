import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear(); // Clear all stored data in localStorage
    navigate("/login"); // Redirect to the login page
  };

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const shopNowLinks = document.querySelectorAll(".shop-now-link");
    shopNowLinks.forEach((link) => {
      link.addEventListener("click", handleScrollToTop);
    });

    const cartLinks = document.querySelectorAll(".cart-now-link");
    cartLinks.forEach((link) => {
      link.addEventListener("click", handleScrollToTop);
    });
    const topLinks = document.querySelectorAll(".top-now-link");
    topLinks.forEach((link) => {
      link.addEventListener("click", handleScrollToTop);
    });

    const footerLinks = document.querySelectorAll(".footer-item .btn-link");
    footerLinks.forEach((link) => {
      link.addEventListener("click", handleScrollToTop);
    });

    return () => {
      shopNowLinks.forEach((link) => {
        link.removeEventListener("click", handleScrollToTop);
      });
      cartLinks.forEach((link) => {
        link.removeEventListener("click", handleScrollToTop);
      });
      footerLinks.forEach((link) => {
        link.removeEventListener("click", handleScrollToTop);
      });
      topLinks.forEach((link) => {
        link.removeEventListener("click", handleScrollToTop);
      });
    };
  }, []);

  const role = localStorage.getItem("role");
  const destinationPath = role === "Buyer" ? "/" : "/AdminHome";

  return (
    <>
      {/*
  <!-- Navbar start --> */}
      <div className="container-fluid fixed-top">
        <div
          className="container-fluid d-none d-sm-none d-md-block"
          style={{ background: "#f6f6f6" }}
        >
          <div className="top_menu">
            <div className="container">
              <div className="row g-0">
                <div className="col-lg-8">
                  <div className="float-left d-inline-flex align-items-center w-100">
                    <small
                      className="fables-third-text-color "
                      style={{ width: "27%" }}
                    >
                      <i className="fa fa-map-marker-alt me-2 text-secondary "></i>{" "}
                      <Link
                        to="https://maps.google.com/?ll=latitude,longitude"
                        target="_brack"
                        className="top-color"
                      >
                        B-504,New Ashok Nagar
                      </Link>
                    </small>
                    <small
                      className="ms-2 fables-third-text-color"
                      style={{ width: "30%", color: "gray" }}
                    >
                      <i className="fa fa-envelope-open me-1 text-secondary"></i>{" "}
                      <Link
                        to="mailto:anuragksingh109@gmail.com"
                        target="_brack"
                        className="top-color"
                      >
                        anurag.net109@gmail.com
                      </Link>
                    </small>

                    <div
                      className="marquee-container ms-1"
                      style={{ width: "70%" }}
                    >
                      <span
                        className="marquee-content text-secondary  "
                        behavior="scroll"
                        direction="right"
                        scrollamount="200"
                      >
                        <small>
                          {" "}
                          <i className="fa fa-phone me-1 text-secondary"></i>{" "}
                          Note: We help you to Grow your Business
                        </small>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="float-right">
                    <ul className="right_side">
                      <li>
                        <Link to="/Shop">gift card</Link>
                      </li>
                      <li>
                        <Link to="/OrderTrack"> track order</Link>
                      </li>
                      <li>
                        <Link to="/Contact"> Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Navbar end --> */}

        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <Link to="/" className="navbar-brand">
              <span className="fw-bold nav-link ">
                <i className="color-blue">BEST</i>Deals
              </span>
              {/* <img src="/img/logo2.png" alt="/" className="w-50" style={{ marginTop: "-2rem" }} /> */}
            </Link>
            <button
              className="navbar-toggler py-2 px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary"></span>
            </button>
            <div
              className="collapse navbar-collapse bg-white"
              id="navbarCollapse"
            >
              <div className="navbar-nav mx-auto fw-bold">
                <Link to="/" className="nav-item nav-link top-now-link">
                  Home
                </Link>

                <Link
                  to="/Shop/All/All/All"
                  className="nav-item nav-link shop-now-link"
                >
                  Shop
                </Link>

                <div className="nav-item dropdown">
                  <Link
                    to="/Page"
                    className="nav-link dropdown-toggle top-now-link"
                    data-bs-toggle="dropdown"
                  >
                    Page
                  </Link>
                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <Link to="/Blog" className="dropdown-item top-now-link">
                      Blog
                    </Link>
                    <Link
                      to="/SingleProduct/2"
                      className="dropdown-item top-now-link"
                    >
                      Product Details
                    </Link>
                    <Link
                      to="/OrderTrack"
                      className="dropdown-item top-now-link"
                    >
                      Order Tracking
                    </Link>
                  </div>
                </div>

                <Link to="/Contact" className="nav-item nav-link top-now-link">
                  Contact
                </Link>
              </div>
              <div className="d-flex">
                <div className="nav-item dropdown">
                  <Link
                    to={destinationPath}
                    className="nav-link dropdown-toggle top-now-link"
                  >
                    {role === "Buyer" ? "" : ""}
                    {localStorage.getItem("name")} (
                    {localStorage.getItem("role")})
                  </Link>

                  {/*
              <Link to={localStorage.getItem("role")==="Buyer" ? "/Profile" : "/AdminHome" }
                className="nav-link dropdown-toggle top-now-link" data-bs-toggle="dropdown">
              {localStorage.getItem("name")} ({localStorage.getItem("role")})
              </Link> */}

                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    {localStorage.getItem("role") === "Buyer" ? (
                      <Link
                        to="/Profile"
                        className="dropdown-item top-now-link"
                      >
                        Profile
                      </Link>
                    ) : (
                      <Link
                        to="/Profile"
                        className="dropdown-item top-now-link"
                      >
                        Profile
                      </Link>
                    )}

                    {localStorage.getItem("role") == "Buyer" ? (
                      <>
                        <Link to="/Cart" className="dropdown-item top-now-link">
                          Cart
                        </Link>
                        <Link
                          to="/Chackout"
                          className="dropdown-item top-now-link"
                        >
                          Chackout
                        </Link>
                      </>
                    ) : (
                      ""
                    )}

                    <button
                      className="btn btn-link ps-3 fw-normal shadow-none  top-now-link"
                      onClick={logout}
                      style={{ fontSize: "14px" }}
                    >
                      {" "}
                      Logout
                    </button>
                  </div>
                </div>
                <Link
                  to="/Cart"
                  className="position-relative me-4 my-auto top-now-link"
                >
                  <i className="fa fa-shopping-bag fs-4"></i>
                  <span
                    className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                    style={{
                      top: "-5px",
                      left: "15px",
                      height: "20px",
                      minWidth: "20px",
                    }}
                  >
                    3
                  </span>
                </Link>
                <button
                  className="btn-search btn border fs-4 border-secondary btn-sm-square rounded-circle bg-white me-4"
                  id="searchButton"
                >
                  <i className="fas fa-search text-primary fs-6"></i>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/*
  <!-- Navbar End --> */}
    </>
  );
}