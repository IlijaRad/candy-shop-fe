"use client";

import { deleteCookie } from "@/lib/actions/delete-cookie";
import { CHANGED_PASSWORD_BANNER_COOKIE_NAME } from "@/lib/defintions";
import { IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function ChangedPasswordBanner({
  inCookie,
}: {
  inCookie: boolean;
}) {
  const [visible, setVisible] = useState(inCookie);

  useEffect(() => {
    deleteCookie(CHANGED_PASSWORD_BANNER_COOKIE_NAME);
  }, []);

  if (!visible) return null;

  return (
    <div className="mt-4 mb-2 flex grow-0 items-center rounded-md border border-blue-700 bg-blue-500/20 px-4 py-2 text-sm text-blue-700">
      <div className="mx-auto">Lozinka uspešno promenjena.</div>
      <button
        onClick={() => {
          setVisible(false);
        }}
        className="-mt-1.5 -mr-2 grow-0 cursor-pointer p-2"
      >
        <IconX size={16} className="shrink-0" />
      </button>
    </div>
  );
}
