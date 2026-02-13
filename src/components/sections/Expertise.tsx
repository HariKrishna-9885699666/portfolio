interface SkillItem {
  readonly name?: string | null;
}

interface SkillCategory {
  readonly title?: string | null;
  readonly highlights?: readonly string[] | null;
  readonly items?: readonly SkillItem[] | undefined;
}

interface ExpertiseProps {
  skills?: SkillCategory[] | null;
}

export const Expertise = ({ skills }: ExpertiseProps) => {
    return (
        <div id="expertise" className="our-services pt-top section-bg1">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-tittle mb-75 text-center">
                            <h2>My Expertise</h2>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    {(skills && skills.length > 0 ? skills : [
                        { title: "Full-Stack Development", highlights: ["8+ years of expertise in MERN stack.", "Proficient in Node.js, NestJS, and GraphQL."] },
                        { title: "Architecture & Cloud", highlights: ["Experience in Serverless and AWS Lambda.", "Skilled in microservices and API integrations."] }
                    ]).map((service, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-services mb-30" style={{ 
                                background: '#1c1c1c', 
                                padding: '40px 30px', 
                                height: '80%', 
                                minHeight: '320px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '8px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                            }}>
                                <div className="services-cap">
                                    <h5 style={{ color: '#FFEFAE', marginBottom: '20px', fontSize: '22px', fontWeight: '600', letterSpacing: '0.5px' }}>
                                        {service.title}
                                    </h5>
                                    <div className="expertise-highlights mb-20">
                                        {service.highlights?.map((highlight, hIndex) => (
                                            <p key={hIndex} style={{ color: '#ffffff', fontSize: '15px', lineHeight: '1.6', marginBottom: '12px', display: 'flex', gap: '10px' }}>
                                                <span style={{ color: '#FFEFAE', fontSize: '18px' }}>•</span>
                                                <span>{highlight}</span>
                                            </p>
                                        ))}
                                    </div>
                                    {service.items && service.items.length > 0 && (
                                        <div style={{ marginTop: 'auto', paddingTop: '15px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                            <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '13px', fontStyle: 'italic', marginBottom: 0 }}>
                                                {service.items.map(i => i.name).join(", ")}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
