"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-red-50 px-4 py-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-white rounded-xl p-6">
          <h1 className="text-2xl font-semibold text-purple-600">
            Mr. Developer ✨
          </h1>

          <nav className="flex items-center gap-8">
            <Link
              href="#home"
              className="text-sm hover:text-gray-600 transition-colors font-bold"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-sm hover:text-gray-600 transition-colors font-bold"
            >
              Services
            </Link>
            <Link
              href="#clients"
              className="text-sm hover:text-gray-600 transition-colors font-bold"
            >
              Clients
            </Link>

            <Link
              href="#projects"
              className="text-sm hover:text-gray-600 transition-colors font-bold"
            >
              Projects
            </Link>

            {/* <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-md"
            >
              <Link href="/contact">Contact Us</Link>
            </Button> */}
          </nav>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0  right-0 z-50 bg-red-50 px-4 py-4 sm:hidden">
        {/* Header Bar - Always visible */}
        <div className="relative z-50 max-w-7xl mx-auto flex items-center justify-between bg-white rounded-xl p-6">
          <h1 className="text-xl font-semibold text-purple-600">
            Mr. Developer✨
          </h1>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-50"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="fixed  inset-0 bg-white z-40 flex justify-center items-center ">
            <div className="flex flex-col gap-6 items-center">
              <Link
                href="#home"
                className="text-2xl font-bold hover:text-gray-600 transition-colors px-4 py-2"
              >
                Home
              </Link>
              <Link
                href="#services"
                className="text-2xl font-bold hover:text-gray-600 transition-colors px-4 py-2"
              >
                Services
              </Link>
              <Link
                href="#clients"
                className="text-2xl font-bold hover:text-gray-600 transition-colors px-4 py-2"
              >
                Clients
              </Link>
              <Link
                href="#projects"
                className="text-2xl font-bold hover:text-gray-600 transition-colors px-4 py-2"
              >
                Projects
              </Link>
              {/* <Button
                asChild
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-md w-full text-2xl font-bold"
              >
                <Link href="/contact">Contact Us</Link>
              </Button> */}
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
