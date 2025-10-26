import React from "react";
import type { Product } from "../interface/product.interface";



const Card = (product: Product) => {
  return <div className="w-[300px] p-3 rounded-2xl shadow">
    <img src={product.thumbnail} alt={product.brand} className="w-full"  />
  </div>;
};

export default Card;
