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
      <div className="group relative isolate max-w-45">
        <Image
          src={product.default_image_url || ""}
          alt={product.name}
          width={180}
          height={180}
          className="rounded-md transition-opacity group-hover:opacity-75"
        />
        <div className="mt-2 text-gray-700">
          <Link href={`/products/${product.slug}`} onClick={onClick}>
            <span className="absolute inset-0 z-10"></span>
            <div className="line-clamp-2">{product.name}</div>
          </Link>
        </div>
      </div>

      <div className="mt-1 text-gray-900">{product.price} RSD</div>
    </div>
  );
}
