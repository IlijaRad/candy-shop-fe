import Image from "next/image";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  default_image_url: string;
};

export default function Product({ product }: { product: Product }) {
  return (
    <div className="shrink-0 snap-start">
      <div className="isolate relative">
        <Image
          src={product.default_image_url}
          alt={product.name}
          height={280}
          width={280}
          className="rounded-md"
        />
        <div className="mt-2 text-gray-700">
          <Link draggable="false" href={`/products/${product.slug}`}>
            <span className="absolute inset-0 z-10"></span>
            {product.name}
          </Link>
        </div>
      </div>

      <div className="mt-1 text-gray-900">{product.price} RSD</div>
    </div>
  );
}
