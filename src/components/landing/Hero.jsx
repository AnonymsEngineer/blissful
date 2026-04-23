import React from 'react';
import { Button } from '../common/Button';
import ImageFrame from '../common/ImageFrame';
import Section from '../common/Section';

const Hero = ({ onApplyClick }) => (
    <Section id="home" className="pt-24 pb-20">
        <div className="p-8 md:p-12 rounded-3xl shadow-sm border border-[var(--theme-border)]/5 grid md:grid-cols-3 gap-12 items-center" style={{ backgroundColor: 'var(--theme-card-background)' }}>
            <div className="space-y-6 md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={{ color: 'var(--theme-text)' }}>
                    Master your <span className="text-4xl md:text-6xl font-bold leading-tight" style={{ color: 'var(--theme-primary)' }}>STRESS</span> & unlock the version of you that actually <span className="text-4xl md:text-6xl font-bold leading-tight" style={{ color: 'var(--theme-primary)' }}>WINS</span>
                </h2>
                <p className="text-lg opacity-80 max-w-xl">
                    <span className="font-bold">- with Simran Makwana</span> <br /> Lifestyle and Wellness Coach
                </p>
                <div className="pt-4 w-full flex justify-center md:justify-start">
                    <Button onClick={onApplyClick}>Let's Connect</Button>
                </div>
            </div>
            <div className="md:col-span-1 w-full h-full flex items-center">
                <ImageFrame
                    src="p1.png"
                    alt="Workspace"
                    className="h-64 md:h-full min-h-[250px] w-full"
                    objectPosition="top"
                    loading="eager"
                    fetchPriority="high"
                />
            </div>
        </div>
    </Section>
);

export default Hero;
