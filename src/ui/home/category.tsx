import Image from "next/image";
import Link from "next/link";

type Category = {
  id: string;
  name: string;
  slug: string;
  default_image_url: string;
};

export default function Category({
  category,
  onClick,
}: {
  category: Category;
  onClick?: (e: React.MouseEvent) => void;
}) {
  return (
    <div className="shrink-0 grow-0 snap-start">
      <div className="relative isolate">
        <Image
          src={category.default_image_url}
          alt={category.name}
          width={440}
          height={480}
          className="aspect-[440/480] max-w-75 rounded-md lg:max-w-110"
        />
        <Link href={`/categories/${category.slug}`} onClick={onClick}>
          <span className="absolute inset-0 z-10"></span>
          <span className="absolute inset-x-0 bottom-8 text-center text-2xl font-semibold text-white lg:bottom-12 lg:text-[32px]/8">
            {category.name}
          </span>
        </Link>
      </div>
    </div>
  );
}
