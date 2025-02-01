import { useTranslations } from "next-intl";

export default function About() {
  const translations = useTranslations("about");
  return (
    <div className="flex flex-col py-5 px-10 bg-[#F2DEBA]" id="about">
      <h1 className="text-3xl mb-5">{translations("title")}</h1>
      <p className="bg-[#FFEFD6] rounded-md py-5 px-10 shadow-md">
        {translations("description") + " "}
        <a
          className="text-[#0E5E6F] underline font-bold"
          href="https://github.com/jorgeeberhard/"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
}
