import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const BlogSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  imageName: z.string().optional(),
  date: z.coerce.date(),
});

export type BlogSchemaType = z.infer<typeof BlogSchema>;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'blog/' }),
  schema: BlogSchema,
});

export const collections = { blog };
