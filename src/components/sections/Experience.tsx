interface ExperienceItem {
  company?: string | null;
  role?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  description?: string | null;
  location?: string | null;
  highlights?: readonly string[] | null;
}

interface EducationItem {
  institution?: string | null;
  degree?: string | null;
  fieldOfStudy?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  location?: string | null;
  description?: string | null;
}

interface ExperienceProps {
  experiences?: ExperienceItem[] | null;
  education?: EducationItem[] | null;
}

export const Experience = ({ experiences, education }: ExperienceProps) => {
    const validExperiences = (experiences || []).filter(Boolean);
    const validEducation = (education || []).filter(Boolean);
    
    return (
        <div id="experience" className="may-about section-padding40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle2 mb-30">
                            <h2>Experience</h2>
                        </div>
                    </div>
{(validExperiences.length > 0 ? validExperiences : [
                        { role: "User Experience Designer", startDate: "Jan 18", endDate: "Feb 20", company: "Yeadi Tech, NY" },
                        { role: "Web Designer", startDate: "Jan 18", endDate: "Feb 20", company: "Yeadi Tech, NY" },
                        { role: "UI Designer", startDate: "Jan 18", endDate: "Feb 20", company: "Yeadi Tech, NY" }
                    ]).map((item, index) => (
                        <div key={index} className="col-xl-12 mb-40">
                            <div className="single-about">
                                <div className="tittle-experience">
                                    <h3>{item.role}</h3>
                                    <p>{item.startDate} - {item.endDate}</p>
                                </div>
                                <div className="experience-info flex flex-col items-end">
                                    {item.location && <p className="experience-location mb-0" style={{ fontSize: '14px', color: '#fff', opacity: 0.9 }}>{item.location}</p>}
                                    <div className="experience-company" style={{ fontSize: '16px', color: '#FFEFAE' }}>
                                        {item.company || (item as any).slug?.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
                                    </div>
                                </div>
                            </div>
                            <div className="experience-details mt-10">
                                {item.description && <p className="mb-10" style={{ color: '#fff' }}>{item.description}</p>}
                                {item.highlights && item.highlights.length > 0 && (
                                    <ul className="list-unstyled">
                                        {item.highlights.map((highlight, hIndex) => (
                                            <li key={hIndex} style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px', marginBottom: '5px' }}>
                                                • {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                    <div className="col-lg-12">
                        <div className="section-tittle2 mb-30 pt-50">
                            <h2>Education</h2>
                        </div>
                    </div>
                    {(validEducation.length > 0 ? validEducation : [
                        { institution: "Interaction Design", startDate: "Jan 18", endDate: "Feb 20", degree: "Degree" },
                        { institution: "Human centered design", startDate: "Jan 18", endDate: "Feb 20", degree: "Degree" }
                    ]).map((item, index) => (
                        <div key={index} className="col-xl-12">
                            <div className="single-about">
                                <div className="tittle-experience">
                                    <h3>{item.degree}</h3>
                                    {item.fieldOfStudy && <p className="mb-0" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>{item.fieldOfStudy}</p>}
                                    <p>{item.startDate} - {item.endDate}</p>
                                </div>
                                <div className="experience-info flex flex-col items-end">
                                    {item.location && <p className="experience-location mb-0" style={{ fontSize: '14px', color: '#fff', opacity: 0.9 }}>{item.location}</p>}
                                    <div className="experience-company" style={{ fontSize: '16px', color: '#FFEFAE' }}>
                                        {item.institution || (item as any).slug?.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
