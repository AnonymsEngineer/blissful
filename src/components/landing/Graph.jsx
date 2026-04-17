import React from 'react';
import Section from '../common/Section';

const Graph = ({ className = '' }) => (
    <Section className={`py-20 ${className}`}>
        <style>{`
            .stage-card {
                transition: all 0.3s ease;
            }
            .stage-card:hover {
                border-color: var(--theme-primary) !important;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
            .stage-card .stage-number {
                transition: all 0.3s ease;
            }
            .stage-card:hover .stage-number {
                transform: scale(1.1);
            }
        `}</style>
        <div className="text-center mb-16">
            <div className="inline-block px-9 py-3 border border-[var(--theme-border)]/20 rounded-full mb-4 shadow-sm" style={{ backgroundColor: 'var(--theme-card-background)' }}>
                <h2 className="text-xl md:text-2xl font-bold">The Trajectory of Growth</h2>
            </div>
            <p className="opacity-100 max-w-xl mx-auto">This is a <span style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'var(--theme-primary)' }}>STRATEGIC 4-STAGE PROCESS</span> designed to move you out of survival mode and back into control. Here's how it works - </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col">
                <div className="w-full aspect-square relative border-l-2 border-b-2 border-[var(--theme-border)]/40 p-4 mb-10">
                    <div className="absolute -left-8 top-0 bottom-0 flex items-center pointer-events-none">
                        <span className="transform -rotate-90 text-[12px] font-bold tracking-[0.25em] text-[var(--theme-border)]/40 uppercase whitespace-nowrap">
                            You
                        </span>
                    </div>
                    <div className="absolute -bottom-8 left-0 right-0 flex justify-center pointer-events-none">
                        <span className="text-[12px] font-bold tracking-[0.25em] text-[var(--theme-border)]/40 uppercase">
                            Time
                        </span>
                    </div>
                    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                        {[20, 40, 60, 80].map(val => (
                            <g key={val}>
                                <line x1="0" y1={val} x2="100" y2={val} stroke="rgba(43,43,43,0.03)" strokeWidth="0.5" />
                                <line x1={val} y1="0" x2={val} y2="100" stroke="rgba(43,43,43,0.03)" strokeWidth="0.5" />
                            </g>
                        ))}
                        <path
                            d="M 0 98 C 45 98, 85 92, 100 0"
                            fill="none"
                            stroke="var(--theme-primary)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            className="drop-shadow-sm"
                        />
                    </svg>
                </div>
                <div className="px-2 mt-4 text-center md:text-left">
                    <p className="text-sm italic opacity-100 leading-relaxed">
                        The chart above illustrates the compound effect of consistent implementation of the program.
                    </p>
                </div>
            </div>

            <div className="flex flex-col space-y-4">
                {[
                    { s: 1, t: "Mindset Shift", d: "We begin by gently transforming the way you think, reducing overthinking and quieting mental noise to create clarity and calm." },
                    { s: 2, t: "Body Reset", d: "From there, we focus on nurturing your physical well-being, helping your body feel stronger, lighter, and more balanced." },
                    { s: 3, t: "Energy Balancing", d: "As your mind and body align, we work on restoring your natural energy flow, bringing harmony to your body, mind, and soul." },
                    { s: 4, t: "Long term Mastery", d: "Finally, we bring it all together, guiding you towards a sustainable lifestyle that supports lasting growth and overall well-being." }
                ].map((stage) => (
                    <div key={stage.s} className="stage-card bg-[#f7f5f2] p-8 rounded-2xl shadow-sm border flex items-start space-x-6" style={{ borderColor: 'var(--theme-border)', borderOpacity: 0.05 }}>
                        <div className="stage-number text-white font-bold w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md" style={{ backgroundColor: 'var(--theme-primary)' }}>
                            {stage.s}
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-2" style={{ color: 'var(--theme-text)' }}>Stage {stage.s}: {stage.t}</h4>
                            <p className="text-sm opacity-70 leading-relaxed" style={{ textAlign: 'justify' }}>{stage.d}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

export default Graph;
