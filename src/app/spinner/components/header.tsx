'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const links = ["support", "about", "voltis"]


// Animation variants
const sidebarVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
        display: "flex",
    },
    closed: {
        opacity: 0,
        y: -20,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
        transitionEnd: {
            display: "none",
        },
    },
}

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 24,
        },
    },
    closed: {
        opacity: 0,
        y: 20,
        transition: {
            duration: 0.2,
        },
    },
}

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev)

    return (
        <header className="fixed top-0 flex justify-between items-center w-full px-4 py-3 md:px-12 bg-black shadow-md z-50">
            <Link href="/" className="flex items-center mr-auto">
                <img src="/images/logo/spinner.png" alt="logo" className="h-12" />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-8 mr-auto">
                {links.map((link) => (
                    <a key={link} href={`#${link}`} className="uppercase text-sm font-medium text-white transition-colors">
                        {link}
                    </a>
                ))}
            </nav>

            <MenuToggle toggle={toggleMobileMenu} isOpen={isMobileMenuOpen} />

            {/* Mobile Dropdown Menu */}
            <motion.div
                className="fixed top-0 left-0 w-full h-full p-8 bg-[#00000080] backdrop-blur-xs text-white flex-col items-start justify-center gap-8 md:hidden"
                initial={false}
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={sidebarVariants}
            >
                {links.map((link) => (
                    <motion.a
                        key={link}
                        href={`#${link}`}
                        className="uppercase text-lg font-normal"
                        variants={itemVariants}
                        onClick={toggleMobileMenu}
                    >
                        {link}
                    </motion.a>
                ))}
            </motion.div>
        </header>
    )
}

export default Header


const Path = (props: any) => (
    <motion.path
        fill="transparent"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        {...props}
    />
)

const MenuToggle = ({ toggle, isOpen }: { toggle: () => void; isOpen: boolean }) => (
    <button
        onClick={toggle}
        className="md:hidden z-50 absolute top-4 right-4 text-white"
        aria-label="Toggle menu"
    >
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                }}
                animate={isOpen ? 'open' : 'closed'}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                animate={isOpen ? 'open' : 'closed'}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                }}
                animate={isOpen ? 'open' : 'closed'}
            />
        </svg>
    </button>
)