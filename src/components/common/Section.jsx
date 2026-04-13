import React from 'react';

const Section = ({ children, className = '', id = '' }) => (
    <section id={id} className={`px-6 md:px-12 max-w-6xl mx-auto ${className}`}>
        {children}
    </section>
);

export default Section;
