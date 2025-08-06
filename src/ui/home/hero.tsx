import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/home-page/hero.png"
          fill
          alt="Candies"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-gray-900/80" aria-hidden />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-58 text-center sm:py-77 lg:px-0">
        <h1 className="text-center text-4xl font-bold tracking-tight text-white lg:text-6xl">
          Novi slatkiši su stigli
        </h1>
        <p className="mt-6 text-center text-xl text-white lg:mt-4 lg:text-2xl">
          Novi slatkiši su konačno stigli. Pogledaj proizvode iz naše najnovije
          ponude dok su još uvek na stanju!&nbsp;
        </p>
        <button className="mt-6 block cursor-pointer rounded-md bg-white px-8 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-100 lg:mt-8">
          Kupi nove slatkiše
        </button>
      </div>
    </div>
  );
}
