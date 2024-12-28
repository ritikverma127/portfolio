"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-red-50 px-4 py-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-white rounded-xl p-6">
          <a href="/" className="text-xl font-semibold">
            Mr. Developer
          </a>

          <nav className="flex items-center gap-8">
            <a
              href="/"
              className="text-sm hover:text-gray-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-sm hover:text-gray-600 transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-sm hover:text-gray-600 transition-colors"
            >
              Services
            </a>
            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-md"
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-red-50 px-4 py-4 sm:hidden">
        {/* Header Bar - Always visible */}
        <div className="relative z-50 max-w-7xl mx-auto flex items-center justify-between bg-white rounded-xl p-6">
          <a href="/" className="text-xl font-semibold">
            Mr. Developer
          </a>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-50"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="fixed inset-0 bg-white z-40 flex justify-center items-center bg-red-50 fixed">
            <div className="flex flex-col gap-6 items-center">
              <a
                href="/"
                className="text-2xl font-bold hover:text-gray-600 transition-colors px-4 py-2"
              >
                Home
              </a>
              <a
                href="#"
                className="text-2xl font-bold hover:text-gray-600 transition-colors px-4 py-2"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-2xl font-bold hover:text-gray-600 transition-colors px-4 py-2"
              >
                Services
              </a>
              <Button
                asChild
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-md w-full text-2xl font-bold"
              >
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;