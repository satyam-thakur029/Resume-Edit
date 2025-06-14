"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import Link from "next/link";
import { Typewriter } from 'react-simple-typewriter';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export default function Hero() {
    return (
        <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* GitHub Star Button */}
            <a
                href="https://github.com/satyam-thakur029/Resume-Edit"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-6 right-6 z-50 flex items-center gap-2 rounded-lg bg-white/5 backdrop-blur-sm px-4 py-2 text-sm text-white/90 transition-all hover:bg-white/10 hover:text-white"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Star on GitHub
            </a>

            {/* Subtle sparkles */}
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.2}
                    particleDensity={50}
                    particleColor="#FFFFFF"
                />
            </div>
            
            {/* Main content */}
            <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
                <h1 className={`${spaceGrotesk.className} text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight`}>
                    Craft Your Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Resume</span>
                </h1>

                <p className={`${spaceGrotesk.className} text-lg text-gray-400 mb-8`}>
                    <Typewriter
                        words={['ATS-optimized templates', 'Professional designs', 'Easy customization', 'Free forever']}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </p>

                <Link
                    href="/builder"
                    className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 font-medium text-white transition-all hover:from-purple-700 hover:to-blue-700 hover:shadow-lg hover:shadow-purple-500/20"
                >
                    Start Building Now
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        className="ml-2"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </Link>
            </div>

            {/* Floating features */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-20">
                {['No Signup', '100% Free', 'Privacy Focused'].map((text, i) => (
                    <span key={i} className="text-xs text-gray-400 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        {text}
                    </span>
                ))}
            </div>
        </div>
    );
}