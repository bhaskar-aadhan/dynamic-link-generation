import React, { useState } from 'react';
// import NavbarMenu from './NavbarMenu';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <header className='w-full'>
            <nav className='header__nav min-h-[60px] flex_between overflow-hidden px-5 py-3'>
                <div className='brand-logo font_poppins flex items-center gap-[10px]'>
                    <div className='brand-logo__menu'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className='font-bold text-[1.1rem]'>
                        Company
                    </p>
                </div>
                <div className='flex_center gap-[0.15rem] font-medium'>
                    <div className="profile_pic grid_center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                    <div className='header__nav-buttons flex_center text-center gap-1'>
                        {isLoggedIn ? <button className='logout_btn'>Logout</button> : <button className='login_btn'>Sign in</button>}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar