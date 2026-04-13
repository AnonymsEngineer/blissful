import React from 'react';

export const Button = ({ children, className = '', onClick }) => (
    <button
        onClick={onClick}
        style={{ backgroundColor: 'var(--theme-primary)', color: 'var(--theme-background)' }}
        className={`hover:opacity-90 font-semibold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 ${className}`}
    >
        {children}
    </button>
);

export const WhiteButton = ({ children, className = '', onClick }) => (
    <button
        onClick={onClick}
        className="bg-white font-bold py-3 px-10 rounded-full shadow-xl transition-transform hover:scale-105 active:scale-95"
        style={{ color: 'var(--theme-primary)' }}
    >
        {children}
    </button>
);
