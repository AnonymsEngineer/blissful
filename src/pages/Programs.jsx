import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import BackToTop from '../components/common/BackToTop';
import Section from '../components/common/Section';
import { WhiteButton } from '../components/common/Button';
import ImageCarousel from '../components/common/ImageCarousel';
import YouTubePreview from '../components/common/YouTubePreview';
import Footer from '../components/landing/Footer';
import ImageFrame from '../components/common/ImageFrame';
import ApplicationForm from '../components/application/ApplicationForm';
import { getThemeColors } from '../config/theme';
import { Loader2 } from 'lucide-react';

const Programs = () => {
    const navigate = useNavigate();
    const themeColors = getThemeColors();
    const [showApplicationForm, setShowApplicationForm] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', lookingFor: '' });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleApplyClick = () => {
        setShowApplicationForm(true);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setShowSuccessPopup(true);
        setFormData({ name: '', phone: '', email: '', lookingFor: '' });
    };

    const closeSuccessPopup = () => {
        setShowSuccessPopup(false);
        setShowLoader(true);
        setTimeout(() => {
            setShowLoader(false);
            setShowApplicationForm(false);
        }, 1000);
    };

    const handleBackClick = () => {
        setShowApplicationForm(false);
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

            {/* Section 1: About Your Mentor */}
            <Section className="py-20">
                <div className="rounded-3xl shadow-sm border border-[var(--theme-border)]/5 overflow-hidden" style={{ backgroundColor: 'var(--theme-card-background)' }}>
                    <div className="p-8 md:p-12 text-center">
                        <h2 className="text-4xl font-bold" style={{ color: 'var(--theme-primary)' }}>Workshop & Group Session</h2>
                    </div>

                    <div className="grid md:grid-cols-4 items-stretch">
                        <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center">
                            <div className="space-y-4 opacity-80 leading-relaxed text-lg">
                                <p style={{ textAlign: 'justify' }}>Through customised workshops and group sessions, we create real, meaningful impact at a larger scale.</p>
                                <p style={{ textAlign: 'justify' }}>Each session combines practical tools with the motivation needed to <span style={{ backgroundColor: 'rgba(128, 0, 0, 0.25)', color: 'black', padding: '2px 4px', borderRadius: '5px' }}>improve focus, productivity, time management, clear communication, well-being, and more.</span> Every workshop is interactive, engaging, and tailored to your group's needs.</p>
                            </div>
                        </div>
                        <div className="md:col-span-2 p-8">
                            <ImageFrame
                                src="vsw5.jpg"
                                alt="Workshop Session"
                                className="w-full max-h-90"
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 2: Brand Banner */}
            <div className="w-full py-16 px-6" style={{ backgroundColor: 'var(--theme-primary)' }}>
                <div className="max-w-4xl mx-auto text-center text-white">
                    <p className="mb-10 text-white/90 text-lg leading-relaxed font-medium">
                        <span className="block text-3xl font-bold">People We Work With</span>
                    </p>
                    <ul className="text-left max-w-md space-y-3 mb-10 text-white/90 text-lg" style={{ marginLeft: 'calc(50% - 150px)', marginRight: 'auto' }}>
                        <li className="flex items-center">
                            <span className="mr-3">➜</span>
                            <span>Teachers and educator</span>
                        </li>
                        <li className="flex items-center">
                            <span className="mr-3">➜</span>
                            <span>Healthcare professionals</span>
                        </li>
                        <li className="flex items-center">
                            <span className="mr-3">➜</span>
                            <span>Corporate and workplace teams</span>
                        </li>
                        <li className="flex items-center">
                            <span className="mr-3">➜</span>
                            <span>Wellness programmes and events</span>
                        </li>
                        <li className="flex items-center">
                            <span className="mr-3">➜</span>
                            <span>Community and social group</span>
                        </li>
                        <li className="flex items-center">
                            <span className="mr-3">➜</span>
                            <span>Creators and entrepreneurs</span>
                        </li>
                    </ul>
                    <WhiteButton onClick={handleApplyClick}>Let's Collaborate</WhiteButton>
                </div>
            </div>

            {/* Section 3: A Glimpse into Our Workshop */}
            <Section className="pt-20 pb-10">
                <div className="rounded-3xl shadow-sm border border-[var(--theme-border)]/5 overflow-hidden" style={{ backgroundColor: 'var(--theme-card-background)' }}>
                    <div className="p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold" style={{ color: 'var(--theme-primary)' }}>Stress Management and Self-Care Workshop</h2>
                        <p className="opacity-75 text-sm uppercase tracking-[0.2em] font-bold mt-2">
                            - at Vidyashram Public School
                        </p>
                    </div>

                    <div className="p-4 md:p-8">
                        <div className="space-y-4 opacity-80 leading-relaxed text-lg max-w-4xl mx-auto">
                            <p style={{ textAlign: 'justify' }}>This stress management workshop was conducted for teachers, focusing on practical techniques to handle daily stress, maintain emotional balance, and enhance overall well-being through interactive activities and guided sessions. Participants learned simple strategies to stay calm, positive, and productive in both personal and professional life.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 4: Image Carousel */}
            <Section className="py-10">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tight mb-2" style={{ color: 'var(--theme-primary)' }}>A Glimpse into our Workshop</h2>
                </div>
                <ImageCarousel />
            </Section>

            {/* Section 4: YouTube Preview */}
            <Section className="pt-10 pb-20">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tight mb-2" style={{ color: 'var(--theme-primary)' }}>Workshop Aftermovie</h2>
                </div>
                <YouTubePreview />
            </Section>

            <Footer />

            {showApplicationForm && (
                <div className="fixed inset-0 z-50">
                    <ApplicationForm
                        formData={formData}
                        setFormData={setFormData}
                        onFormSubmit={handleFormSubmit}
                        showSuccessPopup={showSuccessPopup}
                        closeSuccessPopup={closeSuccessPopup}
                        onBackClick={handleBackClick}
                    />
                    {showLoader && (
                        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white/90 backdrop-blur-sm">
                            <div className="flex flex-col items-center space-y-4">
                                <Loader2 className="w-12 h-12 animate-spin" style={{ color: 'var(--theme-primary)' }} />
                                <p className="text-lg font-medium" style={{ color: 'var(--theme-text)' }}>Returning to Website...</p>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Programs;
