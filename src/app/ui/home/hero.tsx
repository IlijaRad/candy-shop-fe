import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-[calc(100vh-104px)]">
<<<<<<< HEAD
      <Image src="/hero.png" fill alt="Candies" className="object-cover" />
=======
      <Image src="/hero.png" fill objectFit="cover" alt="Candies" />
>>>>>>> 2a3331b28159e959a825c92dea17c587d492438b

      <div className="absolute inset-0 bg-gray-900/80" aria-hidden />

      <div className="absolute top-1/2 left-1/2 w-full max-w-3xl -translate-1/2 px-4">
        <h1 className="text-center text-4xl font-bold tracking-tight text-white lg:text-6xl">
          Novi slatkiši su stigli
        </h1>
        <p className="mt-6 text-center text-xl font-medium text-white lg:mt-4 lg:text-2xl">
          Novi slatkiši su konačno stigli. Pogledaj proizvode iz naše najnovije
          ponude dok su još uvek na stanju!&nbsp;
        </p>
        <button className="mx-auto mt-6 block cursor-pointer rounded-md bg-white px-7.5 py-4 font-medium text-gray-900 lg:mt-8">
          Kupi nove slatkiše
        </button>
      </div>
    </div>
  );
}
