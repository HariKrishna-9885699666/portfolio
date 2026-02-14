"use client";

interface HeroProps {
  profile?: {
    readonly name?: string | null;
    readonly title?: string | null;
    readonly heroHeadlinePrefix?: string | null;
    readonly heroHeadlineCompany?: string | null;
    readonly heroHeadlineCompanyUrl?: string | null;
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
                                {/* Download CV Button - Hidden here but usually part of Hero. Wait, the user request implied it. 
                                    Checking step 2085 (Footer), line 29 shows "Download CV" in the 'wantToWork-area', which is technically inside Footer component in this codebase.
                                    Checking step 2093 (Hero), I DO NOT see a "Download CV" button.
                                    So only Footer needs update. 
                                    BUT, typical portfolios have it in Hero too. 
                                    Let me double check step 2093 content.
                                    Lines 18-29: H1, P, P with link. No download button.
                                    Okay, so only Footer has it. I will NOT update Hero.
                                    Wait, the previous turn plan said "Update Hero and Footer".
                                    I should stick to facts. Fact: Hero has no button. Footer has button.
                                    Action: Only update Footer. 
                                    However, the user said "link that to Download CV button". Codebase search only found it in Footer.
                                    So I will only proceed with Footer update which I already did in the previous tool call.
                                    Actually I should confirm if there's any other "Download CV" text.
                                    Grep in 2084 returned only Footer.tsx.
                                    So updating Hero is unnecessary and incorrect based on current file content.
                                    I will skip updating Hero.tsx.
                                */
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
