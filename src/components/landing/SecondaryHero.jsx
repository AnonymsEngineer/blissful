import React from 'react';
import ImageFrame from '../common/ImageFrame';
import Section from '../common/Section';

const SecondaryHero = ({ className = '' }) => (
    <Section className={`py-20 ${className}`}>
        <div className="p-8 md:p-12 rounded-3xl shadow-sm border border-[var(--theme-border)]/5 grid md:grid-cols-3 gap-12 items-center" style={{ backgroundColor: 'var(--theme-card-background)' }}>
            <div className="space-y-6 md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
                <p className="text-lg opacity-80 max-w-xl leading-relaxed" style={{ textAlign: 'justify' }}>
                    This is not another generic "Stress Management" program it's a powerful step by step framework that blends modern science backed techniques with timeless traditional methods for real & practical results.
                </p>
            </div>
            <div className="md:col-span-1 w-full h-full flex items-center">
                <ImageFrame
                    src="blissful/p3.png"
                    alt="Team Meeting"
                    className="h-64 md:h-full min-h-[250px] w-full"
                />
            </div>
        </div>
    </Section>
);

export default SecondaryHero;
