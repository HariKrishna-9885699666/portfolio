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
        <section id="expertise" className="py-20 relative overflow-hidden" style={{ background: '#0a0a0a' }}>
            {/* Background elements for depth */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-[#670000] opacity-5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-[#FFEFAE] opacity-5 blur-[100px] rounded-full"></div>
            </div>

            <div className="container relative z-1">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="section-tittle mb-35"
                    >
                        <h2 style={{ color: '#FFEFAE' }}>My Expertise</h2>
                        <div className="w-20 h-1 bg-[#670000] mx-auto rounded-full mt-4"></div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                    {validSkills.map((skill, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <motion.div 
                                className="group relative h-full backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300"
                                style={{ 
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                }}
                                whileHover={{ 
                                    y: -5,
                                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                                    borderColor: 'rgba(255, 239, 174, 0.2)',
                                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)'
                                }}
                            >
                                <div 
                                    className="mb-6 p-4 rounded-full transition-transform duration-300 group-hover:scale-110"
                                    style={{
                                        background: 'rgba(255, 239, 174, 0.05)',
                                        border: '1px solid rgba(255, 239, 174, 0.1)',
                                        width: '80px',
                                        height: '80px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <div className="relative w-10 h-10 md:w-12 md:h-12">
                                        <img 
                                            src={urlFor(skill.icon).width(120).url()} 
                                            alt={skill.name || 'Skill'} 
                                            className="w-full h-full object-contain filter drop-shadow-lg"
                                        />
                                    </div>
                                </div>
                                
                                <h3 className="text-lg md:text-xl font-medium tracking-wide" style={{ color: '#f0f0f0' }}>
                                    {skill.name}
                                </h3>
                            </motion.div>
                        </motion.div>
                    ))}
                    
                    {validSkills.length === 0 && (
                        <div className="col-span-full text-center py-20">
                            <p className="text-gray-500">No skills found. Add them in Sanity Studio.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
