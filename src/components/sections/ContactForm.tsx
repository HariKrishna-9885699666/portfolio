"use client";

import { useContactForm } from "@/hooks/useContactForm";

export default function ContactForm() {
    const {
        formData,
        status,
        errorMessage,
        handleChange,
        handleSubmit,
        resetStatus,
    } = useContactForm();

    return (
        <div className="form-wrapper">
             <div className="row ">
                <div className="col-xl-12">
                    <div className="small-tittle mb-30">
                        <h4>Contact Me</h4>
                    </div>
                </div>
            </div>
            {status === "success" ? (
                <div className="success-message text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="mb-4 text-green-600 text-5xl">
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-700 mb-4">Thanks for reaching out. I'll get back to you soon.</p>
                    <button
                        onClick={resetStatus}
                        className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                    >
                        Send Another Message
                    </button>
                </div>
            ) : (
                <form id="contact-form" onSubmit={handleSubmit}>
                    {status === "error" && (
                        <div className="alert alert-danger mb-4 p-3 bg-red-100 text-red-700 rounded">
                            {errorMessage}
                        </div>
                    )}
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="form-box user-icon mb-25">
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Your name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={status === "loading"}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="form-box email-icon mb-25">
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={status === "loading"}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="form-box email-icon mb-25">
                                <input 
                                    type="text" 
                                    name="subject" 
                                    placeholder="Subject" 
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    disabled={status === "loading"}
                                />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-box message-icon mb-25">
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    disabled={status === "loading"}
                                ></textarea>
                            </div>
                            <div className="submit-info">
                                <button 
                                    className="submit-btn2" 
                                    type="submit"
                                    disabled={status === "loading"}
                                >
                                    {status === "loading" ? (
                                        <span><i className="fas fa-spinner fa-spin mr-2"></i> Sending...</span>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}
