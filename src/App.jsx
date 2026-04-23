import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

// Import components
import ApplicationForm from './components/application/ApplicationForm';
import Navbar from './components/common/Navbar';
import BackToTop from './components/common/BackToTop';
import Landing from './pages/Landing';
import Programs from './pages/Programs';
import { getThemeColors } from './config/theme';

export default function App() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', lookingFor: '' });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.tailwindcss.com";
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable drag-and-drop
    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    };

    // Disable keyboard shortcuts for saving/printing
    const handleKeyDown = (e) => {
      // Ctrl+S, Ctrl+P, Ctrl+U (view source), F12 (dev tools)
      if ((e.ctrlKey && (e.key === 's' || e.key === 'p' || e.key === 'u')) || e.key === 'F12') {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleApplyClick = () => {
    setShowApplicationForm(true);
    window.scrollTo(0, 0);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowSuccessPopup(true);
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      setFormData({ name: '', phone: '', email: '', lookingFor: '' });
      setShowApplicationForm(false);
      window.scrollTo(0, 0);
    }, 1000);
  };

  if (showApplicationForm) {
    const themeColors = getThemeColors();
    return (
      <div
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
        <ApplicationForm
          formData={formData}
          setFormData={setFormData}
          onFormSubmit={handleFormSubmit}
          showSuccessPopup={showSuccessPopup}
          closeSuccessPopup={closeSuccessPopup}
          onBackClick={() => setShowApplicationForm(false)}
        />
        {showLoader && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white/90 backdrop-blur-sm">
            <div className="flex flex-col items-center space-y-4">
              <Loader2 className="w-12 h-12 animate-spin" style={{ color: 'var(--theme-primary)' }} />
              <p className="text-lg font-medium" style={{ color: 'var(--theme-text)' }}>Returning to website...</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  const themeColors = getThemeColors();

  return (
    <HashRouter>
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

        <Routes>
          <Route path="/" element={<Landing onApplyClick={handleApplyClick} />} />
          <Route path="/about" element={<Landing onApplyClick={handleApplyClick} />} />
          <Route path="/testimonials" element={<Landing onApplyClick={handleApplyClick} />} />
          <Route path="/faq" element={<Landing onApplyClick={handleApplyClick} />} />
          <Route path="/programs" element={<Programs />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
