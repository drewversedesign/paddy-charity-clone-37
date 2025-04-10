
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-charity-green text-2xl font-bold">Paddy</span>
                <span className="text-charity-dark text-2xl font-bold">Demo</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-charity-dark hover:text-charity-green font-medium">Home</Link>
              <Link to="/about" className="text-charity-dark hover:text-charity-green font-medium">About</Link>
              <Link to="/causes" className="text-charity-dark hover:text-charity-green font-medium">Causes</Link>
              <Link to="/events" className="text-charity-dark hover:text-charity-green font-medium">Events</Link>
              <Link to="/blog" className="text-charity-dark hover:text-charity-green font-medium">Blog</Link>
              <Link to="/contact" className="text-charity-dark hover:text-charity-green font-medium">Contact</Link>
              <Button className="btn-charity">Donate Now</Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && <div className="md:hidden py-4 pb-6">
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-charity-dark hover:text-charity-green font-medium">Home</Link>
                <Link to="/about" className="text-charity-dark hover:text-charity-green font-medium">About</Link>
                <Link to="/causes" className="text-charity-dark hover:text-charity-green font-medium">Causes</Link>
                <Link to="/events" className="text-charity-dark hover:text-charity-green font-medium">Events</Link>
                <Link to="/blog" className="text-charity-dark hover:text-charity-green font-medium">Blog</Link>
                <Link to="/contact" className="text-charity-dark hover:text-charity-green font-medium">Contact</Link>
                <Button className="btn-charity w-full">Donate Now</Button>
              </div>
            </div>}
        </div>
      </nav>
    );
};
export default Navbar;
