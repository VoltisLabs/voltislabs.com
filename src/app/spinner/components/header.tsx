'use client';
import React, { useState } from 'react';

const links = ["products", "app & games", "features", "support", "about"];

const Header = () => {
    // State to handle the mobile menu toggle
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="flex justify-center items-center w-full">
            <img src="/svgs/logo.svg" alt="logo" className='mr-auto' />
            <nav className="md:flex gap-10 mr-auto items-center hidden">
                <ul className="flex gap-10 items-center">
                    {links.map((link) => (
                        <li key={link}>
                            <a href={link} className='uppercase text-lg font-normal'>{link}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className='md:hidden'>
                <img
                    src="/svgs/mobile_menu.svg"
                    alt="menu"
                    onClick={toggleMobileMenu}
                    className="cursor-pointer"
                />
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-fit bg-black z-50 md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                onClick={toggleMobileMenu}  // Close the menu when clicking outside
            >
                <div className={`fixed top-0 left-0 right-0 z-50 bg-black p-6 pt-12 transform ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300`}>
                    <ul className="flex flex-col gap-6 items-center bg-black">
                        <button className="absolute top-5 right-6 text-white text-2xl" onClick={toggleMobileMenu}>
                            ✕
                        </button>
                        {links.map((link) => (
                            <li key={link}>
                                <a href={link} className='uppercase text-lg font-normal text-white'>{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
