import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsAsync,
  selectProducts,
} from "./redux/slices/productSlice";
import Header from "./components/header/header";
import ProductCard from "./components/productCard/productCard";
import Pagination from "./components/pagination/pagination";
import DealsCarousel from "./components/dealCarousel/dealCaroysel";
import Footer from "./components/footer/footer";
import { Link } from "react-router-dom";
import FilterSidebar from "./components/filterSidebar/filterSidebar";

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const productsPerPage = 12;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || product.category === selectedCategory) &&
      (minPrice === "" || product.price >= parseInt(minPrice)) &&
      (maxPrice === "" || product.price <= parseInt(maxPrice))
  );

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePriceRangeChange = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setMinPrice("");
    setMaxPrice("");
    setCurrentPage(1);
  };

  return (
    <div>
      <Header
        setSearchResults={setSearchResults}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="container mx-auto mt-8 px-4">
        <div className="sidebar-container">
          <FilterSidebar
            handleFilterChange={handleFilterChange}
            handlePriceRangeChange={handlePriceRangeChange}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            resetFilters={resetFilters}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentProducts.length !== 0 &&
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}

          {currentProducts.length === 0 && (
            <div className="empty text-3xl font-bold text-gray-300">
              No products in this sections
            </div>
          )}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          onPageChange={handlePageChange}
        />

        <DealsCarousel />
        <div className="sign-in-dialog text-center  flex justify-center my-6 ">
          <div className="inner-container flex flex-col gap-y-2">
            <p className="text-sm">See personalized recommendations</p>
            <button className="w-72 h-8 place-items-center justify-center flex font-semibold text-black bg-amazon_yellow rounded-md">
              Sign in
            </button>
            <p className="text-sm">
              New customer? <Link className="text-blue-400">Start here.</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
