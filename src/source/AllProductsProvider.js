import React, { useContext } from "react";
import AllProductsContext from "./all-products-context";
import Items from "../Store/Items";
import ProductDetailPage from "../UI/ProductDetailPage";

const allProductsProvider = () => {
  const ctx = useContext(AllProductsContext);

  return (
    <AllProductsContext.Provider>
      <Items />
      <ProductDetailPage />
    </AllProductsContext.Provider>
  );
};

export default allProductsProvider;
