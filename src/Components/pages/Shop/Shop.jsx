import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../Store/ActionCreators/ProdctActionCreators";
import { getMaincategory } from "../../../Store/ActionCreators/MaincategoryActionCreators";
import { getSubcategory } from "../../../Store/ActionCreators/SubcategoryActionCreators";
import { getBrand } from "../../../Store/ActionCreators/BrandActionCreators";

export default function Shop() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10000);
  const [mc, setMc] = useState("All");
  const [sc, setSc] = useState("All");
  const [br, setBr] = useState("All");
  const [sortingOption, setSortingOption] = useState("1");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const allProductStateData = useSelector((state) => state.ProductStateData);
  const allMaincategoryStateData = useSelector((state) => state.MaincategoryStateData);
  const allSubcategoryStateData = useSelector((state) => state.SubcategoryStateData);
  const allBrandStateData = useSelector((state) => state.BrandStateData);

  // Memoized filtering function
  const memoizedFilterProducts = useMemo(() => {
    return (mc, sc, br) => {
      let filteredData = allProductStateData;

      if (mc !== "All") {
        filteredData = filteredData.filter((item) => item.maincategory === mc);
      }
      if (sc !== "All") {
        filteredData = filteredData.filter((item) => item.subcategory === sc);
      }
      if (br !== "All") {
        filteredData = filteredData.filter((item) => item.brand === br);
      }

      return filteredData.slice(0, 12).reverse();
    };
  }, [allProductStateData]);

  const filterProducts = (mc, sc, br) => {
    let filteredData = memoizedFilterProducts(mc, sc, br);

    if (min !== undefined && max !== undefined) {
      filteredData = filteredData.filter(
        (item) => item.finalprice >= min && item.finalprice <= max
      );
    }

    setProducts(filteredData);
  };

  const selectCategory = (mc, sc, br) => {
    setMc(mc);
    setSc(sc);
    setBr(br);

    navigate(`/Shop/${mc}/${sc}/${br}`);
  };

  useEffect(() => {
    // Update state from URL parameters
    setMc(params.mc || "All");
    setSc(params.sc || "All");
    setBr(params.br || "All");
  }, [params]);

  useEffect(() => {
    // Fetch data and filter products when URL params or other states change
    dispatch(getProduct());
    dispatch(getMaincategory());
    dispatch(getSubcategory());
    dispatch(getBrand());
  }, [dispatch]);

  useEffect(() => {
    filterProducts(mc, sc, br);
  }, [mc, sc, br, min, max, allProductStateData]);

  useEffect(() => {
    let sortedProducts = [...products];
    switch (sortingOption) {
      case "1":
        sortedProducts.sort((x, y) => y.id - x.id);
        break;
      case "2":
        sortedProducts.sort((x, y) => x.finalprice - y.finalprice);
        break;
      case "3":
        sortedProducts.sort((x, y) => y.finalprice - x.finalprice);
        break;
      default:
        break;
    }
    setProducts(sortedProducts);
  }, [sortingOption, products]);

  const getInputSearch = (e) => setSearch(e.target.value);

  const postSearch = (e) => {
    e.preventDefault();

    const filteredProducts = allProductStateData
      .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
      .slice(0, 12)
      .reverse();

    setProducts(filteredProducts);

    if (filteredProducts.length === 0) {
      alert(`No items found for '${search}'`);
    }
  };

  const sortFilter = (e) => {
    setSortingOption(e.target.value);
  };

  const getPriceInput = (e) => {
    const { name, value } = e.target;
    if (name === "min") setMin(parseInt(value, 10));
    else if (name === "max") setMax(parseInt(value, 10));
  };

  const postPriceFilter = (e) => {
    e.preventDefault();
    filterProducts(mc, sc, br);

    if (products.length === 0) {
      alert(`No items found in the price range ₹${min} - ₹${max}`);
    }
  };

  return (
    <>
      <br />
      <div className="container-fluid page-header py-5 mt-4">
        <h1 className="text-center text-white display-6 mt-5">Shop</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active text-white">
            <Link to={`/Shop/${mc}/${sc}/${br}`} className="text-white">Shop</Link>
          </li>
        </ol>
      </div>

      <section className="cat_product_area py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="left_sidebar_area">
                <div className="left_widgets p_filter_widgets">
                  <div className="l_w_title p-0">
                    <h3><span className="ms-4">Maincategory</span></h3>
                  </div>
                  <div className="widgets_inner">
                    <ul className="list">
                      <li><Link to={`/Shop/All/${sc}/${br}`} onClick={() => selectCategory("All", sc, br)}>ALL</Link></li>
                      {allMaincategoryStateData.map((item) => (
                        <li key={item.name}>
                          <Link to={`/Shop/${item.name}/${sc}/${br}`} onClick={() => selectCategory(item.name, sc, br)}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="left_widgets p_filter_widgets">
                  <div className="l_w_title p-0">
                    <h3><span className="ms-4">Subcategory</span></h3>
                  </div>
                  <div className="widgets_inner">
                    <ul className="list">
                      <li><Link to={`/Shop/${mc}/All/${br}`} onClick={() => selectCategory(mc, "All", br)}>ALL</Link></li>
                      {allSubcategoryStateData.map((item) => (
                        <li key={item.name}>
                          <Link to={`/Shop/${mc}/${item.name}/${br}`} onClick={() => selectCategory(mc, item.name, br)}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="left_widgets p_filter_widgets">
                  <div className="l_w_title p-0">
                    <h3><span className="ms-4">Brand</span></h3>
                  </div>
                  <div className="widgets_inner">
                    <ul className="list">
                      <li><Link to={`/Shop/${mc}/${sc}/All`} onClick={() => selectCategory(mc, sc, "All")}>ALL</Link></li>
                      {allBrandStateData.map((item) => (
                        <li key={item.name}>
                          <Link to={`/Shop/${mc}/${sc}/${item.name}`} onClick={() => selectCategory(mc, sc, item.name)}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="left_widgets p_filter_widgets">
                  <div className="l_w_title p-0">
                    <h3><span className="ms-4">Price Filter</span></h3>
                  </div>
                  <div className="widgets_inner">
                    <form onSubmit={postPriceFilter}>
                      <div className="btn-group">
                        <label className="text-center mt-1">Min:</label>
                        <input
                          type="number"
                          onChange={getPriceInput}
                          name="min"
                          className="form-control ms-3 float-end-1"
                          value={min}
                        />
                      </div>
                      <div className="btn-group mt-2">
                        <label className="text-center mt-1">Max:</label>
                        <input
                          type="number"
                          onChange={getPriceInput}
                          name="max"
                          className="form-control ms-2 float-end-1"
                          value={max}
                        />
                      </div>
                      <div className="mt-3">
                        <button
                          type="submit"
                          className="btn border border-secondary cart-now-link rounded-pill text-primary w-100"
                        >
                          Apply Filter
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="product_top_bar">
                <div className="left_dorp">
                  <select className="show">
                    <option value="1">Show 12</option>
                    <option value="2">Show 14</option>
                    <option value="4">Show 16</option>
                  </select>
                  <select className="show from-control" name="sortFilter" onChange={sortFilter}>
                    <option value="1">Price Filter</option>
                    <option value="2">Low to High</option>
                    <option value="3">High to Low</option>
                  </select>
                  <div className="btn-group ms-3 float-end">
                    <div className="d-flex float-end">
                      <input
                        type="search"
                        name="search"
                        value={search}
                        onChange={getInputSearch}
                        className="form-control bordered-00"
                        placeholder="Enter Product Name, Brand, Color etc to Search..."
                      />
                      <button className="btn btn-success bordered-00 w-25" onClick={postSearch}>
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="latest_product_inner">
                <div className="row">
                  {products.map((item, index) => (
                    <div key={index} className="col-lg-4 col-sm-6">
                      <div className="single-product">
                        <div className="product-img">
                          <Link to={`/SingleProduct/${item.id}`}>
                            <img
                              className="img-fluid w-100"
                              src={`/img/product/${item.pic3}`}
                              style={{ height: "200px" }}
                              alt={item.name}
                            />
                          </Link>
                          <div className="p_icon">
                            <Link to="/">
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </Link>
                            <Link to="/">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </Link>
                            <Link to="/Shop/All/All/All" className="cart-now-link">
                              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="product-btm">
                          <Link to={`/SingleProduct/${item.id}`} className="d-block text-center">
                            <h4>{item.name}</h4>
                          </Link>
                          <div className="mt-2 text-center">
                            <del className="mr-4 text-danger fw-bold">
                              ₹{item.baseprice}
                            </del>
                            <span className="text-center text-success fs-6" style={{ fontSize: "15px" }}>
                              {item.discount}% Off
                            </span>
                            <span className="ms-2">₹{item.finalprice}</span>
                            <Link className="btn border border-secondary cart-now-link rounded-pill text-primary w-100" to="/Cart">
                              <i className="fa fa-shopping-bag me-2 text-primary"></i>
                              Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
