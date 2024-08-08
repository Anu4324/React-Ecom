import { all } from "redux-saga/effects";

import maincategorySaga from "./MaincategorySagas";
import subcategorySaga from "./SubcategorySagas";
import brandSaga from "./BrandSagas";
import productSaga from "./ProductSagas";
import contactSaga from "./ContactSagas";
import newslatterSaga from "./NewslatterSagas";
import checkoutSaga from "./CheckoutSagas";
import cartSaga from "./CartSagas";
import wishlistSaga from "./WishlistSagas";


export default function* RootSaga() {
  yield all([
    maincategorySaga(),
    subcategorySaga(),
    brandSaga(),
    productSaga(),
    productSaga(),
    contactSaga(),
    newslatterSaga(),
    checkoutSaga(),
    cartSaga(),
    wishlistSaga(),
  ]);
}
