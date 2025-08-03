import { fetchServerSide } from "@/lib/server-utils";
import "server-only";
import { z } from "zod";

export type ProductListItem = z.infer<typeof productListItemSchema>;
type ProductListMetadata = z.infer<typeof metadataSchema>;

export type ProductList = {
  data: ProductListItem[];
  meta: ProductListMetadata;
};

const productListItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  sku: z.string(),
  price: z.number(),
  discounted_price: z.number().nullable(),
  stock: z.number(),
  default_image_url: z.string().nullable(),
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

const metadataSchema = z.object({
  current_page: z.number(),
  total: z.number(),
  per_page: z.number(),
  last_page: z.number(),
});

const schema = z.object({
  data: z.array(productListItemSchema),
  meta: metadataSchema,
});

export async function getProductList(): Promise<ProductList> {
  const endpoint = `api/products/`;

  const headers: RequestInit["headers"] = {};

  headers["Content-Type"] = "application/json";

  const response = await fetchServerSide<ProductList>(endpoint, schema, {
    headers,
    next: {
      revalidate: 60 * 5,
      tags: ["product-list", "products"],
    },
  });

  if (response instanceof Response) {
    // If response status is different from 404 we should report this somewhere.
    return {
      data: [],
      meta: {
        current_page: 1,
        total: 0,
        per_page: 0,
        last_page: 0,
      },
    };
  }

  return response;
}
