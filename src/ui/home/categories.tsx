import Carousel from "./carousel";
import Category from "./category";

type Category = {
  id: string;
  name: string;
  slug: string;
  default_image_url: string;
};

const categories: Category[] = [
  {
    id: "1",
    name: "Sokovi",
    slug: "juices",
    default_image_url: "/home-page/category-1.png",
  },
  {
    id: "2",
    name: "Energetska pića",
    slug: "energy-drinks",
    default_image_url: "/home-page/category-2.png",
  },
  {
    id: "3",
    name: "Bombone",
    slug: "candies",
    default_image_url: "/home-page/category-3.png",
  },
  {
    id: "4",
    name: "Slatkiši",
    slug: "sweets",
    default_image_url: "/home-page/category-4.png",
  },
];

export default function Categories() {
  return (
    <section className="bg-white">
      <div className="px-4 pt-24 lg:px-8 lg:pt-32 xl:mx-auto xl:max-w-7xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Kategorije
          </h2>
        </div>
        <Carousel className="pb-8 lg:gap-x-6.5">
          {categories.map((category) => (
            <Category category={category} key={category.id} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
