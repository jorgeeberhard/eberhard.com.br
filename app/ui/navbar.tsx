"use client";

import { useTranslations } from "next-intl";

export default function NavBar() {
  const translations = useTranslations("nav_bar");

  return (
    <div className="hidden sm:block px-20 py-3 border-b-4 border-[#F2DEBA]">
      <nav className="mx-auto">
        <div className="flex justify-between mx-auto">
          <a className="px-3 mr-20 hover:text-[#0E5E6F]" href="#home">
            {translations("title")}
          </a>
          <a className="px-3 hover:text-[#0E5E6F]" href="#about">
            {translations("about")}
          </a>
          <a className="px-3 hover:text-[#0E5E6F]" href="#projects">
            {translations("projects")}
          </a>
          <a className="px-3 hover:text-[#0E5E6F]" href="#contact-me">
            {translations("contact")}
          </a>
        </div>
      </nav>
    </div>
  );
}
