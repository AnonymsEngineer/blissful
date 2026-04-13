import React from 'react';
import ImageFrame from '../common/ImageFrame';
import Section from '../common/Section';

const Mastery = ({ className = '' }) => (
    <Section className={`text-center py-20 ${className}`}>
        <div className="inline-block px-8 py-2 border border-[var(--theme-border)]/20 rounded-full mb-10 shadow-sm" style={{ backgroundColor: 'var(--theme-card-background)' }}>
            <h2 className="text-xl md:text-2xl font-bold">This is how your life will level up</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
            {[
                { n: 1, img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400&q=80', title: 'You feel Calm & Clear', desc: 'Less mental chaos, more grounded and peaceful.' },
                { n: 2, img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=400&q=80', title: 'You wake up healthier & energised', desc: 'Body and mind work together, which makes you feel light and energetic.' },
                { n: 3, img: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=crop&w=400&q=80', title: 'You perform at your best', desc: 'at work, at home & in your personal life.' }
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
