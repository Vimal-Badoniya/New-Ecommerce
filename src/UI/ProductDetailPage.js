import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import AllProductsContext from "../source/all-products-context";
import "./ProductDetailPage.css"

const ProductDetailPage = () => {
  const myParam = useParams();
  const ctx = useContext(AllProductsContext);
  const index = ctx.allProducts.findIndex((prod) => {
    return prod.id === myParam.id;
  });
  const item = ctx.allProducts[index];
  //console.log(item);
  return (
    <div className="detail">
      <h1>{item.title}</h1>
      <img src={item.imageUrl} alt="product" />
      <h2>₹{item.price}</h2>
      <div>
        <h4>Reviews</h4>
        <p>This is a review about product</p>
      </div>
      <Link className="button1" to=".." relative="path">Back</Link>

      {/* <p>{myParam.id}</p> */}
    </div>
  );
};

export default ProductDetailPage;
