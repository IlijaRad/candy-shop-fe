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
    <section className="bg-white">
      <div className="px-4 pt-24 lg:px-8 lg:pt-32 xl:mx-auto xl:max-w-7xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
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

        <Carousel className="pb-8 lg:gap-x-6.5">
          {products.data.slice(0, 6).map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </Carousel>

        <Link
          href="/"
          className="mt-6 mb-8 flex items-center gap-x-0.5 text-sm font-semibold text-rose-600 transition-colors hover:text-rose-800 lg:hidden"
        >
          Prikaži sve
          <IconArrowNarrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
