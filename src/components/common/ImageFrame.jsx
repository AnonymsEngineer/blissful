import React from 'react';

const ImageFrame = ({ src, alt, className = '', objectPosition, loading = 'lazy', fetchPriority }) => (
    <div className={`rounded-2xl overflow-hidden shadow-md border border-[var(--theme-border)]/5 ${className}`}>
        <img
            src={src.startsWith('http') ? src : `/${src}`}
            alt={alt}
            loading={loading}
            fetchPriority={fetchPriority}
            className="w-full h-full object-cover"
            style={{
                objectPosition: objectPosition || undefined,
                userSelect: 'none',
                WebkitUserSelect: 'none',
                WebkitTouchCallout: 'none',
                WebkitUserDrag: 'none',
                KhtmlUserDrag: 'none'
            }}
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80'; }}
        />
    </div>
);

export default ImageFrame;
