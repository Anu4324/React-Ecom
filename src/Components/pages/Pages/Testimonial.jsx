import React from "react";
import { Link } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ReactOwlCarousel from "react-owl-carousel";
export default function Testimonial() {
  const options = {
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  };
  return (
    <><br /><br />
      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header py-5 ">
        <h1 className="text-center text-white display-6 mt-5">Testimonial</h1>
        <ol className="breadcrumb justify-content-center mb-0 ">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="About">About</Link>
          </li>
          <li className="breadcrumb-item active text-white">Testimonial</li>
        </ol>
      </div>
      {/* <!-- Single Page Header End --> */}

      {/* <!-- Tastimonial Start --> */}
      <div className="container-fluid testimonial py-3">
        <div className="container py-5">
          <div className="testimonial-header text-center">
            <h4 className="text-primary">Our Testimonial</h4>
            <h1 className="display-5 mb-5 text-center">Our Client Saying!</h1>
          </div>
          <ReactOwlCarousel
            className="owl-theme"
            loop
            margin={10}
            items={2}
            autoplay={true}
            autoplayTimeout={2000}
            nav
          >
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i
                  className="fa fa-quote-right fa-2x text-secondary position-absolute"
                  style={{ bottom: "30px", right: "0" }}
                ></i>
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing Ipsum has
                    been the industry's standard dummy text ever since the
                    1500s,
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img
                      src="/img/team1-1.jpg"
                      className="img-fluid rounded"
                      style={{ width: "100px", height: "100px" }}
                      alt="/"
                    />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Client Name</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i
                  className="fa fa-quote-right fa-2x text-secondary position-absolute"
                  style={{ bottom: "30px", right: "0" }}
                ></i>
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing Ipsum has
                    been the industry's standard dummy text ever since the
                    1500s,
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img
                      src="/img/team1-2.jpg"
                      className="img-fluid rounded"
                      style={{ width: "100px", height: "100px" }}
                      alt="/"
                    />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Client Name</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i
                  className="fa fa-quote-right fa-2x text-secondary position-absolute"
                  style={{ bottom: "30px", right: "0" }}
                ></i>
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing Ipsum has
                    been the industry's standard dummy text ever since the
                    1500s,
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img
                      src="/img/team1-3.jpg"
                      className="img-fluid rounded"
                      style={{ width: "100px", height: "100px" }}
                      alt="/"
                    />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Client Name</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ReactOwlCarousel>
        </div>
      </div>
      {/*
  <!-- Tastimonial End --> */}
    </>
  );
}
