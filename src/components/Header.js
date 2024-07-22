'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
// import "../styles/header.css";


const Header = () => {
    const [active, setActive] = useState(false);
    const handleMenu = () => {
        setActive(!active);
    }

    return (
        <header className="py-4 bg-blueMain">
            <div className="container flex justify-between items-center">
                <Image className="logo w-[120px] h-[auto]" src="/images/logo_kerlin_white.png" width="200" height="200" alt="Logo Kerlin" />
                <nav className={active ? "active" : ""}>
                    <ul>
                        <li>
                            <Link className="text-white mr-5 font-bold" href="#">Home</Link>
                            <Link className="text-white mr-5 font-bold" href="#">Campos</Link>
                            <Link href="#" className="text-white font-bold">Contacto</Link>
                        </li>
                    </ul>
                </nav>
                <button className={`menuMobile ${active ? "menuMobile--open" : ""}`} type="button" aria-label="Menu mobile navigation" aria-expanded="false"
                onClick={handleMenu}>
                    <span className='w-7 block h-0.5 bg-white mb-2'></span>
                    <span className='w-7 block h-0.5 bg-white'></span>
                </button>
            </div>
        </header>
    )
}

export default Header