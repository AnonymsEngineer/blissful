import React from 'react';
import ImageFrame from '../common/ImageFrame';
import Section from '../common/Section';

const Problem = ({ className = '' }) => (
    <Section className={`py-20 ${className}`}>
        <div className="p-8 md:p-12 rounded-3xl shadow-sm border border-[var(--theme-border)]/5 grid md:grid-cols-3 gap-12 items-stretch" style={{ backgroundColor: 'var(--theme-card-background)' }}>
            <div className="order-2 md:order-1 md:col-span-1 flex items-stretch">
                <ImageFrame
                    src="blissful/p2.png"
                    alt="Collaboration"
                    className="h-64 md:h-full w-full"
                />
            </div>
            <div className="space-y-6 order-1 md:order-2 md:col-span-2 flex flex-col justify-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Let me ask you something</h2>
                    <p className="opacity-80 text-lg leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
                        Do you feel constantly stressed, mentally exhausted and emotionally unstable? <br /> Replaying the same thoughts on loop, unable to break free from the cycle no matter how hard you try.
                    </p>
                    <p className="opacity-80 text-lg leading-relaxed" style={{ textAlign: 'justify' }}>
                        And the worst part, you know if you could fix this one thing, your entire life would start to feel better, clearer & finally in control.
                    </p>
                </div>
            </div>
        </div>
    </Section >
);

export default Problem;
