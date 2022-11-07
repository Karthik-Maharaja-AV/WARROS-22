import React from 'react';

const Footer = () => {
    return (
        <div id='foot' className='py-10'>
            <footer>
            <div className="flex flex-col items-center h-16 border-t-4 text-xl text-center justify-center font-semibold">
                <h1>CONTACTS</h1>
                <div>
                <div className="text-center flex flex-col p-5 gap-4 items-center justify-center">

<div className="flex gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 text-white h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
      <div className="flex gap-4">
        <p>Kannan V</p>
        <a href="tel:+917010871350">7010871350</a>
    </div>
</div>

<div className="flex gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 text-white h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
      <div className="flex gap-4">
        <p>Sri Gridharan</p>
        <a href="tel:+919361943761">9361943761</a>
    </div>
</div>

</div>
                </div>
            </div>
            </footer>
        </div>
    );
}

export default Footer;
