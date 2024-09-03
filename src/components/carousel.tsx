"use client"

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Softwarecarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isScrolling, setIsScrolling] = useState(true);
    const carouselRef = useRef<any>(null);

    const softwareImages = [
        {
            src: "https://drive.google.com/file/d/11McaUctzxXtogDzPC15k8MIPY52WQv7m/preview", // Replace with your Google Drive video link
            title: "Online Test Exam Module",
            description: "Conduct objective and subjective tests with grace marks and detailed analytics.",
            type: "video",
        },
        {
            src: "https://drive.google.com/file/d/1Gz_2P6538umeAeQylOJ-ku3Q5bYbrxws/preview", // Replace with your Google Drive video link
            title: "Attendance Module",
            description: "Learn how to take attendance day and subject-wise and generate attendance reports.",
            type: "video",
        },
        {
            src: "https://drive.google.com/file/d/11McaUctzxXtogDzPC15k8MIPY52WQv7m/preview", // Replace with your Google Drive video link
            title: "Fee Module",
            description: "Manage fees with options for monthly, daily, and academic-wise reports.",
            type: "video",
        },
    ];

    useEffect(() => {
        const scrollCarousel = () => {
            if (carouselRef.current && isScrolling) {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % softwareImages.length);
            }
        };

        const carouselInterval = setInterval(scrollCarousel, 2000);

        return () => {
            clearInterval(carouselInterval);
        };
    }, [isScrolling, softwareImages.length]);

    useEffect(() => {
        const iframes = document.querySelectorAll('iframe');
        const handlePlay = () => setIsScrolling(false);

        iframes.forEach((iframe) => {
            iframe.addEventListener('play', handlePlay);
        });

        return () => {
            iframes.forEach((iframe) => {
                iframe.removeEventListener('play', handlePlay);
            });
        };
    }, [currentSlide]);

    return (
        <section className="container overflow-hidden mx-auto px-4 py-20">
            <div
                className="relative"
                ref={carouselRef}
                onMouseEnter={() => setIsScrolling(false)}
                onMouseLeave={() => setIsScrolling(true)}
            >
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {softwareImages.map((item, index) => (
                        <div key={index} className="w-full flex-shrink-0 relative">
                            <div className="absolute top-40 md:top-0 text-center left-0 mx-auto w-full bg-black bg-opacity-50 text-white p-4">
                                <h3 className="text-sm md:text-lg font-semibold">{item.title}</h3>
                                <p className="text-sm">{item.description}</p>
                            </div>
                            {item.type === "image" ? (
                                <Image
                                    src={item.src}
                                    alt={`Software Screenshot ${index + 1}`}
                                    width={800}
                                    height={600}
                                    className="mx-auto rounded-lg shadow-2xl"
                                />
                            ) : (
                                <>
                                    <iframe
                                        src={item.src}
                                        title={`Video ${index + 1}`}
                                        width="800"
                                        height="450"
                                        allow="autoplay"
                                        className="hidden mx-auto rounded-lg shadow-2xl md:block"
                                    />
                                    <div className="relative pt-[56.25%] overflow-hidden md:hidden">
                                        <iframe
                                            src={item.src}
                                            title={`Video ${index + 1}`}
                                            allow="autoplay"
                                            className="absolute top-0 left-0 w-full h-full border-0"
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
                <button
                    onClick={() =>
                        setCurrentSlide(
                            (prevSlide) => (prevSlide - 1 + softwareImages.length) % softwareImages.length
                        )
                    }
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                >
                    <ChevronLeftIcon />
                </button>
                <button
                    onClick={() =>
                        setCurrentSlide((prevSlide) => (prevSlide + 1) % softwareImages.length)
                    }
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                >
                    <ChevronRightIcon />
                </button>
            </div>
        </section>
    );
};


export default Softwarecarousel;