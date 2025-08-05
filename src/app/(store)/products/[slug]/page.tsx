import { getProductDetails } from "@/lib/data/product-details";
import { getProductReviews } from "@/lib/data/product-reviews";
import AdditionalInformation from "@/ui/pdp/additional-information";
import ProductInfo from "@/ui/pdp/product-info";
import ProductReviews from "@/ui/pdp/reviews";
import NutritionalTable from "@/ui/pdp/table";
import * as Tabs from "@radix-ui/react-tabs";
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
              <Tabs.Root className="mt-12 w-full" defaultValue="reviews">
                <div className="overflow-x-auto pb-8 sm:pb-0">
                  <Tabs.List
                    aria-label="Tabs"
                    className="flex w-full gap-x-6 border-b border-b-gray-200 lg:gap-x-9"
                  >
                    <Tabs.Trigger
                      value="reviews"
                      className="shrink-0 pb-6 text-sm text-gray-700 data-[state=active]:border-b data-[state=active]:border-b-pink-600 data-[state=active]:font-semibold data-[state=active]:text-pink-600"
                    >
                      Recenzije ({`${reviews.meta.total}`})
                    </Tabs.Trigger>
                    <Tabs.Trigger
                      value="nutritional_data"
                      className="shrink-0 pb-6 text-sm text-gray-700 data-[state=active]:border-b data-[state=active]:border-b-pink-600 data-[state=active]:font-semibold data-[state=active]:text-pink-600"
                    >
                      Hranljive vrednosti
                    </Tabs.Trigger>
                    <Tabs.Trigger
                      value="additional_info"
                      className="shrink-0 pb-6 text-sm text-gray-700 data-[state=active]:border-b data-[state=active]:border-b-pink-600 data-[state=active]:font-semibold data-[state=active]:text-pink-600"
                    >
                      Dodatne informacije
                    </Tabs.Trigger>
                  </Tabs.List>
                </div>

                <Tabs.Content value="reviews">
                  <ProductReviews reviews={reviews} />
                </Tabs.Content>

                <Tabs.Content value="nutritional_data">
                  <NutritionalTable
                    {...product.product_information.nutritional_values}
                  />
                </Tabs.Content>

                <Tabs.Content value="additional_info">
                  <AdditionalInformation
                    allergens={product.product_information.allergens}
                    country_of_origin={
                      product.product_information.country_of_origin
                    }
                    ingredients={product.product_information.ingredients}
                  />
                </Tabs.Content>
              </Tabs.Root>
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
