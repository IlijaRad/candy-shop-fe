import { fetchServerSide } from "@/lib/server-utils";
import { cache } from "react";
import "server-only";
import { z } from "zod";

export type Product = z.infer<typeof schema>;

const schema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  sku: z.string(),
  price: z.number(),
  discounted_price: z.number().nullable(),
  default_image_url: z.string().nullable(),
  stock: z.number(),
  category_id: z.string().nullable(),
  brand_id: z.string().nullable(),
  description: z.string(),
  product_information: z.object({
    nutritional_values: z
      .object({
        energy: z.string().nullable(),
        fat: z.string().nullable(),
        saturates: z.string().nullable(),
        carbohydrate: z.string().nullable(),
        sugars: z.string().nullable(),
        fibre: z.string().nullable(),
        protein: z.string().nullable(),
        salt: z.string().nullable(),
      })
      .nullable(),
    ingredients: z.string().nullable(),
    allergens: z.string().nullable(),
    country_of_origin: z.string().nullable(),
  }),
});

export const getProductDetails = cache(
  async (slug: string): Promise<Product | null> => {
    const endpoint = `api/products/${slug}`;

    const response = await fetchServerSide<Product>(endpoint, schema, {
      next: {
        revalidate: 60 * 5,
        tags: ["product-details"],
      },
    });

    if (response instanceof Response) {
      return null;
    }

    return response;
  },
);
