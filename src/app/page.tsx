import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-[calc(100vh-104px)]">
      <div className="relative size-full">
        <Image src="/hero.png" fill objectFit="cover" alt="Candies" />
      </div>

      <div className="absolute inset-0 bg-[#101828]/80" aria-hidden />

      <div className="absolute left-1/2 top-1/2 -translate-1/2 w-full max-w-3xl px-4">
        <h1 className="text-white text-center text-4xl lg:text-6xl tracking-tight font-bold">
          Novi slatkiši su stigli
        </h1>
        <p className="text-white text-xl lg:text-2xl mt-6 lg:mt-4 font-medium text-center">
          Novi slatkiši su konačno stigli. Pogledaj proizvode iz naše najnovije
          ponude dok su još uvek na stanju!&nbsp;
        </p>
        <button className="font-medium block mx-auto mt-6 lg:mt-8 px-[30px] py-4 bg-white text-gray-900 rounded-md">
          Kupi nove slatkiše
        </button>
      </div>
    </div>
  );
}
