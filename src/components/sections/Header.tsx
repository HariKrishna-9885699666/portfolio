'use client';

import Link from 'next/link';
import ResumeModal from '@/components/ui/ResumeModal';
import { useResumeModal } from '@/hooks/useResumeModal';
import { useNavItems } from '@/hooks/useNavItems';
import { useActiveSection } from '@/hooks/useActiveSection';

export const Header = () => {
    // Navigation items and active section logic
    const navItems = useNavItems();
    const sectionIds = navItems.map(item => item.id);
    const activeSection = useActiveSection(sectionIds, 100);

    // Resume modal logic
    const { isResumeModalOpen, openResumeModal, closeResumeModal, resumeUrl } = useResumeModal();

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
                                <button
                                    onClick={openResumeModal}
                                    className="btn header-btn"
                                    style={{ marginLeft: '10px' }}
                                >
                                    Download CV <i className="ti-arrow-down"></i>
                                </button>
                            </div>
                            {/* Mobile Menu */}
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ResumeModal
                isOpen={isResumeModalOpen}
                onClose={closeResumeModal}
                resumeUrl={resumeUrl}
            />
        </header>
    );
};
