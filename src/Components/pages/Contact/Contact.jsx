import React from "react";
import { Link } from "react-router-dom";
export default function Contact() {
return (
<>
  {/*
  <!-- Single Page Header start --> */}
  <br />
  <br />

  <div className="container-fluid page-header py-5">
    <h1 className="text-center text-white display-6 mt-5">Contact</h1>
    <ol className="breadcrumb justify-content-center mb-0">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <li className="breadcrumb-item">
        <Link to="/Shop">Shop</Link>
      </li>
      <li className="breadcrumb-item active text-white">
        <Link to="/Contact" className="text-white">Contact</Link>
      </li>
    </ol>
  </div>
  {/*
  <!-- Single Page Header End --> */}

  {/*
  <!-- Contact Start --> */}
  <div className="container-fluid contact py-5">
    <div className="container py-5">
      <div className="p-5 bg-light rounded">
        <div className="row g-4">
          <div className="col-12">
            <div className="text-center mx-auto" style={{ maxWidth: "700px" }}>
              <h1 className="text-primary">Get in touch</h1>
              <p className="mb-4">
                The contact form is currently inactive. Get a functional and
                working contact form with Ajax & PHP in a few minutes. Just
                copy and paste the files, add a little code and you're done.{" "}
                <Link href="https://htmlcodex.com/contact-form">
                Download Now
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="h-100 rounded">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe title="Map Location" height="400px" id="gmap_canvas" className="w-100 rounded"
                    src="https://maps.google.com/maps?q=B-803%20New%20Ashok%20Nage%20New%20Delhi%20110096&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-7">
            <form action="" className="">
              <input type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Your Name" />
              <input type="email" className="w-100 form-control border-0 py-3 mb-4" placeholder="Enter Your Email" />
              <textarea className="w-100 form-control border-0 mb-4" rows="5" cols="10"
                placeholder="Your Message"></textarea>
              <button className="w-100 btn form-control border-secondary py-3 bg-white text-primary " type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="col-lg-5">
            <div className="d-flex p-4 rounded mb-4 bg-white">
              <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
              <div>
                <h4>Address</h4>
                <Link
                    to="https://maps.google.com/?ll=latitude,longitude" target="_brack"
                    className="d-inline-flex"
                  >
                    <p className="ms-2 orange">B-803 New Ashok Nager Delhi</p>
                  </Link>
              </div>
            </div>
            <div className="d-flex p-4 rounded mb-4 bg-white">
              <i className="fas fa-envelope fa-2x text-primary me-4"></i>
              <div>
                <h4>Mail Us</h4>
                <Link
                    to="mailto:anuragksingh109@gmail.com" target="_brack"
                    className="d-inline-flex"
                  >
                    <p className="ms-2">anuragksingh109@gmail.com</p>
                  </Link>
              </div>
            </div>
            <div className="d-flex p-4 rounded bg-white">
              <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
              <div>
                <h4>Telephone</h4>
                <Link to="tel:9170973916" target="_brack" className="d-inline-flex">
                    <p className="ms-2 orange">9154858745,9170973916</p>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*
  <!-- Contact End --> */}
</>
);
}