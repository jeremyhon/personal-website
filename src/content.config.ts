import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const home = defineCollection({
	loader: glob({ base: './src/content/home', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string().optional(),
	}),
});

export const collections = { home };
