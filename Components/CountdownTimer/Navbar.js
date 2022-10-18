import React,{useState} from 'react';

const Navbar = () => {
    const [toggled, setToggle] = useState(false);
    const ul = "xl:flex xl:my-auto font-semibold xl:px-32 xl:gap-10 "
    const open = ul + " absolute flex flex-col  w-screen bg-transparent h-max top-0 left-0 gap-6 text-center mt-16 -z-10";
    const closed = ul + " hidden";
    return (
        <div>
            <nav className=' flex w-full bg-transparent border border-0 border-b-4 border-b-white px-6 lg:px-20 py-10 justify-between'>
                <div className='xl:px-20'>
                <img src="/logo.png.jpg" className='w-72' alt="" />
                </div>
                
                <button className="xl:hidden" onClick={() => { setToggle(!toggled) }}>
                {
                    !toggled ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="white" className="w-8 h-8" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" stroke-width="3" stroke="white" className="w-8 h-8">
                        <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
                    </svg>
                }

            </button>

                <ul className={toggled ? open : closed}>
                <li className="hover:text-white hover:underline"><a href="#about">Home</a></li>
                <li className="hover:text-white hover:underline"><a href="#iccpc">About</a></li>
                <li className="hover:text-white hover:underline"><a href="#commitee">Events</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
