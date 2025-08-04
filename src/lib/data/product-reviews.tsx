import { fetchServerSide } from "@/lib/server-utils";
import "server-only";
import { z } from "zod";

export type Review = z.infer<typeof reviewSchema>;
type ReviewMetadata = z.infer<typeof metadataSchema>;

export type Reviews = {
  reviews: Review[];
  average_rating: number;
  meta: ReviewMetadata;
};

const reviewSchema = z.object({
  id: z.number(),
  product_id: z.number(),
  author_name: z.string(),
  content: z.string(),
  rating: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
});

const metadataSchema = z.object({
  current_page: z.number(),
  total: z.number(),
  per_page: z.number(),
  last_page: z.number(),
});

const schema = z.object({
  reviews: z.array(reviewSchema),
  average_rating: z.number(),
  meta: metadataSchema,
});

export async function getProductReviews(
  slug: string,
  page: string,
): Promise<Reviews> {
  const endpoint = `api/products/${slug}/reviews?page=${page}`;

  const headers: RequestInit["headers"] = {};

  headers["Content-Type"] = "application/json";

  const response = await fetchServerSide<Reviews>(endpoint, schema, {
    headers,
    next: {
      revalidate: 60 * 5,
      tags: ["review"],
    },
  });

  if (response instanceof Response) {
    // If response status is different from 404 we should report this somewhere.
    return {
      reviews: [],
      average_rating: 0,
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
