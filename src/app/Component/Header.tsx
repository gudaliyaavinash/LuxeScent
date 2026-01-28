"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function Header() {

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [showModel, setShowModel] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleModel = (id: string) => {
    if (id === "Open") {
      setShowModel(true);
    } else {
      setShowModel(false);
    }
  }

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>

      <div className="mx-auto px-4 h-16 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <button onClick={() => toggleModel("Open")} className="block md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-[25px] h-[25px] text-[#00BCD4]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="logo_text">
            <h1>LuxeScent</h1>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="flex items-center gap-8">
            {["Home", "Shop", "About", "Contact"].map((item, index) => (
              <Link href={"#"} key={index} className="nav_link">{item}</Link>
            ))}
          </div>
        </div>

        <button className="button">Login</button>

      </div>

      <AnimatePresence>
        {showModel && <motion.div
          variants={{
            closed: { x: -300 },
            open: { x: 0 },
          }}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ duration: 0.5 }}
          className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg z-[9999]"
        >

          <div className="border-b border-gray-200 p-[20px] flex items-center justify-between">
            <h1 className="font-bold text-[20px]">Menu</h1>
            <button onClick={() => setShowModel(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="px-5">
            {["Home", "Shop", "About", "Contact"].map((item, index) => {
              return <div key={index} className="py-2 flex items-center justify-between">
                <Link href={"#"}>{item}</Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            })}
          </div>

        </motion.div>}
      </AnimatePresence>

      {showModel && <div onClick={() => toggleModel("Close")} className="overly"></div>}

    </header>
  );
}
