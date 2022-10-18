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
            
            <div className='flex divide-x p-10 text-white items-center divide-gray-200 justify-center w-screen  h-32 xl:w-3/6 bg-transparent font-bold text-sm  border-8 border-gray-800  xl:text-2xl'>
           <div><span className=' xl:px-2'>{remainingTime.days}</span>
           <span className=' xl:px-2'>days</span></div>
           <div>
           <span className=' xl:px-2'>{remainingTime.hours}</span>
           <span className=' xl:px-2'>hours</span>
           </div>
           <div><span className=' xl:px-2'>{remainingTime.minutes}</span>
           <span className=' xl:px-2'>minutes</span></div>
           <div>
           <span className=' xl:px-2'>{remainingTime.seconds}</span>
           <span className=' xl:px-2'>seconds</span>
           </div>
           
            </div>
           
        </div>
     
        </div>
    );
}

export default CountdownTimer;
