import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiShoppingCartLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import {
  fetchProductsAsync,
  selectProducts,
} from "../../redux/slices/productSlice";
import {
  addToCart,
  selectCartItemsCount,
  selectCartTotalItems,
} from "../../redux/slices/cartSlice";
import CartModal from "../cartModal/cartModal";

import { Link } from "react-router-dom";

const Header = ({ searchResults, searchTerm, setSearchTerm }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const totalItems = useSelector(selectCartTotalItems);
  const cartItemsCount = useSelector(selectCartItemsCount);

  const handleAddToCart = () => {
    dispatch(addToCart(products));
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCartModal = () => {
    setIsCartOpen(false);
  };

  const handleSearch = () => {
    const searchResults = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };


  return (
    <header className="bg-amazon_blue  flex flex-col content-between">
      <div className="parent-header p-2 flex items-center ">
        <div className="flex items-center flex-grow">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
            className="w-20 cursor-pointer"
            onClick={() => dispatch(fetchProductsAsync())}
          />
          <div className="flex mx-4 flex-col justify-start items-start  text-white">
            <span className="mini-heading text-xs">Deliver to </span>
            <span className="lead-location-heading flex items-center font-semibold text-lg">
              {" "}
              <span>
                <HiOutlineLocationMarker />
              </span>
              India
            </span>
          </div>
          <div className="flex items-center rounded-md overflow-hidden ml-4 bg-white flex-grow">
            <select className=" border-none bg-gray-200 focus:outline-none">
              <option value="all">All</option>
              <option value="electronics">Electronics</option>
              <option value="books">Books</option>
              <option value="clothing">Clothing</option>
            </select>
            <input
              type="text"
              className="px-2 border-none w-full focus:outline-none"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="bg-amazon_yellow px-4 py-2 text-white font-semibold"
              onClick={handleSearch}
            >
              <AiOutlineSearch color="#111111" size={28} />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <select className="text-white bg-amazon_blue focus:outline-none">
            <option value="en">
              <span role="img" aria-label="USA Flag">
                🇺🇸
              </span>
              EN
            </option>
            <option value="fr">
              <span role="img" aria-label="France Flag">
                🇫🇷
              </span>
              FR
            </option>
            <option value="de">
              <span role="img" aria-label="Germany Flag">
                🇩🇪
              </span>
              DE
            </option>
          </select>
          <div className="text-white hover:underline">Returns</div>
          <div className="text-white hover:underline">Orders</div>
          <button
            className="text-white ml-4 focus:outline-none"
            onClick={handleCartClick}
          >
            <RiShoppingCartLine size={24} />{" "}
            {cartItemsCount > 0 && (
              <div className="absolute bg-yellow-400 text-black rounded-full w-4 h-4 text-center text-xs top-4 right-0">
                {cartItemsCount}
              </div>
            )}
          </button>
          {/* Cart Modal */}
          <CartModal isOpen={isCartOpen} onClose={handleCloseCartModal} />
        </div>
      </div>

      {/* Mini Header Menu */}
      <div className="mini-header bg-amazon_mini_blue py-2 px-4 mt-2 flex justify-around text-sm text-gray-400">
        <Link to="/deals" className="hover:text-amazon_blue">
          Today's Deals
        </Link>
        <Link to="/customer-service" className="hover:text-amazon_blue">
          Customer Service
        </Link>
        <Link to="/gift-cards" className="hover:text-amazon_blue">
          Gift Cards
        </Link>
        <Link to="/registry" className="hover:text-amazon_blue">
          Registry
        </Link>
        {/* Add more menu options as needed */}
      </div>
    </header>
  );
};

export default Header;
