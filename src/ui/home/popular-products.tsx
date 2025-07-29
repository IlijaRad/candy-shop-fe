import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import Carousel from "./carousel";
import Product from "./product";

type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  default_image_url: string;
};

const popularProducts: Product[] = [
  {
    id: "1",
    name: "Monster energy drink black",
    slug: "monster-energy-drink-black",
    price: 300,
    default_image_url: "/home-page/product-1.png",
  },
  {
    id: "2",
    name: "Monster energy drink java",
    slug: "monster-energy-drink-java",
    price: 500,
    default_image_url: "/home-page/product-2.png",
  },
  {
    id: "3",
    name: "Nutella sticks 150g",
    slug: "nutella-sticks-150g",
    price: 200,
    default_image_url: "/home-page/product-3.png",
  },
  {
    id: "4",
    name: "Canada dry ginger ale",
    slug: "canada-dry-ginger-ale",
    price: 80,
    default_image_url: "/home-page/product-4.png",
  },
  {
    id: "5",
    name: "Hersheys chocolate 100g",
    slug: "hrsheys-chocolate-100g",
    price: 150,
    default_image_url: "/home-page/product-5.png",
  },
  {
    id: "6",
    name: "Coca Cola Bottle 250ml",
    slug: "coca-cola-bottle-250ml",
    price: 120,
    default_image_url: "/home-page/product-6.png",
  },
];

export default function PopularProducts() {
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
          {popularProducts.map((product) => (
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
