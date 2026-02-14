import { config, fields, collection, singleton } from "@keystatic/core";
const isProd = process.env.NODE_ENV === 'production';

export default config({
  storage: isProd
    ? {
      kind: 'github',
      repo: {
        owner: 'HariKrishna-9885699666',
        name: 'portfolio',
      },
    }
    : {
      kind: 'local',
    },
  singletons: {
    profile: singleton({
      label: "Profile",
      path: "src/content/profile",
      schema: {
        name: fields.text({ label: "Full Name" }),
        title: fields.text({ label: "Job Title" }),
        bio: fields.markdoc({ label: "Bio" }),
        avatar: fields.image({
          label: "Avatar",
          directory: "public/images/profile",
          publicPath: "/images/profile",
        }),
        email: fields.text({ label: "Email" }),
        github: fields.url({ label: "GitHub URL" }),
        linkedin: fields.url({ label: "LinkedIn URL" }),
        twitter: fields.url({ label: "Twitter/X URL" }),
        resumeUrl: fields.url({ label: "Resume URL" }),
        heroHeadlinePrefix: fields.text({ label: "Hero Headline Prefix (e.g., Head of design at)" }),
        heroHeadlineCompany: fields.text({ label: "Hero Headline Company" }),
        heroHeadlineCompanyUrl: fields.url({ label: "Hero Headline Company URL" }),
      },
    }),
    siteSettings: singleton({
      label: "Site Settings",
      path: "src/content/site-settings",
      schema: {
        siteTitle: fields.text({ label: "Site Title" }),
        siteDescription: fields.text({
          label: "Site Description",
          multiline: true,
        }),
        ogImage: fields.image({
          label: "OG Image",
          directory: "public/images/og",
          publicPath: "/images/og",
        }),
      },
    }),
  },
  collections: {
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "src/content/projects/*",
      schema: {
        title: fields.text({ label: "Project Title" }),
        description: fields.text({
          label: "Short Description",
          multiline: true,
        }),
        thumbnail: fields.image({
          label: "Thumbnail",
          directory: "public/images/projects",
          publicPath: "/images/projects",
        }),
        techStack: fields.array(fields.text({ label: "Technology" }), {
          label: "Tech Stack",
          itemLabel: (props) => props.value,
        }),
        liveUrl: fields.url({ label: "Live URL" }),
        githubUrl: fields.url({ label: "GitHub URL" }),
        featured: fields.checkbox({ label: "Featured Project?" }),
        sortOrder: fields.integer({
          label: "Sort Order",
          defaultValue: 0,
        }),
        content: fields.markdoc({
          label: "Detailed Description",
        }),
      },
    }),
    experience: collection({
      label: "Experience",
      slugField: "company",
      path: "src/content/experience/*",
      schema: {
        company: fields.text({ label: "Company Name" }),
        role: fields.text({ label: "Role / Position" }),
        startDate: fields.text({ label: "Start Date (e.g., Jan 2023)" }),
        endDate: fields.text({ label: "End Date (e.g., Present)" }),
        location: fields.text({ label: "Location (e.g., Pune (Remote))" }),
        description: fields.text({
          label: "Description",
          multiline: true,
        }),
        highlights: fields.array(fields.text({ label: "Highlight" }), {
          label: "Key Highlights",
          itemLabel: (props) => props.value,
        }),
        sortOrder: fields.integer({
          label: "Sort Order",
          defaultValue: 0,
        }),
      },
    }),
    education: collection({
      label: "Education",
      slugField: "institution",
      path: "src/content/education/*",
      schema: {
        institution: fields.text({ label: "Institution Name" }),
        degree: fields.text({ label: "Degree" }),
        fieldOfStudy: fields.text({ label: "Field of Study" }),
        startDate: fields.text({ label: "Start Date (e.g., Aug 2009)" }),
        endDate: fields.text({ label: "End Date (e.g., May 2013)" }),
        location: fields.text({ label: "Location" }),
        description: fields.text({
          label: "Description",
          multiline: true,
        }),
        sortOrder: fields.integer({
          label: "Sort Order",
          defaultValue: 0,
        }),
      },
    }),
    skills: collection({
      label: "Expertise",
      slugField: "slug",
      path: "src/content/skills/*",
      schema: {
        slug: fields.text({ label: "Slug (e.g., full-stack-development)" }),
        title: fields.text({ label: "Display Title (e.g., Full-Stack Development)" }),
        highlights: fields.array(fields.text({ label: "Highlight Message" }), {
          label: "Expertise Highlights",
          itemLabel: (props) => props.value,
        }),
        items: fields.array(
          fields.object({
            name: fields.text({ label: "Skill Name" }),
            proficiency: fields.select({
              label: "Proficiency",
              options: [
                { label: "Beginner", value: "beginner" },
                { label: "Intermediate", value: "intermediate" },
                { label: "Advanced", value: "advanced" },
                { label: "Expert", value: "expert" },
              ],
              defaultValue: "intermediate",
            }),
          }),
          {
            label: "Specific Skills (Optional)",
            itemLabel: (props) => props.fields.name.value,
          }
        ),
        sortOrder: fields.integer({
          label: "Sort Order",
          defaultValue: 0,
        }),
      },
    }),
    blog: collection({
      label: "Blog Posts",
      slugField: "title",
      path: "src/content/blog/*",
      schema: {
        title: fields.text({ label: "Post Title" }),
        excerpt: fields.text({ label: "Excerpt", multiline: true }),
        publishedDate: fields.date({ label: "Published Date" }),
        coverImage: fields.image({
          label: "Cover Image",
          directory: "public/images/blog",
          publicPath: "/images/blog",
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value,
        }),
        draft: fields.checkbox({ label: "Draft?" }),
        content: fields.markdoc({
          label: "Post Content",
        }),
      },
    }),
  },
});
