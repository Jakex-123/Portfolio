/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import Theme from "./Theme";
import Image from "next/image";
import { useTheme } from "@/Context/ThemeProvider";

// List of navbar elements
const navElements = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { mode } = useTheme();

  // Smooth scroll function
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
    if (link.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(link);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="animate-fade-down flex justify-between items-center h-24">
      <Image
        className="shadow-custom-shadow"
        src={mode === "dark" ? "/logo.png" : "/light-logo.png"}
        width={50}
        height={50}
        priority={true}
        alt="logo"
      />
      {/* Desktop navigation */}
      <ul className="justify-evenly w-[400px] hidden md:flex group">
        {navElements.map((item: any) => (
          <li
            key={item.name}
            className="font-body relative p-2 group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-100"
          >
            {/* For in-page links, use smooth scroll */}
            <Link
              href={item.link}
              className="navlink"
              onClick={(e) => handleSmoothScroll(e, item.link)}
            >
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-3 flex-row-reverse items-center">
        <button aria-label="navigation-drawer"
          className={`w-12 h-12 rounded-full flex items-center justify-center bg-lightSecondaryText dark:bg-stone-800 m-0 p-0 md:hidden z-20 relative ${
            open ? "text-white" : ""
          }`}
          onClick={() => setOpen(!open)}
        >
          <div className={`w-6 h-4 m-auto relative `}>
            <span className={`menubar ${open ? "opacity-0" : ""}`}></span>
            <span className={`menubar ${open ? "opened" : ""} `}></span>
            <span className={`menubar ${open ? "opened" : ""}`}></span>
            <span className={`menubar ${open ? "opacity-0" : ""}`}></span>
          </div>
        </button>
        <Theme />
      </div>

      {/* Mobile navigation */}
      {open && (
        <div className="w-full h-screen bg-lightInactiveTabBg dark:bg-stone-800 text-white fixed top-0 left-0 z-10 flex flex-col justify-center items-center transition-opacity duration-1000 ease-in-out opacity-1">
          <ul className="flex flex-col space-y-6">
            {navElements.map((item) => (
              <li key={item.name} className="p-2 font-body font-semibold text-lightSecondaryText dark:text-white">
                {/* Smooth scroll for mobile links */}
                <Link
                  href={item.link}
                  onClick={(e) => {
                    handleSmoothScroll(e, item.link);
                    setOpen(false); // Close the menu after clicking
                  }}
                >
                  <span>
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
