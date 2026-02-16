'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export const Header = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'experience', 'expertise', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', href: '#home', id: 'home' },
        { label: 'About', href: '#about', id: 'about' },
        { label: 'Experience', href: '#experience', id: 'experience' },
        { label: 'Expertise', href: '#expertise', id: 'expertise' },
        { label: 'Contact', href: '#contact', id: 'contact' },
    ];

    return (
        <header>
            <div className="header-area header-transparent relative" style={{ zIndex: 9999 }}>
                <div className="main-header header-sticky" style={{ zIndex: 9999 }}>
                    <div className="container-fluid">
                        <div className="menu-wrapper d-flex align-items-center justify-content-between">
                            {/* Logo */}
                            <div className="logo">
                                <Link href="/" style={{ fontSize: '28px', fontWeight: 'bold', color: '#670000', textDecoration: 'none' }}>
                                    Hari Krishna.
                                </Link>
                            </div>
                            {/* Main-menu */}
                            <div className="main-menu f-right d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        {navItems.map((item) => (
                                            <li key={item.id} className={activeSection === item.id ? 'active' : ''}>
                                                <a href={item.href}>{item.label}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>          
                            {/* Header-btn */}
                            <div className="header-info-right d-none d-lg-block">
                                <a href="#contact" className="btn header-btn">Let's Talk <i className="ti-arrow-right"></i></a>
                            </div>
                            {/* Mobile Menu */}
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
