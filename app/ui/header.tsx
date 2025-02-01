import Image from "next/image";
import profilePic from "@/public/profile-picture.jpg";
import { useTranslations } from "next-intl";

export default function Header() {
  const translations = useTranslations("header");
  return (
    <div
      className="flex flex-col place-items-center gap-4 py-5 bg-[#FFEFD6] sm:grid sm:grid-cols-2"
      id="home"
    >
      <div className="text-3xl">
        <h1>{translations("title")}</h1>
        <p>
          {translations("subtitle") + " "}
          <span className="underline">{translations("underline")}</span>
        </p>
      </div>
      <Image
        className="rounded-full"
        src={profilePic}
        width={300}
        height={300}
        alt="Profile Picture"
      />
    </div>
  );
}
