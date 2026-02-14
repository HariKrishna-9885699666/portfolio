import { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Expertise } from '@/components/sections/Expertise';
import { Footer } from '@/components/sections/Footer';
import { getProfile, getExperiences, getSkills, getEducation } from '@/lib/queries';
import { urlFor } from '@/lib/sanity';
import { portableTextToText } from '@/lib/portableTextToText';

export async function generateMetadata(): Promise<Metadata> {
  const profile = await getProfile();
  
  if (!profile) return {
    title: "Hari Krishna Anem | Portfolio",
    description: "Senior Full Stack Developer Portfolio"
  };

  const name = profile.name || "Hari Krishna Anem";
  const title = profile.title || "Senior Full Stack Developer";
  const bioExcerpt = portableTextToText(profile.bio).substring(0, 160) || "Senior Full Stack Developer Portfolio";
  
  const ogImage = profile.profileImage 
    ? urlFor(profile.profileImage).width(1200).height(630).url() 
    : "";

  return {
    title: `${name} | ${title}`,
    description: bioExcerpt,
    openGraph: {
      title: `${name} | ${title}`,
      description: bioExcerpt,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: name }] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${name} | ${title}`,
      description: bioExcerpt,
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default async function Home() {
  const profile = await getProfile();
  const experiences = await getExperiences();
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
      </main>
      <Footer profile={profile} />
    </>
  );
}
