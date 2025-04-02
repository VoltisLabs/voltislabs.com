import React from 'react'

const Header = () => {
    return (
        <div className='flex items-center justify-center gap-4'>
            <a href="/Aboutus" className="text-white text-sm font-medium pb-1 hover:text-gray-400">
                Products
            </a>
            <a href="/Aboutus" className="text-white text-sm font-medium pb-1 hover:text-gray-400">
                About Us
            </a>
        </div>
    )
}

export default Header