import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type HomePageBanner = {
  title: string;
  body: string;
  buttonText: string;
  buttonLink: string;
  headingLevel?: number;
  backgroundImageLink: string;
  className?: string;
};

const HeadingElement = ({
  headingLevel = 3,
  className,
  children,
}: {
  headingLevel: number;
  className: string;
  children: ReactNode;
}) => {
  if (headingLevel === 1) return <h1 className={className}>{children}</h1>;
  if (headingLevel === 2) return <h2 className={className}>{children}</h2>;
  if (headingLevel === 3) return <h3 className={className}>{children}</h3>;
  if (headingLevel === 4) return <h4 className={className}>{children}</h4>;
  if (headingLevel === 5) return <h5 className={className}>{children}</h5>;
  if (headingLevel === 6) return <h6 className={className}>{children}</h6>;

  return <h3 className={className}>{children}</h3>;
};

export default function HomePageBanner({
  title,
  body,
  buttonText,
  buttonLink,
  headingLevel,
  backgroundImageLink,
}: HomePageBanner) {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 pt-16 sm:px-6 sm:pt-24 lg:px-8">
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            <Image
              src={backgroundImageLink}
              fill
              alt="Candies"
              className="size-full object-cover object-center"
            />
          </div>

          <div
            className="absolute inset-0 rounded-lg bg-gray-900/80"
            aria-hidden
          />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:px-12 sm:py-40 lg:px-16">
            <HeadingElement
              headingLevel={headingLevel || 3}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              {title}
            </HeadingElement>
            <p className="mt-3 text-xl text-white">{body}</p>
            <Link
              href={buttonLink}
              className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
