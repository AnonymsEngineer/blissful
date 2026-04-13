import React from 'react';
import { Button } from '../common/Button';
import Section from '../common/Section';

const WhoIsThisFor = ({ onApplyClick, className = '' }) => (
    <Section className={`text-center py-12 ${className}`}>
        <style>{`
            .who-card {
                transition: all 0.3s ease;
            }
            .who-card:hover {
                border-color: var(--theme-primary) !important;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
            .who-card h3 {
                transition: all 0.3s ease;
            }
            .who-card:hover h3 {
                color: var(--theme-primary) !important;
            }
        `}</style>
        <h2 className="text-3xl font-bold mb-12" style={{ color: 'var(--theme-text)' }}>Is this program for you?</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
            {[
                { t: "Working Professionals", d: "People in demanding careers like corporate consultants, educators, healthcare professionals, engineers, and more; who want to perform at their best." },
                { t: "Business Owners", d: "Entrepreneurs and leaders seeking clarity, energy and focus to grow their business." },
                { t: "People Seeking Personal Growth", d: "People committed to self development & holistic wellness looking to gain inner peace & high performance in all areas of life." }
            ].map((item, i) => (
                <div key={i} className="who-card p-6 rounded-2xl shadow-sm border border-[var(--theme-border)]/5" style={{ backgroundColor: 'var(--theme-card-background)' }}>
                    <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--theme-text)' }}>{item.t}</h3>
                    <p className="opacity-60 text-sm" style={{ textAlign: 'justify' }}>{item.d}</p>
                </div>
            ))}
        </div>
        <Button onClick={onApplyClick}>Apply Now</Button>
    </Section>
);

export default WhoIsThisFor;
