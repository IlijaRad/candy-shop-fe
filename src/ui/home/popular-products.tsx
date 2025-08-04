import { ProductList } from "@/lib/data/product-list";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import Carousel from "./carousel";
import Product from "./product";

export default function PopularProducts({
  products,
}: {
  products: ProductList;
}) {
  return (
    <div className="bg-white">
      <div className="px-4 pt-24 pb-16 lg:px-8 lg:py-24 lg:pt-32">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900 lg:text-[32px]/8">
            Popularni proizvodi
          </h2>
          <Link
            href="/"
            className="hidden items-center gap-x-0.5 text-sm font-semibold text-rose-600 transition-colors hover:text-rose-800 lg:flex"
          >
            Prikaži sve
            <IconArrowNarrowRight size={16} />
          </Link>
        </div>

        <Carousel className="pb-8">
          {products.data.slice(0, 6).map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </Carousel>

        <Link
          href="/"
          className="mt-6 flex items-center gap-x-0.5 text-sm font-semibold text-rose-600 transition-colors hover:text-rose-800 lg:hidden"
        >
          Prikaži sve
          <IconArrowNarrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
