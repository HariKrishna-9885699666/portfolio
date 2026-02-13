import { createReader } from "@keystatic/core/reader";
import config from "../../keystatic.config";

export const reader = createReader(process.cwd(), config);

// Helper to resolve markdoc content robustly
// Helper to normalize Markdoc nodes into plain objects for reliable client-side serialization
function nodeToPlain(node: any): any {
  if (!node || typeof node !== 'object') return node;
  
  // Extract essential properties to ensure a clean POJO
  const plain: any = {
    type: node.type || 'text',
  };
  
  if (node.attributes) {
    plain.attributes = { ...node.attributes };
  }
  
  if (Array.isArray(node.children)) {
    plain.children = node.children.map(nodeToPlain);
  }
  
  // Tag is sometimes used for custom components
  if (node.tag) {
    plain.tag = node.tag;
  }
  
  return plain;
}

// Helper to resolve markdoc content robustly
async function resolveMarkdoc(fieldPromise: any) {
  if (!fieldPromise) return null;
  try {
    const result = await fieldPromise();
    if (!result) return null;
    
    // Keystatic reader usually returns an array of nodes (for Markdoc fields)
    // or sometimes an object with a 'node' property containing the children.
    let nodes = null;
    
    if (result && typeof result === 'object' && 'node' in result) {
      nodes = (result as any).node?.children || [result.node];
    } else if (Array.isArray(result)) {
      nodes = result;
    } else {
      nodes = [result];
    }
    
    // Ensure we always return a valid array of plain objects, filtered for null/undefined
    const filteredNodes = Array.isArray(nodes) ? nodes.filter(node => node !== null && node !== undefined) : [];
    return filteredNodes.map(nodeToPlain);
  } catch (error) {
    console.error('Error resolving markdoc:', error);
    return null;
  }
}

// Profile
export async function getProfile() {
  const profile = await reader.singletons.profile.read();
  if (!profile) return null;
  
  return {
    ...profile,
    bio: await resolveMarkdoc(profile.bio),
  };
}

// Projects
export async function getProjects() {
  const slugs = await reader.collections.projects.list();
  const projects = await Promise.all(
    slugs.map(async (slug) => {
      const data = await reader.collections.projects.read(slug);
      if (!data) return null;
      
      return { 
        slug, 
        ...data,
        content: await resolveMarkdoc(data.content),
      };
    })
  );
  return projects
    .filter((p): p is NonNullable<typeof p> & { slug: string } => !!p)
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

export async function getFeaturedProjects() {
  const projects = await getProjects();
  return projects.filter((p) => p.featured);
}

// Experience
export async function getExperience() {
  const slugs = await reader.collections.experience.list();
  const items = await Promise.all(
    slugs.map(async (slug) => {
      const data = await reader.collections.experience.read(slug);
      if (!data) return null;
      return { slug, ...data };
    })
  );
  return items
    .filter((i): i is NonNullable<typeof i> => !!i)
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

// Education
export async function getEducation() {
  const slugs = await reader.collections.education.list();
  const items = await Promise.all(
    slugs.map(async (slug) => {
      const data = await reader.collections.education.read(slug);
      if (!data) return null;
      return { slug, ...data };
    })
  );
  return items
    .filter((i): i is NonNullable<typeof i> => !!i)
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

// Skills
export async function getSkills() {
  const slugs = await reader.collections.skills.list();
  const items = await Promise.all(
    slugs.map(async (slug) => {
      const data = await reader.collections.skills.read(slug);
      if (!data) return null;
      return { ...data };
    })
  );
  return items
    .filter((i): i is NonNullable<typeof i> => !!i)
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

// Blog
export async function getPosts() {
  const slugs = await reader.collections.blog.list();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const data = await reader.collections.blog.read(slug);
      if (!data) return null;
      
      return { 
        slug, 
        ...data,
        content: await resolveMarkdoc(data.content),
      };
    })
  );
  return posts.filter((p): p is NonNullable<typeof p> & { slug: string } => !!p && !p.draft);
}
