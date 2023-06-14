import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold">Get to Know Us</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Press Releases
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Amazon Cares
                </a>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold">Make Money with Us</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Sell on Amazon
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Sell Under Amazon Accelerator
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Amazon Global Selling
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Become an Affiliate
                </a>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold">Amazon Payment Products</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Amazon Business Card
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Shop with Points
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Reload Your Balance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Amazon Currency Converter
                </a>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold">Let Us Help You</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Amazon and COVID-19
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Your Account
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Returns Centre
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  100% Purchase Protection
                </a>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>
        </div>
        <hr className="mt-8 border-t border-gray-300" />
        <div className="mt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
