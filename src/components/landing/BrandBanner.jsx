import React from 'react';
import { WhiteButton } from '../common/Button';

const BrandBanner = ({ onApplyClick }) => (
    <div className="w-full py-16 px-6" style={{ backgroundColor: 'var(--theme-primary)' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
            <p className="mb-10 text-white/90 text-lg leading-relaxed font-medium">
                This is <span className="text-xl font-bold">WHY</span> we created the <span className="text-xl font-bold">MASTER PROGRAM</span> <br />- to help you finally break <span className="text-xl font-bold">FREE FROM STRESS.</span>
            </p>
            <WhiteButton onClick={onApplyClick}>Join Now</WhiteButton>
        </div>
    </div>
);

export default BrandBanner;

<h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--theme-primary)' }}>Let's Do It</h1>
