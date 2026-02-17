"use client";


import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const validate = () => {
        let valid = true;
        const newErrors = { name: '', email: '', subject: '', message: '' };
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required.';
            valid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
            valid = false;
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
            newErrors.email = 'Enter a valid email address.';
            valid = false;
        }
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required.';
            valid = false;
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required.';
            valid = false;
        }
        setErrors(newErrors);
        return valid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (status === 'loading') return; // Prevent multiple submits
        if (!validate()) return;
        setStatus('loading');
        setErrorMessage('');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.error || 'Something went wrong');
            }
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (err) {
            setStatus('error');
            setErrorMessage(
                err instanceof Error ? err.message : 'Failed to send message'
            );
        }
    };

    const resetStatus = () => {
        setStatus('idle');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({ name: '', email: '', subject: '', message: '' });
        setErrorMessage('');
    };

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
                <form id="contact-form" onSubmit={handleSubmit} noValidate>
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
                                    disabled={status === "loading"}
                                />
                                {errors.name && <div className="small mt-1" style={{ color: '#FFEFAE' }}>{errors.name}</div>}
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
                                    disabled={status === "loading"}
                                />
                                {errors.email && <div className="small mt-1" style={{ color: '#FFEFAE' }}>{errors.email}</div>}
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
                                    disabled={status === "loading"}
                                />
                                {errors.subject && <div className="small mt-1" style={{ color: '#FFEFAE' }}>{errors.subject}</div>}
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
                                    disabled={status === "loading"}
                                ></textarea>
                                {errors.message && <div className="small mt-1" style={{ color: '#FFEFAE' }}>{errors.message}</div>}
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
