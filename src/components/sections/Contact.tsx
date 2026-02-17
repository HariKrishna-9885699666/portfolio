import ContactForm from "./ContactForm";

export const Contact = () => {
    return (
        <section id="contact" className="contact-section section-padding40">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-tittle mb-35">
                            <h2>Get in Touch</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};
