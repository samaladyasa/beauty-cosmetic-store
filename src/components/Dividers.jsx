import React from 'react';

export const WaveTransition = ({ topBg = 'bg-brand-ivory', bottomFill = 'text-brand-ivory', className = '' }) => (
    <div aria-hidden="true" className={`relative z-10 w-full overflow-hidden flex flex-col leading-[0] m-0 p-0 border-0 outline-none ${topBg} ${className}`}>
        <svg
            className={`relative block w-full h-[40px] md:h-[60px] fill-current ${bottomFill}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            shapeRendering="auto"
            style={{ display: 'block', margin: 0, padding: 0, border: 'none', width: '100%' }}
        >
            <path d="M0,0C180,30 300,-18 480,12C660,40 760,-14 930,16C1110,44 1260,-12 1440,18V150H0Z"></path>
        </svg>
    </div>
);
