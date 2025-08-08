import { getProductDetails } from "@/lib/data/product-details";
import { getProductReviews } from "@/lib/data/product-reviews";
import ProductInfo from "@/ui/pdp/product-info";
import ProductTabs from "@/ui/pdp/tabs";

import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = (await params).slug;

  const product = await getProductDetails(slug);

  const title = product?.name || "CandySrb";

  const description =
    product?.description ||
    "CandySrb prodaja slatkiša, energetskih pića i drugih napitaka.";

  const images = product?.default_image_url || undefined;

  return {
    title,
    description,
    alternates: { canonical: `${process.env.FE_APP_URL}/products/${slug}` },
    openGraph: {
      title,
      description,
      images,
    },
    twitter: {
      card: "summary",
      title,
      description,
      images,
    },
  };
}

export default async function Page({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { page } = await searchParams;

  const product = await getProductDetails(slug);
  const reviews = await getProductReviews(
    slug,
    typeof page === "undefined"
      ? "1"
      : typeof page === "string"
        ? page
        : page[0],
  );

  if (!product) notFound();

  return (
    <>
      <div className="bg-white">
        <div className="px-4 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto flex max-w-7xl flex-col gap-x-8 lg:flex-row">
            <div className="mx-auto flex w-full flex-col items-center lg:max-w-[667px] lg:min-w-[500px]">
              <Image
                src={product.default_image_url || ""}
                alt={product.name}
                height={400}
                width={400}
              />
              <ProductInfo
                product={product}
                rating={reviews.average_rating}
                className="mt-16 w-full lg:hidden"
              />
              <ProductTabs product={product} reviews={reviews} />
            </div>
            <ProductInfo
              product={product}
              rating={reviews.average_rating}
              className="hidden w-full max-w-[581px] px-8 lg:block"
            />
          </div>
        </div>
      </div>
    </>
  );
}
