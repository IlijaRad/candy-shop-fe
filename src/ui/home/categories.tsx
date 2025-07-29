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
    <div className="bg-white">
      <div className="px-4 pt-8 pb-8 lg:px-8 lg:pb-16">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900 lg:text-[32px]/8">
            Kategorije
          </h2>
        </div>
        <Carousel className="pb-8">
          {categories.map((category) => (
            <Category category={category} key={category.id} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
