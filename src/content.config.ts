import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

// WORKS — one markdown file per project, real body content used for the
// long description (not crammed into frontmatter like the old project did).
const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(), // short card blurb
      thumbnail: image(), // validated at build time — no more "missing image" surprises
      link: z.string().url().optional(),
      order: z.number(),
    }),
});

// SKILLS — this is data, not page-like content, so it lives in a JSON file
// and uses the file() loader instead of glob(). This is the direct fix for
// "Skills content collection should have been a JSON file."
const skills = defineCollection({
  loader: file('src/content/skills/skills.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    order: z.number(),
  }),
});

export const collections = { works, skills };
