import { getUser } from "@/lib/actions/user";
import * as Dialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { IconMenu2, IconUser, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import MobileLogOutButton from "./mobile-log-out-button";

const MobileMenuButton = async () => {
  const user = await getUser();
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className="-m-2 cursor-pointer rounded-md p-2 text-gray-400 transition-colors hover:bg-gray-100"
        aria-label="Main Menu"
      >
        <IconMenu2 />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-25 transition-opacity duration-300 ease-linear" />

        <Dialog.Content className="data-[state=open]:animate-slideFromLeft data-[state=closed]:animate-slideToLeft fixed inset-0 z-40 flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
          <VisuallyHidden asChild>
            <Dialog.Title>Main Menu</Dialog.Title>
          </VisuallyHidden>

          <Dialog.Close
            className="absolute top-4.25 right-2.5 inline-flex size-10 cursor-pointer items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100"
            aria-label="Close Menu"
          >
            <IconX />
          </Dialog.Close>
          {user ? (
            <div className="flex items-center gap-x-4 pt-6 pl-2.5">
              <div className="flex items-center justify-center rounded-full border border-gray-300 p-1 text-gray-700">
                <IconUser size={32} stroke={1.5} />
              </div>
              <div className="max-w-50 truncate text-base font-medium text-wrap text-gray-700">
                {user.email}
              </div>
            </div>
          ) : null}
          <div
            className={twMerge(
              "border-b border-gray-200 px-4 pb-6",
              user ? "pt-10" : "pt-12",
            )}
          >
            <div className="font-medium text-gray-900">Kategorije</div>
            <ul className="mt-6 flex flex-col gap-y-6">
              <li>
                <Dialog.Trigger asChild>
                  <Link
                    href=""
                    className="block w-full text-gray-600 transition-colors hover:text-gray-900"
                    prefetch={false}
                  >
                    Sokovi
                  </Link>
                </Dialog.Trigger>
              </li>
              <li>
                <Dialog.Trigger asChild>
                  <Link
                    href=""
                    className="block w-full text-gray-600 transition-colors hover:text-gray-900"
                    prefetch={false}
                  >
                    Energetska pića
                  </Link>
                </Dialog.Trigger>
              </li>
              <li>
                <Dialog.Trigger asChild>
                  <Link
                    href=""
                    className="block w-full text-gray-600 transition-colors hover:text-gray-900"
                    prefetch={false}
                  >
                    Bombone
                  </Link>
                </Dialog.Trigger>
              </li>
              <li>
                <Dialog.Trigger asChild>
                  <Link
                    href=""
                    className="block w-full text-gray-600 transition-colors hover:text-gray-900"
                    prefetch={false}
                  >
                    Slatkiši
                  </Link>
                </Dialog.Trigger>
              </li>
            </ul>
          </div>
          {!user ? (
            <div className="px-4 pt-8">
              <Dialog.Trigger asChild>
                <Link
                  href="/register"
                  className="block cursor-pointer rounded-md border border-gray-900 bg-gray-900 py-2 text-center font-medium text-white transition-colors hover:bg-gray-800"
                  prefetch={false}
                >
                  Registruj se
                </Link>
              </Dialog.Trigger>
              <Dialog.Trigger asChild>
                <Link
                  href="/login"
                  className="mt-6 block cursor-pointer rounded-md border border-gray-400 bg-white py-2 text-center font-medium text-gray-900 transition-colors hover:bg-gray-100"
                  prefetch={false}
                >
                  Prijavi se
                </Link>
              </Dialog.Trigger>
            </div>
          ) : (
            <MobileLogOutButton />
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MobileMenuButton;
