import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import ExternalLink from "./components/external-link";

export default function Footer() {
  return (
    <div className="bg-gray-900">
      <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-32 xl:mx-auto xl:max-w-7xl">
        <div className="flex flex-col items-center gap-y-6 text-white">
          <Link href="/" className="mt-2">
            <Image src="/logo.png" width={64} height={62} alt="CandySrb logo" />
          </Link>
          <div className="flex flex-wrap justify-center gap-6 px-6 text-sm *:transition-colors *:hover:text-gray-300">
            <Link href="/">Sokovi</Link>
            <Link href="/">Energetska pića</Link>
            <Link href="/">Bombone</Link>
            <Link href="/">Slatkiši</Link>
            <Link href="/">Politika Privatnosti</Link>
            <Link href="/">Uslovi isporuke</Link>
          </div>
          <div className="flex gap-x-2">
            <ExternalLink
              href="#"
              aria-label="CandySrb X"
              className="flex size-10 items-center justify-center rounded-md bg-gray-900 transition-colors hover:bg-gray-800"
            >
              <IconBrandX stroke={1.5} />
            </ExternalLink>
            <ExternalLink
              href="#"
              aria-label="CandySrb Facebook"
              className="flex size-10 items-center justify-center rounded-md bg-gray-900 transition-colors hover:bg-gray-800"
            >
              <IconBrandFacebook stroke={1.5} />
            </ExternalLink>
            <ExternalLink
              href="#"
              aria-label="CandySrb Instagram"
              className="flex size-10 items-center justify-center rounded-md bg-gray-900 transition-colors hover:bg-gray-800"
            >
              <IconBrandInstagram stroke={1.5} />
            </ExternalLink>
            <ExternalLink
              href="#"
              aria-label="CandySrb Tiktok"
              className="flex size-10 items-center justify-center rounded-md bg-gray-900 transition-colors hover:bg-gray-800"
            >
              <IconBrandTiktok stroke={1.5} />
            </ExternalLink>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} CandySrb. Sva prava zadržana.
          </div>
        </div>
      </div>
    </div>
  );
}
