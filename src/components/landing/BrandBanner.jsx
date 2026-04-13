import React from 'react';
import { WhiteButton } from '../common/Button';

const BrandBanner = ({ onApplyClick }) => (
    <div className="w-full py-16 px-6" style={{ backgroundColor: 'var(--theme-primary)' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
            <p className="mb-10 text-white/90 text-lg leading-relaxed font-medium">
                That's why we created the Master Program- to help you finally break free from stress.
            </p>
            <WhiteButton onClick={onApplyClick}>Join Now</WhiteButton>
        </div>
    </div>
);

export default BrandBanner;
