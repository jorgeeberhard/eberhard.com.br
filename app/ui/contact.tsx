import { useTranslations } from "next-intl";

export default function Contact() {
  const translations = useTranslations("contact");

  return (
    <div className="flex flex-col py-5 px-10 bg-[#FFEFD6]" id="contact-me">
      <h1 className="text-3xl mb-5">{translations("title")}</h1>
      <p>
        Whatsapp:{" "}
        <a className="hover:text-[#0E5E6F]" href="https://wa.me/5554996120527">
          (54) 9 9612-0527
        </a>
      </p>
      <p>
        E-Mail:{" "}
        <a
          className="hover:text-[#0E5E6F]"
          href="mailto:jorgem.eberhardc@gmail.com"
        >
          jorgem.eberhardc@gmail.com
        </a>
      </p>
      <p>
        Linkedin:
        <a
          className="hover:text-[#0E5E6F]"
          href="https://www.linkedin.com/in/jorge-eberhard/"
        >
          {" "}
          Jorge Miguel Eberhard da Conceição
        </a>
      </p>
      <p>
        Github:{" "}
        <a
          className="hover:text-[#0E5E6F]"
          href="https://github.com/jorgeeberhard"
        >
          jorgeeberhard
        </a>
      </p>
    </div>
  );
}
