import React from 'react';

export const WaveTransition = ({ topBg = 'bg-brand-ivory', bottomFill = 'text-brand-ivory', className = '', shape = 'wave' }) => (
    <div aria-hidden="true" className={`relative z-10 w-full overflow-hidden flex flex-col leading-[0] m-0 p-0 border-0 outline-none ${topBg} ${className}`}>
        <svg
            className={`relative block w-full h-[40px] md:h-[60px] fill-current ${bottomFill}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            shapeRendering="auto"
            style={{ display: 'block', margin: 0, padding: 0, border: 'none', width: '100%' }}
        >
            <path d={shape === 'mountain'
                ? 'M0,18L180,0L360,20L540,2L720,22L900,3L1080,20L1260,0L1440,18V102L1260,120L1080,100L900,118L720,98L540,116L360,98L180,120L0,102Z'
                : 'M0,8C180,40 300,-22 480,12C660,46 760,-20 930,14C1110,48 1260,-18 1440,12V150H0Z'}></path>
        </svg>
    </div>
);
