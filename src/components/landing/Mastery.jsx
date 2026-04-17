import React from 'react';
import ImageFrame from '../common/ImageFrame';
import Section from '../common/Section';

const Mastery = ({ className = '' }) => (
    <Section className={`text-center py-20 ${className}`}>
        <div className="inline-block px-8 py-2 border border-[var(--theme-border)]/20 rounded-full mb-10 shadow-sm" style={{ backgroundColor: 'var(--theme-card-background)' }}>
            <h2 className="text-xl md:text-2xl font-bold">What Will You Walk Away With</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
            {[
                { n: 1, img: 'mastery1.png', title: 'You feel Calm & Clear', desc: 'Your mind becomes quieter, more focused, and deeply grounded.' },
                { n: 2, img: 'mastery2.png', title: 'You wake up healthier & energised', desc: 'Your body feels lighter, stronger, and naturally energised every day.' },
                { n: 3, img: 'mastery3.png', title: 'You perform at your best', desc: 'You show up with ideas, clarity, and confidence in work, home, and life.' }
            ].map((item) => (
                <div key={item.n} className="bg-[var(--theme-card-background)] p-8 rounded-2xl shadow-sm border border-[var(--theme-border)]/5 text-left">
                    <ImageFrame src={item.img} alt={item.title} className="h-32 w-full mb-6 border-none" />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="opacity-60 text-sm" style={{ textAlign: 'justify' }}>{item.desc}</p>
                </div>
            ))}
        </div>
    </Section>
);

export default Mastery;
