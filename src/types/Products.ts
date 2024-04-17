import { z } from 'zod';

export const ProductSchema = z.object({
    id: z.number(),
    title: z.string(),
    price: z.number(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    rating: z.object({
        rate: z.number(),
        count: z.number(),
    }),
});

export type ProductType = z.infer<typeof ProductSchema>;
export type ProductsType = ProductType[];
export type ProductTypeCart = ProductType & { quantity: number };
export type ProductsTypeCart = ProductTypeCart[];
export type ProductModalType = ProductType & { procentaje: number };
