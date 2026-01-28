"use client";

import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { slides } from "../StaticData";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1) % slides.length);
    };

    return (
        <div className="w-full h-full overflow-hidden relative">

            <div className="banner-section">
                {/* Previous Button */}
                <div className="hidden md:block absolute top-1/2 -left-[55px] -translate-y-1/2 z-[666]">
                    <button onClick={prevSlide} className="banner-button right-0">Previous</button>
                </div>

                <div className="h-full flex items-center p-3">
                    {/* Images Content */}
                    <div className="w-1/2 h-full hidden md:block">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                variants={{
                                    closed: { opacity: 0, x: -300 },
                                    open: { opacity: 1, x: 0 },
                                }}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                transition={{ duration: 0.6 }}
                                className="w-full h-full overflow-hidden relative"
                            >
                                <Image
                                    src={slides[currentSlide].image}
                                    fill
                                    alt="Banner Image"
                                    className="object-cover z-10"
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-1/2 h-full flex flex-col justify-center md:ml-20 mt-10">
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={`title-${currentSlide}`}
                                variants={{
                                    closed: { opacity: 0, y: 30 },
                                    open: { opacity: 1, y: 0 },
                                }}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-[50px] text-center md:text-start leading-[1.1] font-heading tracking-[3px] text-[#00454e]"
                            >
                                {slides[currentSlide].title}
                            </motion.h1>
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            <motion.p
                                key={`desc-${currentSlide}`}
                                variants={{
                                    closed: { opacity: 0, y: 30 },
                                    open: { opacity: 1, y: 0 },
                                }}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="max-w-[500px] max-[426px]:mx-auto text-center md:text-start mt-5 text-[19px] text-[#00373e]"
                            >
                                {slides[currentSlide].desc}
                            </motion.p>
                        </AnimatePresence>

                    </div>

                </div>

                {/* Next Button */}
                <div className="hidden md:block absolute top-1/2 -right-[55px] -translate-y-1/2">
                    <button onClick={nextSlide} className="banner-button right-0">Next</button>
                </div>
            </div>

            <div className="block md:hidden py-6">
                <div className="flex items-center justify-center gap-4">
                    <button onClick={prevSlide} className="border-[2px] p-2">
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
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>

                    </button>
                    <button onClick={nextSlide} className="border-[2px] p-2">
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
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Banner