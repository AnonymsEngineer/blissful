import React from 'react';
import { Button } from '../common/Button';
import ImageFrame from '../common/ImageFrame';
import Section from '../common/Section';

const FinalCTA = ({ onApplyClick, className = '' }) => (
    <Section className={`py-20 ${className}`}>
        <div className="p-8 md:p-12 rounded-3xl shadow-sm border border-[var(--theme-border)]/5 grid md:grid-cols-3 gap-12 items-center text-left mb-16" style={{ backgroundColor: 'var(--theme-card-background)' }}>
            <div className="space-y-6 md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
                <p className="text-lg leading-relaxed opacity-80" style={{ color: 'var(--theme-text)', textAlign: 'justify' }}>
                    If you have landed here, it is not by accident. There is a voice inside you - whispering, telling you it's time to do it. I'll listen to you, guide you & support you in taking necessary actions in transforming your life. As Eminem says, "Look, if you had one shot or one opportunity to seize everything you ever wanted in one moment would you capture it or just let it slip?" <br /><br />
                    I am ready when you are. <br />
                    With Love,<br />
                    ~ Simran
                </p>
            </div>
            <ImageFrame src="blissful/finalCTA.png" alt="Ultimate Focus" className="h-64 md:h-full min-h-[250px] w-full" />
        </div>
        <div className="flex flex-col items-center gap-4">
            <Button onClick={onApplyClick}>Apply Now</Button>
            <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: 'var(--theme-text)', opacity: 0.6 }}>
                * Limited slots available
            </p>
        </div>
    </Section>
);

export default FinalCTA;
