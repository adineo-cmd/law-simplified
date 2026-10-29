import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guides = defineCollection({
  loader: glob({ base: './src/content/guides', pattern: '**/*.mdx' }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    topic: z.enum(['consumer', 'housing', 'work', 'digital', 'civic', 'family', 'money']),
    shortVersion: z.string(),
    updated: z.coerce.date(),
    readTime: z.number(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    tags: z.array(z.string()).default([]),
    pocket: z.array(z.string()).default([]),
    sources: z
      .array(
        z.object({
          label: z.string(),
          url: z.url().optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = { guides };
