import React from 'react';
import Section from '../common/Section';

const Hook = ({ className = '' }) => (
    <Section className={`text-center py-20 ${className}`}>
        <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-2xl font-medium">
                "A high impact 1-on-1 coaching program designed to help you eliminate stress, stop overthinking & perform at your highest level - personally & professionally."
            </p>
        </div>
    </Section>
);

export default Hook;
