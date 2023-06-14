import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white rounded-md shadow-md p-4 flex flex-col  h-full">
      <div className="relative flex justify-center h-48">
        <img
          src={product.image}
          alt={product.title}
          className="w-36 h-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
      <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
      <p className="text-gray-500 text-sm overflow-hidden overflow-ellipsis h-16">
        {product.description}
      </p>
      <p className="text-gray-700 mt-auto">${product.price}</p>
      <button
        className="bg-yellow-500 text-black px-4 py-2 mt-4 w-full"
        onClick={handleAddToCart}
      >
        + Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
