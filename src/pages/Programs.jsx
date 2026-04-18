import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import BackToTop from '../components/common/BackToTop';
import Section from '../components/common/Section';
import { WhiteButton } from '../components/common/Button';
import ImageCarousel from '../components/common/ImageCarousel';
import YouTubePreview from '../components/common/YouTubePreview';
import Footer from '../components/landing/Footer';
import { getThemeColors } from '../config/theme';

const Programs = () => {
    const navigate = useNavigate();
    const themeColors = getThemeColors();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleApplyClick = () => {
        navigate('/');
    };

    return (
        <div
            className="min-h-screen selection:text-white"
            style={{
                fontFamily: "'Inter', sans-serif",
                backgroundColor: themeColors.background,
                color: themeColors.text,
                '--theme-background': themeColors.background,
                '--theme-text': themeColors.text,
                '--theme-primary': themeColors.primary,
                '--theme-secondary': themeColors.secondary,
                '--theme-card-background': themeColors.cardBackground,
                '--theme-border': themeColors.border,
            }}
        >
            <style>
                {`
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
              
              ::selection {
                background-color: ${themeColors.primary};
              }

              html {
                scroll-behavior: smooth;
              }
            `}
            </style>
            <Navbar />
            <BackToTop />

            {/* Section 1: About Your Mentor (without images) */}
            <Section className="py-20">
                <div className="rounded-3xl shadow-sm border border-[var(--theme-border)]/5 overflow-hidden" style={{ backgroundColor: 'var(--theme-card-background)' }}>
                    <div className="p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold" style={{ color: 'var(--theme-primary)' }}>About Your Mentor</h2>
                        <p className="opacity-75 text-m uppercase tracking-[0.2em] font-bold mt-2">Simran Makwana (Me!)</p>
                    </div>

                    <div className="p-8 md:p-12">
                        <h3 className="text-xl font-bold mb-4 text-center">My Journey to Mastery</h3>
                        <div className="space-y-4 opacity-80 leading-relaxed text-lg max-w-4xl mx-auto">
                            <p style={{ textAlign: 'justify' }}>On the outside, my life looked "Perfect". At 23 I had it all — an engineering degree, a project manager job and I was ticking every box of what success was supposed to look like. But from inside...</p>
                            <p style={{ textAlign: 'justify' }}>I felt lost, disconnected and constantly questioning myself. This pressure started affecting everything — my health, my relations & most importantly how I saw myself. One day, I reached my breaking point, and nothing is the same after that.</p>
                            <p style={{ textAlign: 'justify' }}>I took charge of my situation & found the courage to fix things. In the process of healing, I discovered powerful tools & practices that helped me build myself from within. What I learned changed everything: When our mind, body & soul are in balance, most problems begin to dissolve.</p>
                            <p className="font-semibold text-[#2b2b2b]" style={{ textAlign: 'justify' }}>Now, my mission is to help other people step into their fullest potential. I don't offer quick fixes. Instead, to fight those inner battles I help you build an Arsenal with strategies and breakthroughs that I have lived, tested and mastered myself.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 2: Brand Banner */}
            <div className="w-full py-16 px-6" style={{ backgroundColor: 'var(--theme-primary)' }}>
                <div className="max-w-4xl mx-auto text-center text-white">
                    <p className="mb-10 text-white/90 text-lg leading-relaxed font-medium">
                        This is <span className="text-xl font-bold">WHY</span> we created the <span className="text-xl font-bold">MASTER PROGRAM</span> <br />- to help you finally break free from stress.
                    </p>
                    <WhiteButton onClick={handleApplyClick}>Join Now</WhiteButton>
                </div>
            </div>

            {/* Section 3: Image Carousel */}
            <Section className="py-20">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tight mb-2" style={{ color: 'var(--theme-text)' }}>Program Highlights</h2>
                </div>
                <ImageCarousel />
            </Section>

            {/* Section 4: YouTube Preview */}
            <Section className="py-20">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tight mb-2" style={{ color: 'var(--theme-text)' }}>Watch My Story</h2>
                </div>
                <YouTubePreview />
            </Section>

            <Footer />
        </div>
    );
};

export default Programs;
