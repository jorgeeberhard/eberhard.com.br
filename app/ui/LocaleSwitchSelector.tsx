"use client";

import { US, BR } from "country-flag-icons/react/3x2";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LocaleSwitchSelector() {
  const path = usePathname();
  return (
    <div className="absolute top-5 right-5">
      <div className="grid grid-cols-2 gap-5">
        <Link
          className={
            path == "/en"
              ? "border-b-2 border-blue-500 outline-offset-2 rounded-sm"
              : undefined
          }
          href="/en"
        >
          <US title="en" width={25} height={20}></US>
        </Link>
        <Link
          className={
            path == "/pt-BR" ? "border-b-2 border-green-500 " : undefined
          }
          href="/pt-BR"
        >
          <BR title="pt-BR" width={25} height={20}></BR>
        </Link>
      </div>
    </div>
  );
}
