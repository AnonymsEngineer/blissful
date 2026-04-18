import React from 'react';

export const Button = ({ children, className = '', onClick, disabled }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        style={{ backgroundColor: 'var(--theme-primary)', color: 'var(--theme-background)' }}
        className={`hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--theme-primary)] font-semibold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:active:scale-100 ${className}`}
    >
        {children}
    </button>
);

export const WhiteButton = ({ children, className = '', onClick, disabled }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className="bg-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--theme-primary)] font-bold py-3 px-10 rounded-full shadow-xl transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:active:scale-100"
        style={{ color: 'var(--theme-primary)' }}
    >
        {children}
    </button>
);
