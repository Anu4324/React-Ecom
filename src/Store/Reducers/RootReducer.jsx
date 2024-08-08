import { combineReducers } from "redux";

import MaincategoryReducer from "./MaincategoryReducer";
import SubcategoryReducer from "./SubcategoryReducer";
import ProductReducer from "./ProductReducer";
import BrandReducer from "./BrandReducer";
import WishlistReducer from "./WishlistReducer";
import CartReducer from "./CartReducer";
import CheckoutReducer from "./CheckoutReducer";
import NewslatterReducer from "./NewslatterReducer";
import ContactReducer from "./ContactReducer";
// import { faList } from "@fortawesome/free-solid-svg-icons";

export default combineReducers({
  MaincategoryStateData: MaincategoryReducer,
  SubcategoryStateData: SubcategoryReducer,
  BrandStateData: BrandReducer,
  ProductStateData: ProductReducer,
  WishlistStateData: WishlistReducer,
  CartStateData: CartReducer,
  CheckoutStateData: CheckoutReducer,
  NewslatterStateData: NewslatterReducer,
  ContactStateData: ContactReducer,
});


// Wishlist
// Cart
// Checkout
// Newslatter
// Contact
//








