import React from 'react';
import { Heart, Mail } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from '../common/Icons';

const Footer = () => (
    <footer className="py-12 px-6" style={{ backgroundColor: 'var(--theme-primary)' }}>
        <div className="max-w-6xl mx-auto flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-6 mb-8">
                <a href="mailto:ssimranmakwana@gmail.com" className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 transition-all duration-300 hover:bg-white hover:scale-110 cursor-pointer shadow-lg active:scale-95">
                    <Mail className="w-5 h-5 text-white/80 transition-colors duration-300 group-hover:text-[var(--theme-primary)]" />
                </a>
                <a href="https://instagram.com/simran_makwanaa" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 transition-all duration-300 hover:bg-white hover:scale-110 cursor-pointer shadow-lg active:scale-95">
                    <InstagramIcon className="w-5 h-5 text-white/80 transition-colors duration-300 group-hover:text-[var(--theme-primary)]" />
                </a>
                <a href="https://youtube.com/@simranmakwanaa" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 transition-all duration-300 hover:bg-white hover:scale-110 cursor-pointer shadow-lg active:scale-95">
                    <YoutubeIcon className="w-5 h-5 text-white/80 transition-colors duration-300 group-hover:text-[var(--theme-primary)]" />
                </a>
                <a href="https://linkedin.com/in/simran-makwana-1281b73a3" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 transition-all duration-300 hover:bg-white hover:scale-110 cursor-pointer shadow-lg active:scale-95">
                    <LinkedinIcon className="w-5 h-5 text-white/80 transition-colors duration-300 group-hover:text-[var(--theme-primary)]" />
                </a>
            </div>

            <div className="flex items-center space-x-1 text-white/80 text-[10px] uppercase tracking-widest font-bold">
                <span>Made with</span> <Heart className="w-3 h-3 text-red-500 fill-red-500" /> <span>in India</span>
            </div>
        </div>
    </footer>
);

export default Footer;
