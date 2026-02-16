"use client";

import { useState } from "react";
import ContactForm from "./ContactForm";
import ResumeModal from "@/components/ui/ResumeModal";

interface FooterProps {
  profile?: {
    readonly email?: string | null;
    readonly github?: string | null;
    readonly linkedin?: string | null;
    readonly twitter?: string | null;
    readonly resumeUrl?: string | null;
  } | null;
}

export const Footer = ({ profile }: FooterProps) => {
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
    const resumeUrl = profile?.resumeUrl || "/resume/HariKrishna_Resume.pdf"; 

    return (
        <footer id="contact">
            <div className="footer-wrappr">
                <div className="footer-top">
                    {/* Want To work */}
                    <section className="wantToWork-area ">
                        <div className="container">
                            <div className="wants-wrapper w-padding2">
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-xl-7 col-lg-9 col-md-8">
                                        <div className="wantToWork-caption wantToWork-caption2">
                                            <h2>Do you want to know more about me?</h2>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4">
                                        <button 
                                            onClick={() => setIsResumeModalOpen(true)}
                                            className="btn white-btn f-right sm-left"
                                        >
                                            Download CV
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Want To work End */}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* contact-form */}
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer-bottom area */}
                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="footer-border">
                            <div className="row align-items-center justify-content-center mb-30 pt-30">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-30">
                                    <div className="footer-contact-info" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                        <div className="icon" style={{ fontSize: '20px', color: '#FFEFAE' }}><i className="fas fa-phone"></i></div>
                                        <div className="text" style={{ textAlign: 'left' }}>
                                            <p style={{ margin: 0, fontWeight: '600', color: '#FFEFAE' }}>Mobile</p>
                                            <p style={{ margin: 0, color: '#ffffff' }}>09885699666</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-30">
                                    <div className="footer-contact-info" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                        <div className="icon" style={{ fontSize: '20px', color: '#FFEFAE' }}><i className="fas fa-envelope"></i></div>
                                        <div className="text" style={{ textAlign: 'left' }}>
                                            <p style={{ margin: 0, fontWeight: '600', color: '#FFEFAE' }}>Email</p>
                                            <p style={{ margin: 0 }}><a href="mailto:anemharikrishna@gmail.com" style={{ color: '#ffffff', textDecoration: 'none', wordBreak: 'break-word' }}>anemharikrishna@gmail.com</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-30">
                                    <div className="footer-contact-info" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                        <div className="icon" style={{ fontSize: '20px', color: '#FFEFAE' }}><i className="fas fa-map-marker-alt"></i></div>
                                        <div className="text" style={{ textAlign: 'left' }}>
                                            <p style={{ margin: 0, fontWeight: '600', color: '#FFEFAE' }}>Location</p>
                                            <p style={{ margin: 0, color: '#ffffff' }}>Hyderabad, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-xl-4 col-lg-4">
                                    <div className="footer-social">
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-8">
                                    <div className="footer-copy-right f-right">
                                        <p>
                                            Copyright ©{new Date().getFullYear()} All rights reserved
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ResumeModal 
                isOpen={isResumeModalOpen} 
                onClose={() => setIsResumeModalOpen(false)} 
                resumeUrl={resumeUrl}
            />
        </footer>
    );
};
