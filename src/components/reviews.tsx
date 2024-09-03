"use client"
import React, { useEffect, useRef, useState } from 'react'

const Reviews = () => {
    const reviewsRef = useRef<any>(null);
    const [isScrolling, setIsScrolling] = useState(true);

    useEffect(() => {

        const scrollReviews = () => {
            if (reviewsRef.current && isScrolling) {
                reviewsRef.current.scrollLeft += 1;
                if (
                    reviewsRef.current.scrollLeft >=
                    reviewsRef.current.scrollWidth - reviewsRef.current.clientWidth
                ) {
                    reviewsRef.current.scrollLeft = 0;
                }
            }
        };

        const reviewsInterval = setInterval(scrollReviews, 20);

        return () => {
            clearInterval(reviewsInterval);
        };
    }, [isScrolling]);

    return (<section id="reviews" className="py-20 bg-indigo-900 bg-opacity-50" >
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">What Our Users Say</h2>
        <div
            ref={reviewsRef}
            className="flex overflow-x-hidden"
            onMouseEnter={() => setIsScrolling(false)}
            onMouseLeave={() => setIsScrolling(true)}
        >
            {[
                { name: "Dr. John Doe", role: "Principal, XYZ College", content: "Topathshala has transformed how we manage our campus. It's an indispensable tool for modern education.", avatar: "/placeholder.svg?height=80&width=80" },
                { name: "Prof. Jane Smith", role: "Dean, ABC University", content: "The comprehensive features of Topathshala have streamlined our administrative processes significantly.", avatar: "/placeholder.svg?height=80&width=80" },
                { name: "Mr. Mike Johnson", role: "IT Admin, LMN School", content: "The technical support and regular updates from Topathshala are exceptional. Highly recommended!", avatar: "/placeholder.svg?height=80&width=80" },
                { name: "Ms. Emily Brown", role: "Teacher, PQR Institute", content: "Topathshala has made tracking student progress and communicating with parents so much easier.", avatar: "/placeholder.svg?height=80&width=80" },
                { name: "Dr. John Doe", role: "Principal, XYZ College", content: "Topathshala has transformed how we manage our campus. It's an indispensable tool for modern education.", avatar: "/placeholder.svg?height=80&width=80" },
                { name: "Prof. Jane Smith", role: "Dean, ABC University", content: "The comprehensive features of Topathshala have streamlined our administrative processes significantly.", avatar: "/placeholder.svg?height=80&width=80" },
                { name: "Mr. Mike Johnson", role: "IT Admin, LMN School", content: "The technical support and regular updates from Topathshala are exceptional. Highly recommended!", avatar: "/placeholder.svg?height=80&width=80" },
                { name: "Ms. Emily Brown", role: "Teacher, PQR Institute", content: "Topathshala has made tracking student progress and communicating with parents so much easier.", avatar: "/placeholder.svg?height=80&width=80" },
            ].map((review, index) => (
                <div key={index} className="flex-shrink-0 w-80 p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg mx-4 transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-4">
                        {/* <Image src={review.avatar} alt={review.name} width={40} height={40} className="rounded-full mr-4" /> */}
                        <div>
                            {/* <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-purple-400">{review.role}</div> */}
                        </div>
                    </div>
                    <p className="text-gray-300">{review.content}</p>
                </div>
            ))}
        </div>
    </section >
    )
}

export default Reviews