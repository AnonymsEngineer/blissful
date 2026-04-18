import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageFrame from './ImageFrame';

const ImageCarousel = () => {
    const images = [
        'vsw1.jpg',
        'vsw2.jpg',
        'vsw3.jpg',
        'vsw4.jpg',
        'vsw5.jpg',
        'vsw6.jpg',
        'vsw7.jpg',
        'vsw8.jpg',
        'vsw9.jpg',
        'vsw10.jpg',
        'vsw11.jpg',
        'vsw12.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl shadow-lg">
                <ImageFrame
                    src={images[currentIndex]}
                    alt={`Program highlight ${currentIndex + 1}`}
                    className="w-full h-64 md:h-[500px]"
                    objectPosition="center"
                />

                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                >
                    <ChevronLeft className="w-6 h-6" style={{ color: 'var(--theme-primary)' }} />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                >
                    <ChevronRight className="w-6 h-6" style={{ color: 'var(--theme-primary)' }} />
                </button>
            </div>

            <div className="flex justify-center items-center mt-6 gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'w-8 bg-[var(--theme-primary)] shadow-md'
                            : 'w-1.5 bg-gray-300 hover:bg-gray-400 hover:w-3'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
