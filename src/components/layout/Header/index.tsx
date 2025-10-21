import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left - Logo & Brand */}
        <a className="flex items-center space-x-2" href="https://seller.zestfindz.com/" target="_blank" >
          <img
            src="https://seller.zestfindz.com/favicon.png"
            alt="ZestFindz Logo"
            className="h-8 w-8"
          />
          <span className="text-xl font-semibold text-gray-800">ZestFindz</span>
        </a>

        {/* Right - Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Profit Calculator
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Growth Plans
          </a>

          <Link to="/seller/login" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition cursor-pointer">
            Login
          </Link>
          <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition cursor-pointer">
            Sell With Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-3">
          <a href="#" className="block text-gray-700 font-medium">
            Profit Calculator
          </a>
          <a href="#" className="block text-gray-700 font-medium">
            Growth Plans
          </a>
          <a href="#" className="block text-center w-full px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition cursor-pointer">
            Login
          </a>
          <a href="#" className="block text-center w-full px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition cursor-pointer">
            Sell With Us
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
