import React from 'react';

const YouTubePreview = () => {
    const videoId = 'mOCvY0eVjoA';
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

    return (
        <div className="flex justify-center">
            <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full max-w-4xl group cursor-pointer"
            >
                <div className="relative rounded-3xl overflow-hidden shadow-lg">
                    <img
                        src={thumbnailUrl}
                        alt="Video thumbnail"
                        className="w-full h-96 md:h-[500px] object-cover"
                        onError={(e) => {
                            e.target.src = 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg';
                        }}
                    />

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <svg
                                className="w-8 h-8 md:w-10 md:h-10"
                                style={{ color: 'var(--theme-primary)' }}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>

                    {/* Video title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <p className="text-white text-lg font-semibold">
                            Youtube Preview
                        </p>
                        <p className="text-white/80 text-sm mt-1">
                            Click to watch the full video on YouTube
                        </p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default YouTubePreview;
