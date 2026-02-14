import { client } from './sanity';

// Fetch profile/bio
export async function getProfile() {
  return client.fetch(`
    *[_type == "profile"][0] {
      name,
      title,
      heroHeadlinePrefix,
      heroHeadlineCompany,
      heroHeadlineCompanyUrl,
      headline,
      bio,
      profileImage,
      email,
      phone,
      location,
      resumeURL,
      "github": socialLinks.github,
      "linkedin": socialLinks.linkedin,
      "twitter": socialLinks.twitter,
      "facebook": socialLinks.facebook,
      "instagram": socialLinks.instagram
    }
  `);
}

// Fetch all projects
export async function getProjects() {
  return client.fetch(`
    *[_type == "project"] | order(order asc) {
      title,
      "slug": slug.current,
      description,
      image,
      thumbnail,
      technologies,
      liveUrl,
      githubUrl,
      featured
    }
  `);
}

// Fetch featured projects only
export async function getFeaturedProjects() {
  return client.fetch(`
    *[_type == "project" && featured == true] | order(order asc) {
      title,
      "slug": slug.current,
      description,
      image,
      thumbnail,
      technologies,
      liveUrl,
      githubUrl
    }
  `);
}

// Fetch all experiences
export async function getExperiences() {
  return client.fetch(`
    *[_type == "experience"] | order(startDate desc) {
      company,
      role,
      startDate,
      endDate,
      current,
      description,
      technologies
    }
  `);
}

// Fetch all education
export async function getEducation() {
  return client.fetch(`
    *[_type == "education"] | order(startDate desc) {
      institution,
      degree,
      field,
      startDate,
      endDate,
      grade,
      description
    }
  `);
}

// Fetch all skills with icons
export async function getSkills() {
  return client.fetch(`
    *[_type == "skill"] | order(order asc) {
      name,
      icon,
      category,
      proficiency
    }
  `);
}

// Fetch single project by slug
export async function getProjectBySlug(slug: string) {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      description,
      image,
      thumbnail,
      technologies,
      liveUrl,
      githubUrl,
      featured
    }`,
    { slug }
  );
}
