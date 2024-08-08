import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../../Store/ActionCreators/ProdctActionCreators';
import { getMaincategory } from '../../../Store/ActionCreators/MaincategoryActionCreators';
import { getSubcategory } from '../../../Store/ActionCreators/SubcategoryActionCreators';
import { getBrand } from '../../../Store/ActionCreators/BrandActionCreators';
import HeroHeader from './HeroHeader';
import FilterProduct from './FilterProduct';
import Inspired from './Inspired';
import Bestsaler from './Bestsaler';
import OfferBanner from './OfferBanner';
import HelpUs from './HelpUs';
import TestimonialBootom from '../Pages/TestimonialBootom';
import BrandLogo from '../Pages/BrandLogo';

export default function Home() {
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
      <HeroHeader/>
      <FilterProduct/>
      <Inspired/>
      <Bestsaler/>
      <OfferBanner/>
      <HelpUs/>
      <TestimonialBootom/>
      <BrandLogo/>
    </>
  );
}
