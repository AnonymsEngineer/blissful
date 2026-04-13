import React from 'react';
import Section from '../common/Section';

const Hook = ({ className = '' }) => (
    <Section className={`text-center py-20 ${className}`}>
        <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-lg font-medium">
                "A high impact 1:1 coaching program ready to eliminate stress, stop overthinking & perform at their highest level - personally & professionally."
            </p>
        </div>
    </Section>
);

export default Hook;
