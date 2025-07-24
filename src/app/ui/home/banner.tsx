import clsx from "clsx/lite"; // Import clsx/lite
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
  className,
}: HomePageBanner) {
  return (
    <div className="bg-white">
      <div className={clsx("w-full", className)}>
        <div className="relative h-200.5">
          <Image
            src={backgroundImageLink}
            fill
            alt="Candies"
            className="rounded-lg object-cover"
          />

          <div
            className="absolute inset-0 rounded-lg bg-gray-900/80"
            aria-hidden
          />

          <div className="absolute top-1/2 left-1/2 w-full -translate-1/2 px-4">
            <HeadingElement
              headingLevel={headingLevel || 3}
              className="text-center text-4xl font-extrabold tracking-tight text-white lg:text-6xl"
            >
              {title}
            </HeadingElement>
            <p className="mx-auto mt-6 w-full max-w-3xl text-center text-xl font-medium text-white lg:mt-4 lg:text-2xl">
              {body}
            </p>
            <Link
              href={buttonLink}
              className="mx-auto mt-6 flex h-12.5 w-fit items-center justify-center rounded-md bg-white px-7.5 text-gray-900 lg:mt-8"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
