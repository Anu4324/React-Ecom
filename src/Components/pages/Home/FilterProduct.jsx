import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../../Store/ActionCreators/ProdctActionCreators';
import { getMaincategory } from '../../../Store/ActionCreators/MaincategoryActionCreators';
import { getSubcategory } from '../../../Store/ActionCreators/SubcategoryActionCreators';
import { getBrand } from '../../../Store/ActionCreators/BrandActionCreators';
export default function FilterProduct() {
const [search, setSearch] = useState('');
const [products, setProducts] = useState([]);
const [mc, setMc] = useState('All');
const [sc, setSc] = useState('All');
const [br, setBr] = useState('All');
const [sortingOption, setSortingOption] = useState('1');
const [activeFilter, setActiveFilter] = useState('All');

const dispatch = useDispatch();
const navigate = useNavigate();
const params = useParams();

const allProductStateData = useSelector((state) => state.ProductStateData);
const allMaincategoryStateData = useSelector((state) => state.MaincategoryStateData);

const filterProducts = useMemo(() => {
return (mc, sc, br) => {
let filteredData = allProductStateData;

if (mc !== 'All') {
filteredData = filteredData.filter((item) => item.maincategory === mc);
}
if (sc !== 'All') {
filteredData = filteredData.filter((item) => item.subcategory === sc);
}
if (br !== 'All') {
filteredData = filteredData.filter((item) => item.brand === br);
}

return filteredData;
};
}, [allProductStateData]);

useEffect(() => {
// Update filter state from URL parameters
setMc(params.mc || 'All');
setSc(params.sc || 'All');
setBr(params.br || 'All');
setActiveFilter(params.mc || 'All');
}, [params]);

useEffect(() => {
// Fetch data
dispatch(getProduct());
dispatch(getMaincategory());
dispatch(getSubcategory());
dispatch(getBrand());
}, [dispatch]);

useEffect(() => {
// Apply filters and update products
let filteredProducts = filterProducts(mc, sc, br);

// Apply sorting
switch (sortingOption) {
case '1':
filteredProducts.sort((x, y) => y.id - x.id);
break;
case '2':
filteredProducts.sort((x, y) => x.finalprice - y.finalprice);
break;
case '3':
filteredProducts.sort((x, y) => y.finalprice - x.finalprice);
break;
default:
break;
}

setProducts(filteredProducts.slice(0, 12));
}, [mc, sc, br, sortingOption, allProductStateData, filterProducts]);

const handleSearch = (e) => {
e.preventDefault();
const searchLower = search.toLowerCase();
const filteredProducts = allProductStateData
.filter((item) => item.name.toLowerCase().includes(searchLower))
.slice(0, 12);
setProducts(filteredProducts);

if (filteredProducts.length === 0) {
alert(`No items found for '${search}'`);
}
};

const handleSortChange = (e) => {
setSortingOption(e.target.value);
};

const handleCategoryChange = (filter) => {
setActiveFilter(filter);
if (filter === 'All') {
setMc('All');
setSc('All');
setBr('All');
navigate('/'); // Navigate to the home page
} else {
setMc(filter);
setSc('All');
setBr('All');
navigate(`/${filter}`); // Update URL to reflect the selected category
}
};

return (
<>

    <div className="container-fluid fruite py-5 border-top">
        <div className="container py-5">
            <div className="tab-class text-center">
                <div className="row g-4">
                    <div className="col-lg-4 text-start">
                        <h1 className="fw-bold">Our Latest Product</h1>
                    </div>
                    <div className="col-lg-8 text-end">
                        <ul className="nav nav-pills d-inline-flex text-center mb-5">
                            {['All', 'Male', 'Female', 'Kids'].map((filter) => (
                            <li key={filter} className="nav-item">
                                <Link className={`d-flex m-2 py-2 bg-light rounded-pill ${activeFilter===filter
                                    ? 'active' : '' }`} data-bs-toggle="pill" onClick={()=>
                                handleCategoryChange(filter)}
                                >
                                <span className={`text-${filter==='Male' ? 'blue' : 'black' }`}
                                    style={{ width: '130px' }}>
                                    {filter === 'All' ? 'All Products' : filter}
                                </span>
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="tab-content">
                    <div className={`tab-pane fade show p-0 active`}>
                        <div className="row g-4">
                            {products.length > 0 ? (
                            products.map((product, index) => (
                            <div key={index} className="col-md-6 col-sm-6 col-lg-4 col-xl-3">
                                <div className="rounded position-relative fruite-item border">
                                    <div className="fruite-img">
                                        <img src={`img/product/${product.pic1}`}
                                            className="img-fluid w-100 rounded-top imghight" alt={product.name} />
                                    </div>
                                    <div className="text-primary fw-bold bg-secondary px-3 py-1 rounded position-absolute"
                                        style={{ top: '10px', left: '20px' }}>
                                        {product.name}
                                    </div>
                                    <div className="p-4 border-top-0 rounded-bottom">
                                        <Link to={`/SingleProduct/${product.id}`} className="text-center">
                                        <h4 className="fw-bold text-gray text-center">{product.name}</h4>
                                        </Link>
                                        <p className="p-0 lorem">
                                            {product.description}
                                        </p>
                                        <div className="text-center">
                                            <del className="mr-4 text-danger fs-6 fw-bold">
                                                &#8377;{product.baseprice}
                                            </del>
                                            <span className="text-center text-success fw-bold mx-2"
                                                style={{fontSize: "14px",marginTop: "5px"}}>{product.discount}% Off
                                            </span>
                                            <span className="fw-bold fs-6">&#8377;{product.finalprice}</span>
                                            <Link to="/Cart"
                                                className="btn border border-secondary cart-now-link w-100 rounded-pill px-2 text-primary mt-1">
                                            <i className="fa fa-shopping-bag me-1 text-primary"></i>{" "}
                                            Add to cart
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))
                            ) : (
                            <p>No products found for this filter.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
);
}