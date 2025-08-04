"use client";

import { IconShare } from "@tabler/icons-react";

export default function ShareButtonMobile({ url }: { url: string }) {
  const sharePage = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url,
        });
      } catch {}
    } else {
      alert("Your device does not support sharing.");
    }
  };

  return (
    <button
      onClick={sharePage}
      className="flex size-10 cursor-pointer items-center justify-center text-gray-600/80 md:hidden"
    >
      <IconShare />
    </button>
  );
}
