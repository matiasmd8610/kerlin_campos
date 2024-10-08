'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
// import "../styles/header.css";
import AOS from "aos";
import "aos/dist/aos.css";

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

    const menuClose = () => {
        let nav = document.getElementsByTagName("nav");
        setActive(!active);

        if(nav[0].classList.contains("active")){
            nav[0].classList.remove("active")
        } else {
            nav[0].classList.add("active")
        }
    }

    useEffect(() => {
        AOS.init({
          once: true,
          // disable: "phone",
          duration: 300,
          // easing: "ease-out-cubic",
        });
    }, []);

    return (
        <header id='header' className={`py-3 top-0 z-50 w-full ${sticky}`}>
            <div className="container flex justify-between items-center">
                <Link href={"/"}>
                    <Image className="logo w-[120px] h-[auto]" src="/images/logo_kerlin_campos.png" width="200" height="100" alt="Logo Kerlin Campos" data-aos="fade-right" />
                </Link>
                <nav className={`top-[78px] lg:top-0 w-screen lg:w-auto left-0 lg:left-initial fixed lg:block lg:relative px-4 lg:px-0 pt-4 lg:pt-0 ${active ? "active" : ""}`}>
                    <ul className='flex flex-col lg:flex-row py-5 lg:py-0 items-center lg:items-start' onClick={menuClose}>
                        <li className='mb-5 lg:mb-0 lg:mr-2'>
                            <Link className="font-bold py-[7px] px-4 text-xl lg:text-lg hover:text-white" href="/#header">Inicio</Link>
                        </li>
                        <li className='mb-5 lg:mb-0 lg:mr-1'>
                            <Link className="font-bold py-[7px] px-4 text-xl lg:text-lg hover:text-white" href="/#nuestra-historia">Nuestra Historia</Link>
                        </li>
                        <li className='mb-5 lg:mb-0 lg:mr-1'>
                            <Link className="font-bold py-[7px] px-4 text-xl lg:text-lg hover:text-white" href="/#nuestro-equipo">Nuestro Equipo</Link>
                        </li>
                        <li className='mb-5 lg:mb-0 lg:mr-1'>
                            <Link className="font-bold py-[7px] px-4 text-xl lg:text-lg hover:text-white" href="/#servicios">Servicios</Link>
                        </li>
                        <li className='mb-5 lg:mb-0 lg:mr-1'>
                            <Link className="font-bold py-[7px] px-4 text-xl lg:text-lg hover:text-white" href="/campos">Campos</Link>
                        </li>
                        <li className='mb-5 lg:mb-0'>
                            <Link className="font-bold py-[7px] px-4 text-xl lg:text-lg hover:text-white" href="/#footer">Contacto</Link>
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