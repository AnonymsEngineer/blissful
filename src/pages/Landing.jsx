import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Import components
import Hero from '../components/landing/Hero';
import Hook from '../components/landing/Hook';
import Problem from '../components/landing/Problem';
import Pillars from '../components/landing/Pillars';
import BrandBanner from '../components/landing/BrandBanner';
import SecondaryHero from '../components/landing/SecondaryHero';
import Mastery from '../components/landing/Mastery';
import Graph from '../components/landing/Graph';
import Testimonials from '../components/landing/Testimonials';
import WhoIsThisFor from '../components/landing/WhoIsThisFor';
import About from '../components/landing/About';
import FAQ from '../components/landing/FAQ';
import FinalCTA from '../components/landing/FinalCTA';
import Footer from '../components/landing/Footer';
import Section from '../components/common/Section';

// Import data
import { faqs } from '../data/faqs';
import { testimonials } from '../data/testimonials';
import { getThemeColors } from '../config/theme';

const Landing = ({ onApplyClick }) => {
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    // Handle route-based scrolling
    let targetId = '';

    if (location.pathname === '/about') {
      targetId = 'about';
    } else if (location.pathname === '/testimonials') {
      targetId = 'testimonials';
    } else if (location.pathname === '/faq') {
      targetId = 'faq';
    } else if (location.hash) {
      targetId = location.hash.replace('#', '');
    }

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

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
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Hero onApplyClick={onApplyClick} />
      <Hook className="scroll-animate" />
      <Problem className="scroll-animate" />
      <Pillars className="scroll-animate" />
      <BrandBanner onApplyClick={onApplyClick} />
      <SecondaryHero className="scroll-animate" />
      <Mastery className="scroll-animate" />
      <Graph className="scroll-animate" />
      <WhoIsThisFor onApplyClick={onApplyClick} className="scroll-animate" />
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
      <FinalCTA onApplyClick={onApplyClick} className="scroll-animate" />
      <Footer />
    </>
  );
};

export default Landing;
