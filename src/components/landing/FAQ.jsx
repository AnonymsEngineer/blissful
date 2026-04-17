import React from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../data/faqs';
import Section from '../common/Section';

const FAQ = ({ openFaq, toggleFaq, className = '' }) => (
    <Section id="faq" className={`py-20 ${className}`}>
        <style>{`
            .faq-item {
                transition: all 0.3s ease;
            }
            .faq-item:not(.faq-open):hover {
                background-color: var(--theme-primary)08;
                border-radius: 0.75rem;
            }
            .faq-item:not(.faq-open):hover .faq-question {
                color: var(--theme-primary) !important;
            }
            .faq-item:not(.faq-open):hover .faq-icon {
                color: var(--theme-primary) !important;
                opacity: 1 !important;
            }
            .faq-question {
                transition: color 0.3s ease;
            }
        `}</style>
        <div className="rounded-3xl p-8 md:p-12 border border-[var(--theme-border)]/5 shadow-sm" style={{ backgroundColor: 'var(--theme-card-background)' }}>
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold tracking-tight mb-2" style={{ color: 'var(--theme-text)' }}>Frequently Asked Questions</h2>
            </div>
            <div className="space-y-2">
                {faqs.map((faq, index) => {
                    const isOpen = openFaq === index;
                    return (
                        <div
                            key={index}
                            className={`faq-item border-b border-[var(--theme-border)]/5 last:border-none transition-all duration-300 ${isOpen
                                ? 'faq-open bg-white shadow-sm rounded-2xl px-6 mb-3'
                                : 'px-4'
                                }`}
                        >
                            <button onClick={() => toggleFaq(index)} className="w-full text-left py-4 flex justify-between items-center group">
                                <span className="faq-question text-lg font-semibold transition-all" style={isOpen ? { color: 'var(--theme-primary)' } : { color: 'var(--theme-text)', opacity: 0.7 }}>
                                    {faq.q}
                                </span>
                                <ChevronDown className={`faq-icon w-4 h-4 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} style={isOpen ? { color: 'var(--theme-primary)' } : { color: 'var(--theme-text)', opacity: 0.3 }} />
                            </button>
                            <div className={`faq-content ${isOpen ? 'open' : ''}`}>
                                <div className="text-lg opacity-70 leading-relaxed pb-4">{faq.a}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </Section>
);

export default FAQ;
