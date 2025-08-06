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
    <Link
      href={`/categories/${category.slug}`}
      onClick={onClick}
      className="relative flex h-77.5 w-71 shrink-0 snap-start p-6"
    >
      <div className="absolute inset-0">
        <Image
          src={category.default_image_url}
          alt={category.name}
          fill
          className="size-full rounded-md"
        />
      </div>
      <span className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
      <div className="relative mx-auto mt-auto text-center text-xl font-bold text-white">
        {category.name}
      </div>
    </Link>
  );
}
