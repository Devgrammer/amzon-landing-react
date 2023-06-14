import React from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/slices/productSlice";
import ProductCard from "../productCard/productCard";

const DealsCarousel = () => {
  const products = useSelector(selectProducts);

 
  const todaysDeals = products.filter((product) => product.price <= 25);

  return (
    <div className="deals-carousel w-auto my-8">
      <h2 className="deals-carousel__title font-semibold text-2xl h-20 bg-yellow-400 flex items-center px-4">
        Today's Deals - Items under $25
      </h2>
      <div className="deals-carousel__cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
        {todaysDeals.map((product) => (
          <ProductCard key={product.id} product={product} deal={true} />
        ))}
      </div>
    </div>
  );
};

export default DealsCarousel;
