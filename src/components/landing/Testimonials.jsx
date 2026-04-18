import React from 'react';
import { X, Heart, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import Section from '../common/Section';

const Testimonials = ({ selectedTestimonial, setSelectedTestimonial }) => {
    const infiniteTestimonials = [...testimonials, ...testimonials];

    return (
        <>
            <Section id="testimonials" className="py-20 overflow-hidden max-w-none px-0">
                <style>{`
                    .testimonial-card {
                        transition: all 0.3s ease;
                    }
                    .testimonial-card:hover {
                        border-color: var(--theme-primary) !important;
                        box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.1);
                    }
                `}</style>
                <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--theme-primary)' }}>Impact Stories</h2>

                <div className="relative overflow-hidden w-full">
                    <div className={`animate-scroll ${selectedTestimonial ? 'paused' : ''}`}>
                        {infiniteTestimonials.map((item, i) => (
                            <div
                                key={i}
                                className="w-[300px] md:w-[400px] shrink-0 px-4 cursor-pointer group"
                                onClick={() => setSelectedTestimonial(item)}
                            >
                                <div className="testimonial-card rounded-3xl border border-[var(--theme-border)]/5 shadow-sm h-full flex flex-col group-hover:shadow-lg transition-all duration-300 relative overflow-hidden" style={{ backgroundColor: 'var(--theme-card-background)', '--hover-border': 'var(--theme-primary)' }}>
                                    <div className="p-8 flex-grow pb-4">
                                        <p className="italic leading-relaxed line-clamp-6" style={{ color: 'var(--theme-text)', opacity: 0.8 }}>
                                            "{item.text}"
                                        </p>
                                    </div>

                                    <div className="absolute inset-x-0 bottom-[88px] h-20 bg-gradient-to-t to-transparent flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto" style={{ from: 'var(--theme-card-background)' }}>
                                        <span className="text-[10px] font-black tracking-widest uppercase bg-white px-4 py-2 rounded-full shadow-sm" style={{ color: 'var(--theme-primary)' }}>
                                            Read More
                                        </span>
                                    </div>

                                    <div className="px-8 pb-8">
                                        <div className="flex items-center space-x-4 border-t border-[var(--theme-border)]/5 pt-6">
                                            <img
                                                src={item.img.startsWith('http') ? item.img : `/blissful/${item.img}`}
                                                alt={item.name}
                                                className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                                            />
                                            <div>
                                                <h4 className="font-bold" style={{ color: 'var(--theme-text)' }}>{item.name}</h4>
                                                <p className="text-xs opacity-50 font-medium uppercase tracking-wider">{item.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Testimonial Modal */}
            {selectedTestimonial && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="testimonial-modal-title"
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 modal-overlay"
                    style={{ backgroundColor: 'var(--theme-text)99', backdropFilter: 'blur(12px)' }}
                    onClick={() => setSelectedTestimonial(null)}
                >
                    <div
                        className="w-full max-w-4xl max-h-[85vh] rounded-[2rem] md:rounded-[3rem] shadow-2xl relative flex flex-col overflow-hidden modal-content"
                        style={{ backgroundColor: 'var(--theme-card-background)' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedTestimonial(null)}
                            aria-label="Close testimonial"
                            className="absolute top-4 right-4 md:top-6 md:right-6 p-4 rounded-full bg-white shadow-md transition-all z-20 hover:scale-110 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--theme-primary)]"
                            style={{ color: 'var(--theme-text)', opacity: 0.4 }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--theme-primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--theme-text)'}
                        >
                            <X className="w-5 h-5 md:w-6 md:h-6" />
                        </button>

                        <div className="p-6 md:p-10 md:pb-6">
                            <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between gap-4 md:gap-6">
                                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                                    <div className="relative">
                                        <img
                                            src={selectedTestimonial.img.startsWith('http') ? selectedTestimonial.img : `/blissful/${selectedTestimonial.img}`}
                                            alt={selectedTestimonial.name}
                                            className="w-16 h-16 md:w-24 md:h-24 rounded-2xl border-4 border-white shadow-sm object-cover"
                                        />
                                        <div className="absolute -bottom-1 -right-1 text-white p-1.5 rounded-lg shadow-lg" style={{ backgroundColor: 'var(--theme-primary)' }}>
                                            <Heart className="w-3 h-3 fill-white" />
                                        </div>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h3 id="testimonial-modal-title" className="text-2xl md:text-4xl font-bold tracking-tight mb-1" style={{ color: 'var(--theme-text)' }}>{selectedTestimonial.name}</h3>
                                        <div className="flex items-center justify-center md:justify-start space-x-2">
                                            <span className="h-px w-3 hidden md:block" style={{ backgroundColor: 'var(--theme-primary)', opacity: 0.3 }}></span>
                                            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--theme-primary)' }}>{selectedTestimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden lg:block opacity-[0.03] transform">
                                    <Quote className="w-24 h-24" />
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow overflow-y-auto px-6 md:px-16 pb-12 pt-4 testimonial-scroll">
                            <div className="relative">
                                <div className="absolute -top-10 -left-6 text-[10rem] font-serif select-none pointer-events-none leading-none" style={{ color: 'var(--theme-primary)', opacity: 0.05 }}>
                                    "
                                </div>
                                <div className="space-y-6 italic leading-relaxed text-base md:text-lg whitespace-pre-wrap relative z-10 font-medium" style={{ color: 'var(--theme-text)', opacity: 0.8 }}>
                                    {selectedTestimonial.text}
                                </div>
                            </div>
                            <div className="h-8 w-full"></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Testimonials;
