"use client";

import { motion } from 'framer-motion';
import { urlFor } from '@/lib/sanity';

interface SkillItem {
  readonly name?: string | null;
  readonly icon?: any;
  readonly category?: string | null;
}

interface ExpertiseProps {
  skills?: SkillItem[] | null;
}

export const Expertise = ({ skills }: ExpertiseProps) => {
    const validSkills = skills?.filter(skill => skill.icon) || [];

    return (
        <div id="expertise" className="our-services pt-top section-bg1" style={{ overflow: 'hidden' }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-tittle mb-75 text-center">
                            <h2>My Expertise</h2>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    {validSkills.map((skill, index) => (
                        <motion.div 
                            key={index} 
                            className="col-lg-3 col-md-4 col-sm-6 col-6 mb-30"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <motion.div 
                                className="single-services text-center"
                                whileHover={{ 
                                    scale: 1.1, 
                                    rotateY: 15,
                                    rotateX: -15,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                                }}
                                style={{ 
                                    background: '#1c1c1c', 
                                    padding: '30px 20px', 
                                    borderRadius: '16px',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    perspective: '1000px',
                                    cursor: 'pointer',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease-out'
                                }}
                            >
                                <div className="services-icon mb-20" style={{ width: '60px', height: '60px', position: 'relative' }}>
                                    <img 
                                        src={urlFor(skill.icon).width(120).url()} 
                                        alt={skill.name || 'Skill'} 
                                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    />
                                </div>
                                <div className="services-cap">
                                    <h5 style={{ color: '#FFEFAE', marginBottom: '5px', fontSize: '18px', fontWeight: '500' }}>
                                        {skill.name}
                                    </h5>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                    
                    {validSkills.length === 0 && (
                        <div className="col-12 text-center">
                            <p style={{ color: '#666' }}>Upload skill icons in Sanity Studio to see them here.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
