"use client";
import { useCurrentDateTime } from "@/hooks/useCurrentDateTime";
import React from "react";

export const FooterBottom = () => {
    const currentDateTime = useCurrentDateTime();
    const contactInfo = [
        {
            iconClass: "fas fa-phone",
            label: "Mobile",
            value: <span style={{ color: '#ffffff' }}>09885699666</span>,
            justify: "justify-content-start",
        },
        {
            iconClass: "fas fa-envelope",
            label: "Email",
            value: <a href="mailto:anemharikrishna@gmail.com" style={{ color: '#ffffff', textDecoration: 'none', wordBreak: 'break-word' }}>anemharikrishna@gmail.com</a>,
            justify: "justify-content-start justify-content-md-center",
        },
        {
            iconClass: "fas fa-map-marker-alt",
            label: "Location",
            value: <span style={{ color: '#ffffff' }}>Hyderabad, India</span>,
            justify: "justify-content-start justify-content-md-end",
        },
    ];
    return (
        <div className="footer-bottom-area">
            <div className="container">
                <div className="footer-border">
                    <div className="row align-items-center justify-content-center mb-30 pt-30">
                        {contactInfo.map((info, idx) => (
                            <div
                                key={info.label}
                                className={`col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-30 d-flex ${info.justify}`}
                            >
                                <div className="footer-contact-info" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div className="icon" style={{ fontSize: '20px', color: '#FFEFAE' }}><i className={info.iconClass}></i></div>
                                    <div className="text" style={{ textAlign: 'left' }}>
                                        <p style={{ margin: 0, fontWeight: '600', color: '#FFEFAE' }}>{info.label}</p>
                                        <p style={{ margin: 0 }}>{info.value}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="footer-copy-right text-center">
                                <p style={{ margin: 0 }}>
                                    {currentDateTime}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};