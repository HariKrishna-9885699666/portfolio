"use client";

interface HeroProps {
  profile?: {
    readonly name?: string | null;
    readonly title?: string | null;
    readonly heroHeadlinePrefix?: string | null;
    readonly heroHeadlineCompany?: string | null;
    readonly heroHeadlineCompanyUrl?: string | null;
    readonly github?: string | null;
    readonly linkedin?: string | null;
    readonly twitter?: string | null;
    readonly email?: string | null;
  } | null;
}

export const Hero = ({ profile }: HeroProps) => {
    return (
        <div id="home" className="slider-area">
            <div className="single-slider slider-height d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12 col-lg-10 col-md-10 col-sm-10">
                            {/* Hero Caption */}
                            <div className="hero__caption">
                                <h1>{profile?.name || "Jonson."}</h1>
                                <p>{profile?.title || "Digital Product Designer"}</p>
                                <p className="cd-headline letters scale">{profile?.heroHeadlinePrefix || "Head of design at"} 
                                    <a href={profile?.heroHeadlineCompanyUrl || "#"} className="cd-words-wrapper" target="_blank" rel="noopener noreferrer">
                                        <b className="is-visible">{profile?.heroHeadlineCompany || "Carnera Technology"}</b>
                                    </a>
                                </p>
                                
                                <div className="hero-social-links mt-30">
                                    {profile?.github && (
                                        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="mr-20" style={{ fontSize: '24px', color: '#333', marginRight: '20px' }}>
                                            <i className="fab fa-github"></i>
                                        </a>
                                    )}
                                    {profile?.linkedin && (
                                        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="mr-20" style={{ fontSize: '24px', color: '#0077b5', marginRight: '20px' }}>
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    )}
                                    {profile?.twitter && (
                                        <a href={profile.twitter} target="_blank" rel="noopener noreferrer" className="mr-20" style={{ fontSize: '24px', color: '#1da1f2', marginRight: '20px' }}>
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    )}
                                    {profile?.email && (
                                        <a href={`mailto:${profile.email}`} style={{ fontSize: '24px', color: '#ea4335' }}>
                                            <i className="fas fa-envelope"></i>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

