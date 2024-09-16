"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@/Context/ThemeProvider";
import Image from "next/image";
const themes=[
    {value:'light',
    label:'Light',
    icon:'/icons/sun.svg'}
    ,
    {value:'dark',
    label:'Dark',
    icon:'/icons/moon.svg'}
    ,
    {value:'system',
    label:'System',
    icon:'/icons/computer.svg'}
]
const Theme = () => {
  const { mode, setMode } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<any>(null);

  // Toggle dropdown visibility
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative bg-lightSecondaryText dark:bg-stone-800 rounded-full h-12 w-12" ref={dropdownRef}>
      <div
        onClick={handleToggle}
        className="cursor-pointer p-2 rounded-full focus:outline-none focus:bg-lightPrimaryBg dark:focus:bg-primaryBg w-full h-full flex items-center justify-center"
      >
        {mode === "light" ? (
          <Image
            src="/icons/sun.svg"
            width={20}
            height={20}
            alt="sun"
            className="active-theme"
          />
        ) : (
          <Image
            src="/icons/moon.svg"
            width={20}
            height={20}
            alt="moon"
            className="active-theme"
          />
        )}
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-[120px] rounded-md bg-lightPrimaryBg border border-gray-200 dark:bg-primaryBg dark:border-dark-400 shadow-lg py-2 z-50">
          {themes.map((item) => {
            return (
              <div
                key={item.value}
                className={`flex items-center gap-4 px-2.5 py-2 cursor-pointer hover:bg-lightSecondaryBg dark:hover:bg-secondaryBg ${
                  mode === item.value ? "bg-lightSecondaryBg dark:bg-secondaryBg" : ""
                }`}
                onClick={() => {
                  setMode(item.value);
                  setIsOpen(false);
                  if (item.value !== "system") {
                    localStorage.theme = item.value;
                  } else {
                    localStorage.removeItem("theme");
                  }
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.value}
                  width={16}
                  height={16}
                  className={`${mode === item.value ? "active-theme" : ""}`}
                />
                <p
                  className={`body-semibold text-light-500 ${
                    mode === item.value
                      ? "text-lightTertiaryBg dark:text-accentPurple"
                      : "text-lightSecondaryText dark:text-secondaryText"
                  }`}
                >
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Theme;
