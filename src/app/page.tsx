import HomePageBanner from "./ui/home/banner";
import Categories from "./ui/home/categories";
import Hero from "./ui/home/hero";
import PopularProducts from "./ui/home/popular-products";

export default function Page() {
  return (
    <>
      <Hero />
      <PopularProducts />
      <HomePageBanner
        title="Pokreni se uz našu energiju!"
        body="Snažan, osvežavajući i pun energije. Savršen izbor za one 
        koji žele više!"
        buttonText="Kupi svoju energiju!"
        buttonLink="/"
        backgroundImageLink="/banner-1.png"
        className="px-4 pt-8 pb-16 lg:px-8 lg:pb-24"
      />
      <Categories />
      <HomePageBanner
        title="Zadovoljstvo u svakom zalogaju!"
        body="Slatkiši koji će ti doneti osmeh na lice i ukus koji se pamti. Idealni za svaku priliku!"
        buttonText="Kupi omiljene slatkiše"
        buttonLink="/"
        backgroundImageLink="/banner-2.png"
        className="px-4 pt-8 pb-24 lg:px-8 lg:pb-32"
      />
    </>
  );
}
