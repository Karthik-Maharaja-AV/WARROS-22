import React from 'react';
import dayjs from 'dayjs';


export function getRemainingTimeUntilMsTimestamp(timeStampMs)
{
    const timeStampDayjs= dayjs(timeStampMs);
    const nowDayjs = dayjs();
    if(timeStampDayjs.isBefore(nowDayjs))
    {
        return{
            seconds:'00',
            minutes:'00',
            hours:'00',
            days:'00'
        }
    }
    return{
        seconds:getRemainingSeconds(nowDayjs,timeStampDayjs),
        minutes:getRemainingMinutes(nowDayjs,timeStampDayjs),
        hours:getRemainingHours(nowDayjs,timeStampDayjs),
        days:getRemainingDays(nowDayjs,timeStampDayjs)
    }
} 

function getRemainingSeconds(nowDayjs,timeStampDayjs){
    const seconds = timeStampDayjs.diff(nowDayjs,'seconds') % 60;
    return padWithZeros(seconds ,2);
}

function getRemainingMinutes(nowDayjs,timeStampDayjs){
    const minutes = timeStampDayjs.diff(nowDayjs,'minutes') % 60;
    return padWithZeros(minutes,2);
}

function getRemainingHours(nowDayjs,timeStampDayjs){
    const hours = timeStampDayjs.diff(nowDayjs,'hours') % 24;
    return padWithZeros(hours,2);
}

function getRemainingDays(nowDayjs,timeStampDayjs){
    const days = timeStampDayjs.diff(nowDayjs,'days');
    return days.toString();
}

function padWithZeros(number ,minLength) {
    const numberString = number.toString();
    if(numberString.length >= minLength) return numberString;
    return "0".repeat(minLength - numberString.length) + numberString;
}