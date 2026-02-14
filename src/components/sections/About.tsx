import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/sanity';

// Custom components for PortableText to properly render lists and formatting
const portableTextComponents = {
  block: {
    normal: ({ children }: any) => <p style={{ color: '#635c5c', marginBottom: '10px' }}>{children}</p>,
    h1: ({ children }: any) => <h1 style={{ color: '#670000', marginTop: '20px', marginBottom: '15px' }}>{children}</h1>,
    h2: ({ children }: any) => <h2 style={{ color: '#670000', marginTop: '20px', marginBottom: '15px' }}>{children}</h2>,
    h3: ({ children }: any) => <h3 style={{ color: '#670000', marginTop: '15px', marginBottom: '10px' }}>{children}</h3>,
    blockquote: ({ children }: any) => <blockquote style={{ borderLeft: '3px solid #670000', paddingLeft: '15px', fontStyle: 'italic', color: '#635c5c' }}>{children}</blockquote>,
  },
  list: {
    bullet: ({ children }: any) => <ul style={{ color: '#635c5c', paddingLeft: '20px', marginLeft: '10px', marginBottom: '10px', listStyleType: 'disc' }}>{children}</ul>,
    number: ({ children }: any) => <ol style={{ color: '#635c5c', paddingLeft: '20px', marginLeft: '10px', marginBottom: '10px', listStyleType: 'decimal' }}>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li style={{ marginBottom: '5px', color: '#635c5c', listStyleType: 'disc' }}>{children}</li>,
    number: ({ children }: any) => <li style={{ marginBottom: '5px', color: '#635c5c', listStyleType: 'decimal' }}>{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong style={{ color: '#670000' }}>{children}</strong>,
    em: ({ children }: any) => <em>{children}</em>,
    code: ({ children }: any) => <code style={{ background: 'rgba(0, 0, 0, 0.05)', padding: '2px 6px', borderRadius: '3px', fontSize: '0.9em' }}>{children}</code>,
    link: ({ children, value }: any) => <a href={value.href} target="_blank" rel="noopener noreferrer" style={{ color: '#670000', textDecoration: 'underline' }}>{children}</a>,
  },
};

interface AboutProps {
  profile?: {
    readonly bio?: any;
    readonly profileImage?: any;
  } | null;
}

export const About = ({ profile }: AboutProps) => {
    return (
        <section id="about" className="about-area section-padding40">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-10">
                        <div className="about-caption mb-50">
                            {/* Section Tittle */}
                            <div className="section-tittle mb-35">
                                <h2>About</h2>
                            </div>
                            <div className="bio-content">
                                {profile?.bio ? (
                                    <PortableText value={profile.bio} components={portableTextComponents} />
                                ) : (
                                    <p>-</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-img">
                            {profile?.profileImage ? (
                                <img 
                                    src={urlFor(profile.profileImage).width(600).url()} 
                                    alt="Profile" 
                                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                                />
                            ) : (
                                <div style={{ 
                                    width: '100%', 
                                    height: '400px', 
                                    background: '#1c1c1c', 
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#666'
                                }}>
                                    No image uploaded
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
