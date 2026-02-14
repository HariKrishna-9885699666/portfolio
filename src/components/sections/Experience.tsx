import { PortableText } from '@portabletext/react';

// Custom components for PortableText to properly render lists
const portableTextComponents = {
  block: {
    normal: ({ children }: any) => <p style={{ color: '#fff', marginBottom: '10px' }}>{children}</p>,
    h3: ({ children }: any) => <h3 style={{ color: '#FFEFAE', marginTop: '15px', marginBottom: '10px' }}>{children}</h3>,
    blockquote: ({ children }: any) => <blockquote style={{ borderLeft: '3px solid #FFEFAE', paddingLeft: '15px', fontStyle: 'italic', color: 'rgba(255,255,255,0.9)' }}>{children}</blockquote>,
  },
  list: {
    bullet: ({ children }: any) => <ul style={{ color: '#fff', paddingLeft: '20px', marginLeft: '10px', marginBottom: '10px', listStyleType: 'disc' }}>{children}</ul>,
    number: ({ children }: any) => <ol style={{ color: '#fff', paddingLeft: '20px', marginLeft: '10px', marginBottom: '10px', listStyleType: 'decimal' }}>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li style={{ marginBottom: '5px', color: 'rgba(255,255,255,0.9)', listStyleType: 'disc' }}>{children}</li>,
    number: ({ children }: any) => <li style={{ marginBottom: '5px', color: 'rgba(255,255,255,0.9)', listStyleType: 'decimal' }}>{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong style={{ color: '#FFEFAE' }}>{children}</strong>,
    em: ({ children }: any) => <em>{children}</em>,
    code: ({ children }: any) => <code style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '3px', fontSize: '0.9em' }}>{children}</code>,
    link: ({ children, value }: any) => <a href={value.href} target="_blank" rel="noopener noreferrer" style={{ color: '#FFEFAE', textDecoration: 'underline' }}>{children}</a>,
  },
};

interface ExperienceItem {
  company?: string | null;
  role?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  description?: any;
  location?: string | null;
  highlights?: readonly string[] | null;
  current?: boolean | null;
}

interface EducationItem {
  institution?: string | null;
  degree?: string | null;
  fieldOfStudy?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  location?: string | null;
  description?: any;
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
                                    <p>{item.startDate} - {item.current ? 'Present' : item.endDate}</p>
                                </div>
                                <div className="experience-info flex flex-col items-end">
                                    {item.location && <p className="experience-location mb-0" style={{ fontSize: '14px', color: '#fff', opacity: 0.9 }}>{item.location}</p>}
                                    <div className="experience-company" style={{ fontSize: '16px', color: '#FFEFAE' }}>
                                        {item.company || (item as any).slug?.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
                                    </div>
                                </div>
                            </div>
                            <div className="experience-details mt-10">
                                {item.description && (
                                    <div className="mb-10">
                                        <PortableText value={item.description} components={portableTextComponents} />
                                    </div>
                                )}
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
