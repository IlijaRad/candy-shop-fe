"use client";

import { deleteBannerCookie } from "@/lib/actions/delete-banner-cookie";
import { IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function RegistrationBanner({
  inCookie,
}: {
  inCookie: boolean;
}) {
  const [visible, setVisible] = useState(inCookie);

  useEffect(() => {
    deleteBannerCookie();
  }, []);

  if (!visible) return null;

  return (
    <div className="mt-4 mb-2 flex items-start rounded-md border border-green-700 bg-green-500/20 px-4 py-2 text-sm text-green-700">
      <span className="text-center">
        Tvoj nalog je uspešno kreiran! Prijavi se kako bi nastavio.
      </span>
      <button
        onClick={() => {
          setVisible(false);
        }}
        className="-mt-1.5 -mr-2 cursor-pointer p-2"
      >
        <IconX size={16} className="shrink-0" />
      </button>
    </div>
  );
}
