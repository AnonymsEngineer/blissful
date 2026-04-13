import React from 'react';
import ImageFrame from '../common/ImageFrame';
import Section from '../common/Section';

const About = ({ className = '' }) => (
    <Section id="about" className={`py-20 ${className}`}>
        <div className="rounded-3xl shadow-sm border border-[var(--theme-border)]/5 overflow-hidden" style={{ backgroundColor: 'var(--theme-card-background)' }}>
            <div className="p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold" style={{ color: 'var(--theme-primary)' }}>About Your Mentor</h2>
                <p className="opacity-75 text-m uppercase tracking-[0.2em] font-bold mt-2">Simran Makwana (Me!)</p>
            </div>

            <div className="grid md:grid-cols-3 items-stretch">
                <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-4">My Journey to Mastery</h3>
                    <div className="space-y-4 opacity-80 leading-relaxed text-lg">
                        <p style={{ textAlign: 'justify' }}>On the outside my life looked "Perfect"; At 23 I had it all - an engineering degree, a project manager job and I was ticking every box of what success was supposed to look like. But from inside...</p>
                        <p style={{ textAlign: 'justify' }}>I felt Lost, Disconnected and constantly questioning myself. This pressure starting affecting everything - my health, my relations & most importantly how I saw myself. One day I reached my breaking point and nothing is the same after that.</p>
                    </div>
                </div>
                <div className="md:col-span-1 p-8">
                    <ImageFrame
                        src="about1.png"
                        alt="Mentor Profile"
                        className="w-full max-h-80"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-3 items-stretch pb-8">
                <div className="md:col-span-1 p-8 order-2 md:order-1 flex items-center justify-center">
                    <div className="w-full" style={{ height: '480px' }}>
                        <ImageFrame
                            src="about2.png"
                            alt="Mentoring in Action"
                            className="w-full h-full"
                        />
                    </div>
                </div>
                <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
                    <div className="space-y-4 opacity-80 leading-relaxed text-lg">
                        <p style={{ textAlign: 'justify' }}>I took charge of my situation & found the courage to fix things. In the process of healing I discovered powerful tools & practices that helped me build myself from within. What I learned changed everything: When our mind, body & soul are in balance, most problems begin to dissolve.</p>
                        <p className="font-semibold text-[#2b2b2b]" style={{ textAlign: 'justify' }}>Now, my mission is to help other people to step into their fullest potential. I don't offer quick fixes, Instead to fight those inner battles I help you build an Arsenal with strategies and breakthroughs that I have lived, tested and mastered myself.</p>
                    </div>
                </div>
            </div>
        </div>
    </Section>
);

export default About;
