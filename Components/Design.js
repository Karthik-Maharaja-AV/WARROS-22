import React from 'react';

const Design = () => {
    return (
        <div className='zindex  flex items-center justify-center'>
            <div className='flex items-center justify-center xl:py-80 py-40'>
        <h1 className='z-40 flex relative items-center text-center justify-center xl:text-9xl text-6xl font-extrabold  xl:px-4 px-4  text-transparent bg-clip-text bg-gradient-to-br from-orange-600 via-yellow-600 to-orange-600 headingClass'>WARRO'S</h1>
          </div>
        <div className=''>
         <div className="circle relative z-30 flex items-center justify-center "></div>
      
        
        
        <svg>
            <filter id="wavy">
              <feTurbulence x="0" y="0" baseFrequency="0.009" numOctaves="5" speed="2">
                <animate attributeName="baseFrequency" dur="60s" values="0.02; 0.005; 0.02" repeatCount="indefinite" />
              </feTurbulence>
                <feDisplacementMap in="SourceGraphic" scale="30"></feDisplacementMap>
            </filter>
        </svg>
        </div>
      </div>

        
    );
}

export default Design;
