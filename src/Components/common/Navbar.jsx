import React, { useState } from 'react';
import { NAV_LINKS } from '../../data/homeData';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenu3Fill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const NAV_LINK_CLASSES = "text-[#040486] dark:text-zinc-300 hover:border-zinc-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-md font-medium";
const DROPDOWN_ITEM_CLASSES = "block w-[220px] max-md:w-[200px] px-4 py-3 md:pt-5 text-md text-[#040486] dark:text-zinc-300 hover:bg-zinc-800 hover:text-white dark:hover:bg-zinc-800 hover:border-zinc-300";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-white dark:bg-zinc-1000 shadow-lg sticky top-0 z-[999999]">

      {/* Desktop Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-auto">
          <div className="flex justify-between items-center w-full">
            <Link to="/" className="grid items-center py-2 uppercase">
              <img className="w-[60px]" src="/logo.png" alt="Logo" />
              <img className="w-[28%] aspect-video" src="/iso.png" alt="Logo" />
            </Link>
            
            <div className="hidden sm:ml-6 md:flex sm:space-x-8">
              {NAV_LINKS.map((link, index) => (
                <NavItem
                  key={index}
                  link={link}
                  isMenuOpen={hoveredMenu === index}
                  setHoveredMenu={() => setHoveredMenu(index)}
                  clearHoveredMenu={() => setHoveredMenu(null)}
                />
              ))}
            </div>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="bg-zinc-50 dark:bg-zinc-900 inline-flex items-center justify-center p-2 rounded-md text-zinc-400 dark:text-zinc-300 hover:text-zinc-500 dark:hover:text-white hover:bg-zinc-100 ">
              <RiMenu3Fill className={`text-[30px] text-zinc-800 ${isMobileMenuOpen ? "hidden" : ""}`} />
              <IoClose className={`text-[30px] text-zinc-800 ${isMobileMenuOpen ? "" : "hidden"}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden"
          >
            <div className="pt-2 pb-3 space-y-1">
              {NAV_LINKS.map((link, index) => (
                <MobileNavItem key={index} link={link} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

const NavItem = ({ link, isMenuOpen, setHoveredMenu, clearHoveredMenu }) => {
  if (link.subMenu.length > 0) {
    return (
      <div
        className="relative"
        onMouseEnter={setHoveredMenu}
        onMouseLeave={clearHoveredMenu}
      >
        <button className={NAV_LINK_CLASSES + " flex items-center"}>
          {link.label}
          <MdKeyboardArrowDown className="ml-2 h-5 w-5 inline" />
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="absolute z-10 mt-0 min-w-48 bg-white dark:bg-zinc-700 rounded-md"
            >
              {link.subMenu.map((subLink, index) => (
                <Link key={index} to={subLink.href} className={DROPDOWN_ITEM_CLASSES}>{subLink.label}</Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return <Link to={link.href} className={NAV_LINK_CLASSES}>{link.label}</Link>;
};

const MobileNavItem = ({ link }) => {
  const [isMobileProductsMenuOpen, setIsMobileProductsMenuOpen] = useState(false);

  if (link.subMenu.length > 0) {
    return (
      <div className="sticky bg-transparent top-0 left-0">
        <button onClick={() => setIsMobileProductsMenuOpen(!isMobileProductsMenuOpen)} className="w-full text-left flex justify-between pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-[#040486] dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300">
          {link.label}
          <MdKeyboardArrowDown className="ml-2 h-5 w-5 inline" />
        </button>
        <AnimatePresence>
          {isMobileProductsMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-2 space-y-1 bg-zinc-100"
            >
              {link.subMenu.map((subLink, index) => (
                <Link key={index} to={subLink.href} className="block pl-10 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-[#040486] dark:text-zinc-300 hover:bg-zinc-800 hover:text-white dark:hover:bg-zinc-800 hover:border-zinc-300">{subLink.label}</Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return <Link to={link.href} className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-[#040486] dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300">{link.label}</Link>;
};

export default Navbar;