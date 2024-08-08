import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactOwlCarousel from "react-owl-carousel";
import { getProduct } from "../../Store/ActionCreators/ProdctActionCreators";
import { useDispatch, useSelector } from "react-redux";

export default function Slider() {
    const [products, setProducts] = useState([]); 
    const dispatch = useDispatch();
    const allProductStateData = useSelector((state) => state.allProductStateData);

    useEffect(() => {
        getAPIData();
    }, []); // Removed allProductStateData.length from the dependency array

    function getAPIData() {
        dispatch(getProduct());
    }

    useEffect(() => {
        // Check if allProductStateData is defined and not empty before setting products
        if (allProductStateData && allProductStateData.length) {
            setProducts(allProductStateData.slice(1).reverse().slice(0, 6));
        }
    }, [allProductStateData]); // Now using allProductStateData directly as the dependency

    return (
        <>
            {/*
            <!-- Testimonial Start --> */}
            <div className="container-fluid testimonial py-3">
                <div className="container py-5">
                    <div className="testimonial-header text-center">
                        <h4 className="text-primary">NEW</h4>
                        <h1 className="display-5 mb-5 text-center">Our Slider Product!</h1>
                    </div>
                    <ReactOwlCarousel className="owl-theme" loop margin={10} items={4} autoplay={true} autoplayTimeout={2000} nav>
                        {products.map((item, index) => (
                            <div key={index} className="border border-primary rounded position-relative vesitable-item">
                                <div className="vesitable-img">
                                    <img src={`img/vegetable-item-${item.id}.jpg`} className="img-fluid w-100 rounded-top" alt="" /> 
                                </div>
                                <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: "10px", right: "10px" }}>
                                    Vegetable
                                </div>
                                <div className="p-4 rounded-bottom">
                                    <h4>{item.name}</h4>
                                    <p>{item.description}</p>
                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                        <p className="text-dark fs-5 fw-bold mb-0">${item.price} / kg</p>
                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary">
                                            <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ReactOwlCarousel>
                </div>
            </div>
            {/*
            <!-- Testimonial End --> */}
        </>
    );
}
