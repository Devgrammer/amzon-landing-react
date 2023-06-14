import React from "react";
import { useSelector } from "react-redux";

const CartModal = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.cart);
  const productItems = useSelector((state) => state.products.data);

  const findProductById = (cart, products) => {
    const productMap = products?.reduce((map, product) => {
      map[product.id] = product;
      return map;
    }, {});

    const cartWithProducts = cart.map((cartItem) => {
      const product = productMap[cartItem.id];
      return {
        ...cartItem,
        product: product || null,
      };
    });

    return cartWithProducts;
  };

  let cartProducts = findProductById(cartItems, productItems) || [];

 

  return (
    <div
      className={`fixed right-4 top-14 z-50 flex items-center justify-center transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white rounded-md shadow-md p-4">
        <h3 className="text-lg font-semibold mb-4">Cart</h3>
        {cartItems?.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {cartProducts.map((item) => (
              <div key={item.product.id} className="flex w-72 items-center">
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <h4 className="text-gray-800 font-semibold">
                    {item.product.title}
                  </h4>
                  <p className="text-gray-500">${item.product.price}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
        <button
          className="bg-yellow-400 text-white px-4 py-2 mt-4 w-full"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
