'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
// import "../styles/header.css";


const Header = () => {
    const [active, setActive] = useState(false);
    const [sticky, setSticky] = useState("");

    const handleMenu = () => {
        setActive(!active);
    }

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
        window.removeEventListener("scroll", isSticky);
        };
    }, []);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 100 ? "fixed" : "";
        setSticky(stickyClass);
    };

    return (
        <header className={`py-4 top-0 z-50 w-full ${sticky}`}>
            <div className="container flex justify-between items-center">
                <Image className="logo w-[120px] h-[auto]" src="/images/logo_kerlin_blue.png" width="200" height="200" alt="Logo Kerlin" />
                <nav className={`top-[80px] lg:top-0 w-screen lg:w-auto left-0 lg:left-initial fixed hidden lg:block lg:relative px-4 lg:px-0 ${active ? "active" : ""}`}>
                    <ul className='flex flex-col lg:flex-row py-5 lg:py-0 items-center lg:items-start'>
                        <li className='mb-3 lg:mb-0 lg:mr-10'>
                            <Link className="text-blueMain font-bold py-2 text-lg" href="#home">Home</Link>
                        </li>
                        <li className='mb-3 lg:mb-0 lg:mr-10'>
                            <Link className="font-bold py-2 text-lg" href="/campos">Campos</Link>
                        </li>
                        <li className='mb-3 lg:mb-0 lg:mr-10'>
                            <Link className="font-bold py-2 text-lg" href="/campos">Nuestra Propuesta</Link>
                        </li>
                        <li>
                            <Link href="#" className="font-bold py-2 text-lg">Contacto</Link>
                        </li>
                    </ul>
                </nav>
                <button className={`menuMobile block lg:hidden ${active ? "menuMobile--open" : ""}`} type="button" aria-label="Menu mobile navigation" aria-expanded="false"
                onClick={handleMenu}>
                    <span className='w-7 block h-0.5 bg-blueMain mb-2'></span>
                    <span className='w-7 block h-0.5 bg-blueMain'></span>
                </button>
            </div>
        </header>
    )
}

export default Header