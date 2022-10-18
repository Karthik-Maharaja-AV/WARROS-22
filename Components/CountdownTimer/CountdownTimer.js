import { useState,useEffect } from 'react';
import React from 'react';
import {getRemainingTimeUntilMsTimestamp} from './utils/CountdownTimerUtils'


const defaultRemainingTime ={
    seconds:'00',
    minutes:'00',
    hours:'00',
    days:'00'
}

const CountdownTimer = ({CountdownTimeStampMs}) => {
    const [remainingTime,setRemainingTime] = useState(defaultRemainingTime);

    useEffect(()=>{
        const intervelId = setInterval(() =>{
            updateReminingTime(CountdownTimeStampMs);
        },1000);
        return () => clearInterval(intervelId); 
    },[CountdownTimeStampMs])

    function updateReminingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return (
        <div className=''>
            
            
        <div className='flex items-center p-10 justify-center'>
            
            <div className='flex relative  divide-x p-10 text-white items-center divide-gray-200 justify-center w-screen  h-32 lg:w-3/6 bg-transparent font-bold text-xs md:text-lg border-8 border-gray-800 lg:text-lg xl:text-2xl'>
           <div><span className=' px-1 xl:px-2'>{remainingTime.days}</span>
           <span className=' lg:px-2 px-1'>days</span></div>
           <div>
           <span className=' lg:px-2 px-1'>{remainingTime.hours}</span>
           <span className=' lg:px-2 px-1'>hours</span>
           </div>
           <div><span className=' lg:px-2 px-1'>{remainingTime.minutes}</span>
           <span className=' lg:px-2 px-1'>minutes</span></div>
           <div>
           <span className=' lg:px-2 px-1'>{remainingTime.seconds}</span>
           <span className=' lg:px-2 px-1'>seconds</span>
           </div>
           
            </div>
           
        </div>
     
        </div>
    );
}

export default CountdownTimer;
