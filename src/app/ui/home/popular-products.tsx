"use client";

import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
    default_image_url: "/product-1.png",
  },
  {
    id: "2",
    name: "Monster energy drink java",
    slug: "monster-energy-drink-java",
    price: 500,
    default_image_url: "/product-2.png",
  },
  {
    id: "3",
    name: "Nutella sticks 150g",
    slug: "nutella-sticks-150g",
    price: 200,
    default_image_url: "/product-3.png",
  },
  {
    id: "4",
    name: "Canada dry ginger ale",
    slug: "canada-dry-ginger-ale",
    price: 80,
    default_image_url: "/product-4.png",
  },
  {
    id: "5",
    name: "Hersheys chocolate 100g",
    slug: "hrsheys-chocolate-100g",
    price: 150,
    default_image_url: "/product-5.png",
  },
  {
    id: "6",
    name: "Coca Cola Bottle 250ml",
    slug: "coca-cola-bottle-250ml",
    price: 120,
    default_image_url: "/product-6.png",
  },
];

const DRAG_THRESHOLD = 10;

export default function PopularProducts() {
  const [dragging, setDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragged, setDragged] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setStartX(e.pageX - carouselRef.current!.offsetLeft);
    setScrollLeft(carouselRef.current!.scrollLeft);
    setDragged(false);
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    const x = e.pageX - carouselRef.current!.offsetLeft;
    const move = (x - startX) * 2;
    carouselRef.current!.scrollLeft = scrollLeft - move;
    if (Math.abs(x - startX) > DRAG_THRESHOLD) {
      setDragged(true);
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    setDragging(false);
    if (!dragged) {
      const link = e.target as HTMLElement;
      if (link && link.closest("a")) {
        link.closest("a")!.click();
      }
    }
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    if (dragged) {
      e.preventDefault();
    }
  };

  return (
    <div className="bg-white">
      <div className="px-4 lg:px-8 lg:py-24 py-16">
        <div className="flex justify-between items-center">
          <h2 className="text-gray-900 lg:text-[32px]/8 font-semibold text-2xl">
            Popularni proizvodi
          </h2>
          <Link
            href="/"
            className="text-rose-600 hover:text-rose-800 transition-colors hidden lg:flex gap-x-0.5 items-center font-semibold text-sm"
          >
            Prikaži sve
            <IconArrowNarrowRight size={16} />
          </Link>
        </div>

        <div
          ref={carouselRef}
          className={`relative overflow-x-auto flex gap-x-4 mt-9 ${
            !isTouchDevice ? "snap-none" : "snap-x snap-mandatory"
          } ${
            carouselRef.current &&
            carouselRef.current.scrollWidth > carouselRef.current.clientWidth
              ? dragging
                ? "cursor-grabbing"
                : "cursor-grab"
              : ""
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {popularProducts.map((product) => (
            <Product
              product={product}
              key={product.id}
              onClick={handleLinkClick}
            />
          ))}
        </div>

        <Link
          href="/"
          className="text-rose-600 hover:text-rose-800 transition-colors flex lg:hidden mt-6 gap-x-0.5 items-center font-semibold text-sm"
        >
          Prikaži sve
          <IconArrowNarrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
