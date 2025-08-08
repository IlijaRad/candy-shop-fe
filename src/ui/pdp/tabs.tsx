"use client";

import { Product } from "@/lib/data/product-details";
import { Reviews } from "@/lib/data/product-reviews";
import AdditionalInformation from "@/ui/pdp/additional-information";
import ProductReviews from "@/ui/pdp/reviews";
import NutritionalTable from "@/ui/pdp/table";
import * as Tabs from "@radix-ui/react-tabs";
import { useEffect, useRef, useState } from "react";

const tabsMap = {
  reviews: "Recenzije",
  nutritional_data: "Hranljive vrednosti",
  additional_info: "Dodatne informacije",
};

export default function ProductTabs({
  product,
  reviews,
}: {
  product: Product;
  reviews: Reviews;
}) {
  const [activeTab, setActiveTab] = useState("reviews");
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const el = triggerRefs.current[activeTab];
    const indicator = indicatorRef.current;

    if (el && indicator) {
      const { offsetLeft, offsetWidth } = el;
      indicator.style.left = `${offsetLeft}px`;
      indicator.style.width = `${offsetWidth}px`;
    }
  }, [activeTab]);

  return (
    <Tabs.Root
      className="mt-12 w-full"
      value={activeTab}
      onValueChange={setActiveTab}
    >
      <div className="overflow-x-auto pb-8 sm:pb-0">
        <Tabs.List
          aria-label="Tabs"
          className="relative flex w-full gap-x-6 border-b border-b-gray-200 lg:gap-x-9"
        >
          {Object.entries(tabsMap).map(([key, label]) => {
            return (
              <Tabs.Trigger
                key={key}
                value={key}
                ref={(el) => {
                  triggerRefs.current[key] = el;
                }}
                className={`relative shrink-0 cursor-pointer pb-6 text-sm font-medium data-[state=active]:text-pink-600`}
              >
                {key === "reviews" ? (
                  <>
                    {label} ({reviews.meta.total})
                  </>
                ) : (
                  label
                )}
              </Tabs.Trigger>
            );
          })}
          <span
            ref={indicatorRef}
            className="absolute bottom-0 left-0 h-px w-23.5 bg-pink-600 transition-all duration-300"
          />
        </Tabs.List>
      </div>

      <Tabs.Content value="reviews">
        <ProductReviews reviews={reviews} />
      </Tabs.Content>

      <Tabs.Content value="nutritional_data">
        <NutritionalTable {...product.product_information.nutritional_values} />
      </Tabs.Content>

      <Tabs.Content value="additional_info">
        <AdditionalInformation
          allergens={product.product_information.allergens}
          country_of_origin={product.product_information.country_of_origin}
          ingredients={product.product_information.ingredients}
        />
      </Tabs.Content>
    </Tabs.Root>
  );
}
