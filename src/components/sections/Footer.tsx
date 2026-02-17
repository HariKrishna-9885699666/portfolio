"use client";

import { FooterBottom } from "./FooterBottom";
import ContactForm from "./ContactForm";
import ResumeModal from "@/components/ui/ResumeModal";
import { useResumeModal } from "@/hooks/useResumeModal";

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
    const { isResumeModalOpen, openResumeModal, closeResumeModal, resumeUrl } = useResumeModal(profile?.resumeUrl);

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
                                            onClick={openResumeModal}
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
                <FooterBottom />
            </div>

            <ResumeModal 
                isOpen={isResumeModalOpen} 
                onClose={closeResumeModal} 
                resumeUrl={resumeUrl}
            />
        </footer>
    );
};
