import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReactOwlCarousel from "react-owl-carousel";
import { getBrand } from "../../../Store/ActionCreators/BrandActionCreators";

export default function BrandLogo() {
const [brands, setBrands] = useState([]);
const dispatch = useDispatch();
const allBrandStateData = useSelector((state) => state.BrandStateData);
const isLoading = useSelector((state) => state.isLoading);

  
useEffect(() => {
dispatch(getBrand());
}, [dispatch]);

useEffect(() => {
if (allBrandStateData && allBrandStateData.length) {
// Reverse the order of brands and slice to get the latest 8
const latestBrands = allBrandStateData.slice().reverse().slice(0, 8);
setBrands(latestBrands);
}
}, [allBrandStateData]);

// Style for hiding OwlCarousel navigation arrows

return (
<div className="container">
    <div className="row">
    <div className="main_title mb-5 text-center">
              <h2 className='mb-4 fs-4'>
                <span>Our Brand</span>
              </h2>
           
            </div>
        <div className="col-lg-12">
            {/* <ReactOwlCarousel className="owl-theme" margin={5} items={6} autoplay autoPlay={2000}> */}
                <ReactOwlCarousel className="owl-theme" loop margin={5} items={7} autoplay={true} 
                    autoplayTimeout={2000} autoplayHoverPause={true}>
                    {brands.map((item, index) => (
                    <div key={index} className="testimonial-item text-center">
                        <div className="position-relative text-center">
                            <Link to={`/brands/${item.id}`} className="text-center">
                            <div className="align-items-center flex-nowrap text-center">
                                <div className="rounded text-center">
                                    <Link to={`shop/All/All/{item,name}`}
                                        className="text-center text-black fw-bold fs-3"
                                        style={{ fontFamily: "Algerian" }}>
                                    <img src={`/img/logos/${item.pic}`} style={{ height: "70px", width: "100px" }}
                                        alt={item.pic || "Logo Image" } />
                                    </Link>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                    ))}
                </ReactOwlCarousel>
        </div>
    </div>
</div>
);
}