import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageFrame from './ImageFrame';

const ImageCarousel = () => {
    const images = [
        'about1.png',
        'about2.png',
        'p1.png',
        'p2.png',
        'p3.png',
        'finalCTA.png',
        'qwew.png'
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
                    className="w-full h-96 md:h-[500px]"
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

            <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            index === currentIndex 
                                ? 'bg-[var(--theme-primary)]' 
                                : 'bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
