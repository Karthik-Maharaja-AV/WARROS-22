import React, {useEffect} from 'react';

const Loading = () => {
    useEffect(() => {
        setTimeout( () => {
            document.getElementById('loader').style.display='none';
        },3000)
    },[]);
    return (
        <div id='loader' className={`centers flex items-center justify-center text-center h-screen `}>
            <div className="rings absolute w-52 h-52  rounded-full "></div>
            <span>Loading...</span>
        </div>
    );
}

export default Loading;
