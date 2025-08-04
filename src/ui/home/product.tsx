import { ProductListItem } from "@/lib/data/product-list";
import Image from "next/image";
import Link from "next/link";

export default function Product({
  product,
  onClick,
}: {
  product: ProductListItem;
  onClick?: (e: React.MouseEvent) => void;
}) {
  return (
    <div className="shrink-0 snap-start">
      <div className="relative isolate">
        <Image
          src={product.default_image_url || ""}
          alt={product.name}
          width={280}
          height={280}
          className="rounded-md"
        />
        <div className="mt-2 text-gray-700">
          <Link href={`/products/${product.slug}`} onClick={onClick}>
            <span className="absolute inset-0 z-10"></span>
            <div className="line-clamp-2 max-w-70">{product.name}</div>
          </Link>
        </div>
      </div>

      <div className="mt-1 text-gray-900">{product.price} RSD</div>
    </div>
  );
}
