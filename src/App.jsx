import React, { useState, useEffect } from 'react';

// Import components
import ApplicationForm from './components/application/ApplicationForm';
import Navbar from './components/common/Navbar';
import BackToTop from './components/common/BackToTop';
import Hero from './components/landing/Hero';
import Hook from './components/landing/Hook';
import Problem from './components/landing/Problem';
import Pillars from './components/landing/Pillars';
import BrandBanner from './components/landing/BrandBanner';
import SecondaryHero from './components/landing/SecondaryHero';
import Mastery from './components/landing/Mastery';
import Graph from './components/landing/Graph';
import Testimonials from './components/landing/Testimonials';
import WhoIsThisFor from './components/landing/WhoIsThisFor';
import About from './components/landing/About';
import FAQ from './components/landing/FAQ';
import FinalCTA from './components/landing/FinalCTA';
import Footer from './components/landing/Footer';
import Section from './components/common/Section';

// Import data
import { faqs } from './data/faqs';
import { testimonials } from './data/testimonials';
import { getThemeColors } from './config/theme';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.tailwindcss.com";
    document.head.appendChild(script);
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Scroll animation effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [currentPage]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleApplyClick = () => {
    setCurrentPage('apply');
    window.scrollTo(0, 0);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowSuccessPopup(true);
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    setFormData({ name: '', phone: '', email: '' });
    setCurrentPage('landing');
    window.scrollTo(0, 0);
  };

  if (currentPage === 'apply') {
    return (
      <ApplicationForm
        formData={formData}
        setFormData={setFormData}
        onFormSubmit={handleFormSubmit}
        showSuccessPopup={showSuccessPopup}
        closeSuccessPopup={closeSuccessPopup}
        onBackClick={() => setCurrentPage('landing')}
      />
    );
  }

  const themeColors = getThemeColors();

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

          .faq-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
            opacity: 0;
          }
          
          .faq-content.open {
            max-height: 400px;
            opacity: 1;
            padding-bottom: 1.5rem;
          }

          .faq-item {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .line-clamp-6 {
            display: -webkit-box;
            -webkit-line-clamp: 6;
            -webkit-box-orient: vertical;  
            overflow: hidden;
          }

          /* Infinite Scroll Animation */
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50%)); }
          }

          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 40s linear infinite;
          }

          .animate-scroll.paused {
            animation-play-state: paused;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
          
          .modal-overlay {
            animation: fadeIn 0.2s ease-out forwards;
          }

          .modal-content {
            animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideUp {
            from { transform: translateY(20px) scale(0.95); opacity: 0; }
            to { transform: translateY(0) scale(1); opacity: 1; }
          }

          .testimonial-scroll::-webkit-scrollbar {
            width: 4px;
          }
          .testimonial-scroll::-webkit-scrollbar-track {
            background: transparent;
          }
          .testimonial-scroll::-webkit-scrollbar-thumb {
            background: ${themeColors.primary}33;
            border-radius: 10px;
          }

          /* Scroll Animation Classes */
          .scroll-animate {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }

          .scroll-animate.visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>

      <Navbar />
      <BackToTop />

      <Hero onApplyClick={handleApplyClick} />
      <Hook className="scroll-animate" />
      <Problem className="scroll-animate" />
      <Pillars className="scroll-animate" />
      <BrandBanner onApplyClick={handleApplyClick} />
      <SecondaryHero className="scroll-animate" />
      <Mastery className="scroll-animate" />
      <Graph className="scroll-animate" />
      <WhoIsThisFor onApplyClick={handleApplyClick} className="scroll-animate" />
      <About className="scroll-animate" />
      <Testimonials
        testimonials={testimonials}
        selectedTestimonial={selectedTestimonial}
        setSelectedTestimonial={setSelectedTestimonial}
      />
      <FAQ
        faqs={faqs}
        openFaq={openFaq}
        toggleFaq={toggleFaq}
      />
      <FinalCTA onApplyClick={handleApplyClick} className="scroll-animate" />
      <Footer />
    </div>
  );
}
