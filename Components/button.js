import React from 'react';

const Button = () => {
    return (
        <div className='butt items-center justify-center flex p-10'>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSc3COTeIcG9VU1nlY-xA5GAWFSasPkM3kqx7Yp8-7uWQ1PGxQ/viewform?usp=sf_link'>
                <div className='border px-10 py-5 hover:border-4'>
            <button classname="w-24 h-10 border font-bold border-white p-10">
                Register Now 
            </button>
            </div>
            </a>
        </div>
    );
}

export default Button;
