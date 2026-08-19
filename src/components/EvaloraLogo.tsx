import React from 'react';

interface LogoProps {
    variant?: 'full' | 'icon';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const EvaloraLogo: React.FC<LogoProps> = ({
    variant = 'full',
    size = 'md',
    className = ''
}) => {
    const iconSizes = {
        sm: 'h-6 w-6',
        md: 'h-8 w-8',
        lg: 'h-10 w-10',
    };

    const textSizes = {
        sm: 'text-sm tracking-[0.25em]',
        md: 'text-lg tracking-[0.3em]',
        lg: 'text-2xl tracking-[0.35em]',
    };

    return (
        <div className={`flex items-center gap-3 select-none cursor-pointer group ${className}`}>
            {/* Aerodynamic Cyber-E Icon */}
            <svg
                className={`${iconSizes[size]} flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="logoCyberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="50%" stopColor="#CBD5E1" />
                        <stop offset="100%" stopColor="#64748B" />
                    </linearGradient>
                </defs>
                <rect width="100" height="100" rx="22" className="fill-slate-950 dark:fill-slate-900 shadow-inner" />
                <g transform="translate(4, 0)">
                    <path d="M22 24L32 18V82L22 76V24Z" fill="url(#logoCyberGrad)" />
                    <path d="M38 18H80L66 32H38V18Z" fill="url(#logoCyberGrad)" />
                    <path d="M38 43H62L52 53H38V43Z" fill="url(#logoCyberGrad)" />
                    <path d="M38 64H66L76 78H38V64Z" fill="url(#logoCyberGrad)" />
                </g>
            </svg>

            {/* Tesla uslubidagi Matn */}
            {variant === 'full' && (
                <div className="flex items-center">
                    <span className={`font-black font-sans uppercase text-slate-900 dark:text-white ${textSizes[size]}`}>
                        EVALORA
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 ml-1 mb-2 animate-pulse" />
                </div>
            )}
        </div>
    );
};

export default EvaloraLogo;