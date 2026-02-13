import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Expertise } from '@/components/sections/Expertise';
import { Gallery } from '@/components/sections/Gallery';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { getProfile, getFeaturedProjects, getExperience, getSkills, getEducation } from '@/lib/content';

export default async function Home() {
  const profile = await getProfile();
  const projects = await getFeaturedProjects();
  const experiences = await getExperience();
  const education = await getEducation();
  const skills = await getSkills();

  return (
    <>
      <Header />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Experience experiences={experiences} education={education} />
        <Expertise skills={skills} />
        {/* <Gallery projects={projects} /> */}
        {/* <Contact profile={profile} /> */}
      </main>
      <Footer profile={profile} />
    </>
  );
}
