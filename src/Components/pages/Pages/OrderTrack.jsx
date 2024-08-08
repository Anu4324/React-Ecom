import React from 'react'
import { Link } from 'react-router-dom'
import TestimonialBootom from './TestimonialBootom'
export default function OrderTrack() {
return (
<>
    {/*
    <!-- Modal Search Start --> */}
    <div className="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
            <div className="modal-content rounded-0">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        Search by keyword
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body d-flex align-items-center">
                    <div className="input-group w-75 mx-auto d-flex">
                        <input type="search" className="form-control p-3" placeholder="keywords"
                            aria-describedby="search-icon-1" />
                        <span id="search-icon-1" className="input-group-text p-3">
                            <i className="fa fa-search"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*
    <!-- Modal Search End --> */}
    {/*
    <!-- Single Page Header start --> */}
    <br />
    <br />
    <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6 mt-5">Order Tracking</h1>
        <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
                <Link to="/Home">Home</Link>
            </li>
            <li className="breadcrumb-item">
            <Link to="/Shop/All/All/All">Shop</Link>
            </li>
            <li className="breadcrumb-item active text-white">
                <Link to="/OrderTrack" className="text-white">Order Track</Link>
            </li>
        </ol>
    </div>
    {/*
    <!-- Single Page Header End --> */}

    {/*
    <!--================Tracking Box Area =================--> */}

    <section className="tracking_box_area mt-5">
        <div className="container">
            <div className="tracking_box_inner">
                <p>To track your order please enter your Order ID in the box below and press the "Track" button. This
                    was given
                    to you on your receipt and in the confirmation email you should have received.</p>
                <form className="row tracking_form" action="/" method="post" novalidate="novalidate">
                    <div className="col-md-12 form-group mb-3">
                        <input type="text" className="form-control" id="order" name="order" placeholder="Order ID" />
                    </div>
                    <div className="col-md-12 form-group mb-3">
                        <input type="email" className="form-control" id="email" name="email"
                            placeholder="Billing Email Address" />
                    </div>
                    <div className="col-md-12 form-group">
                        <button type="submit" value="submit" className="btn submit_btn">Track Order</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    {/*
    <!--================End Tracking Box Area =================--> */}


    <TestimonialBootom/>
</>
)
}