import React from 'react';
import { Heart, Users, Briefcase, Sun } from 'lucide-react';
import Section from '../common/Section';

const Pillars = ({ className = '' }) => (
    <Section className={`py-20 text-center ${className}`}>
        <style>{`
            .pillar-card {
                transition: all 0.3s ease;
            }
            .pillar-card:hover {
                border-color: var(--theme-primary) !important;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
            .pillar-card .icon-bg {
                transition: all 0.3s ease;
            }
            .pillar-card:hover .icon-bg {
                background-color: var(--theme-primary) !important;
            }
            .pillar-card:hover .icon-bg svg {
                color: white !important;
            }
        `}</style>
        <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--theme-primary)' }}>This is HOW it affects your LIFE</h1>
        <p className="max-w-2xl mx-auto mb-10 text-lg opacity-80">
            When stress stays in your system for too long, it doesn't just stay in your mind — it slowly spreads into every part of your life.
        </p>

        <div className="p-8 md:p-12 rounded-3xl shadow-sm border border-[var(--theme-border)]/5" style={{ backgroundColor: 'var(--theme-card-background)' }}>
            <h4 className="text-center mb-8 opacity-70 leading-relaxed pl-4 font-semibold text-lg">
                It starts affecting your -
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { icon: Heart, label: "Health", desc: ["begins to suffer", "energy drains"] },
                    { icon: Users, label: "Relationships", desc: ["communication gaps", "conflicts increases"] },
                    { icon: Briefcase, label: "Work", desc: ["struggle to focus", "productivity drops"] },
                    { icon: Sun, label: "Life", desc: ["feels chaotic", "enthusiasm fades"] },
                ].map((item, i) => (
                    <div key={i} className="pillar-card p-6 rounded-2xl shadow-sm border border-[var(--theme-border)]/5 text-left flex flex-col" style={{ backgroundColor: 'var(--theme-card-background)' }}>
                        <div className="icon-bg w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--theme-primary)26' }}>
                            <item.icon className="w-5 h-5" style={{ color: 'var(--theme-primary)' }} />
                        </div>
                        <h3 className="text-lg font-bold mb-2">{item.label}</h3>
                        <ul className="opacity-70 text-sm leading-relaxed list-disc list-inside">
                            {item.desc.map((d, idx) => (
                                <li key={idx}>{d}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <h4 className="text-center mt-8 mb-4 opacity-70 leading-relaxed pl-4 font-semibold text-lg">
                Before you realize it, everything starts slipping away.
            </h4>
        </div>
    </Section>
);

export default Pillars;
