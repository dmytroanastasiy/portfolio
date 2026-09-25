import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";


/* =========================================
   WORKS
========================================= */

const works = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/works",
  }),

  schema: ({ image }) =>
    z.object({
      /* Required work fields */
      title: z.string(),

      description: z.string(),

      thumbnail: image(),

      link: z
        .string()
        .url()
        .optional(),

      order: z.number(),


      /* Project page type */
      template: z
        .enum([
          "default",
          "research",
          "generation-ship",
          "miles-and-meals",
        ])
        .default("default"),


      /* Optional case-study metadata */
      year: z
        .string()
        .optional(),

      type: z
        .string()
        .optional(),

      role: z
        .string()
        .optional(),

      figjamUrl: z
        .string()
        .url()
        .optional(),

      tags: z
        .array(z.string())
        .optional(),
    }),
});


/* =========================================
   SKILLS
========================================= */

const skills = defineCollection({
  loader: file(
    "src/content/skills/skills.json"
  ),

  schema: z.object({
    id: z.string(),

    name: z.string(),

    order: z.number(),
  }),
});


/* =========================================
   EXPORT COLLECTIONS
========================================= */

export const collections = {
  works,
  skills,
};