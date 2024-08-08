import {  faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function FooterEnd() {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

  return (
    <>
      {/* <!-- Copyright Start --> */}
      <div className="container-fluid copyright bg-dark py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <span className="text-light">
                <Link to="/">
                  <i className="fas fa-copyright text-light me-2"></i>Your Site
                  Name
                </Link>
                , All right reserved.
              </span>
            </div>
            <div className="col-md-6 my-auto text-center text-md-end text-white">
              Designed By{" "}
              <Link className="border-bottom" href="/">
                Anurag Kumar
              </Link>{" "}
              Distributed By{" "}
              <Link className="border-bottom" href="https://themewagon.com">
                ThemeWagon
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Copyright End --> */}

      {/* <!-- Back to Top --> */}
      <Link to="/" className="btn btn-primary border-3 border-primary rounded-circle back-to-top" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowDown} style={{ transform: "rotate(180deg)" }} />
    </Link>
    </>
  );
}
