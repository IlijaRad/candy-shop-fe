import { getProductList } from "@/lib/data/product-list";
import HomePageBanner from "@/ui/home/banner";
import Categories from "@/ui/home/categories";
import Hero from "@/ui/home/hero";
import PopularProducts from "@/ui/home/popular-products";

export default async function Page() {
  const products = await getProductList();

  return (
    <>
      <Hero />
      <PopularProducts products={products} />
      <HomePageBanner
        title="Pokreni se uz našu energiju!"
        body="Snažan, osvežavajući i pun energije. Savršen izbor za sve koji žele više snage, više fokusa i više uzbuđenja u svakom gutljaju!"
        buttonText="Kupi svoju energiju"
        buttonLink="/"
        backgroundImageLink="/home-page/banner-1.png"
      />
      <Categories />
      <HomePageBanner
        title="Zadovoljstvo u svakom zalogaju!"
        body="Slatkiši koji će ti doneti osmeh na lice i ukus koji se pamti. Idealni za svaku priliku!"
        buttonText="Kupi omiljene slatkiše"
        buttonLink="/"
        backgroundImageLink="/home-page/banner-2.png"
      />
      <div className="mt-24 lg:mt-32"></div>
    </>
  );
}
