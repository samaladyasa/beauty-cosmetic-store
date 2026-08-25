import React from 'react';

// This divider smoothly transitions from topBg color to bottomFill color.
export const WaveTransition = ({ topBg = 'bg-brand-ivory', bottomFill = 'text-brand-ivory', className = '' }) => (
    <div aria-hidden="true" className={`relative z-10 -mb-2 w-full overflow-hidden leading-[0] border-0 outline-none ${topBg} ${className}`}>
        <svg
            className={`relative block w-full h-[52px] md:h-[86px] fill-current ${bottomFill}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            shapeRendering="geometricPrecision"
            style={{ border: '0', outline: 'none' }}
        >
            <path d="M0,60C180,18 300,92 480,70C660,48 760,24 930,54C1110,84 1260,26 1440,60V150H0Z"></path>
        </svg>
    </div>
);
