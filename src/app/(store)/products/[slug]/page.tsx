import { getProductDetails } from "@/lib/data/product-details";
import { getProductReviews } from "@/lib/data/product-reviews";
import AdditionalInformation from "@/ui/pdp/additional-information";
import QuantityCombobox from "@/ui/pdp/quantity-combobox";
import ProductReviews from "@/ui/pdp/reviews";
import NutritionalTable from "@/ui/pdp/table";
import * as Tabs from "@radix-ui/react-tabs";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandX,
  IconHeart,
  IconStarFilled,
} from "@tabler/icons-react";
import { SearchParams } from "next/dist/server/request/search-params";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: SearchParams;
}) {
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

  const discountPercentage = product.discounted_price
    ? Math.round((1 - product.discounted_price / product.price) * 100)
    : null;

  return (
    <div className="bg-white">
      <div className="px-4 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto flex max-w-7xl flex-col gap-x-8 lg:flex-row">
          <div className="mx-auto flex max-w-[667px] grow flex-col items-center lg:shrink-0">
            <div>
              <Image
                src={product.default_image_url || ""}
                alt={product.name}
                height={400}
                width={400}
              />
            </div>
            <Tabs.Root className="mt-12 w-full" defaultValue="reviews">
              <Tabs.List
                aria-label="Tabs"
                className="flex gap-x-9 overflow-x-auto border-b border-b-gray-200"
              >
                <Tabs.Trigger
                  value="reviews"
                  className="pb-6 text-gray-700 data-[state=active]:border-b data-[state=active]:border-b-pink-600 data-[state=active]:font-semibold data-[state=active]:text-pink-600"
                >
                  Recenzije ({`${reviews.meta.total}`})
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="nutritional_data"
                  className="pb-6 text-gray-700 data-[state=active]:border-b data-[state=active]:border-b-pink-600 data-[state=active]:font-semibold data-[state=active]:text-pink-600"
                >
                  Hranljive vrednosti
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="additional_info"
                  className="pb-6 text-gray-700 data-[state=active]:border-b data-[state=active]:border-b-pink-600 data-[state=active]:font-semibold data-[state=active]:text-pink-600"
                >
                  Dodatne informacije
                </Tabs.Trigger>
              </Tabs.List>

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
          <div className="px-4 lg:px-8">
            <div className="max-w-[517px]">
              <div className="flex">
                <IconStarFilled size={20} className="fill-pink-400" />
                <IconStarFilled size={20} className="fill-pink-400" />
                <IconStarFilled size={20} className="fill-pink-400" />
                <IconStarFilled size={20} className="fill-pink-400" />
                <IconStarFilled size={20} className="fill-gray-300" />
              </div>
              <div className="mt-4 line-clamp-3 text-2xl/8.5 font-bold text-gray-900 lg:text-3xl/10.5">
                {product.name}
              </div>
              <div className="mt-6 flex items-center gap-x-4">
                <div className="text-xl/7 font-medium text-gray-900">
                  {product.discounted_price} RSD
                </div>
                <div className="text-base/7 font-medium text-gray-600 line-through">
                  {product.price} RSD
                </div>
                {discountPercentage ? (
                  <div className="rounded-sm bg-yellow-400/30 px-1.5 text-xs/6 font-medium text-yellow-700">
                    -{discountPercentage}%
                  </div>
                ) : null}
              </div>
              <div className="mt-6 line-clamp-4 w-full max-w-[517px] text-base/7 text-gray-700">
                {product.description}
              </div>
              <div className="mt-6">
                <QuantityCombobox maxQuantity={product.stock} />
              </div>
              <div className="mt-6 flex items-center gap-x-4 lg:mt-8">
                <button className="flex h-12 cursor-pointer items-center justify-center rounded-md border-0 bg-gray-900 px-18.5 font-bold text-white">
                  Dodaj u korpu
                </button>
                <button className="flex size-12 cursor-pointer items-center justify-center">
                  <IconHeart size={24} className="stroke-pink-600" />
                </button>
              </div>
              <div className="mt-10 h-px w-full bg-gray-200"></div>
              <div className="mt-10 text-sm/6 text-gray-900">Podeli</div>
              <div className="mt-1 flex gap-x-2">
                <button className="flex size-10 cursor-pointer items-center justify-center text-gray-600">
                  <IconBrandFacebook stroke={2} />
                </button>
                <button className="flex size-10 cursor-pointer items-center justify-center text-gray-600">
                  <IconBrandInstagram stroke={2} />
                </button>
                <button className="flex size-10 cursor-pointer items-center justify-center text-gray-600">
                  <IconBrandX stroke={2} />
                </button>
                <button className="flex size-10 cursor-pointer items-center justify-center text-gray-600">
                  <IconBrandTiktok stroke={2} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
