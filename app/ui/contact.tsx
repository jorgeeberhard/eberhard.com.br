import { useTranslations } from "next-intl";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

export default function Contact() {
  const translations = useTranslations("contact");

  return (
    <div className="flex flex-col py-5 px-10 bg-[#FFEFD6]" id="contact-me">
      <h1 className="text-3xl mb-5">{translations("title")}</h1>
      <div>
        <a className="hover:text-[#0E5E6F]" href="https://wa.me/5554996120527">
          <FaWhatsapp className="inline mr-2" />
          (54) 9 9612-0527
        </a>
      </div>
      <div>
        <a
          className="hover:text-[#0E5E6F]"
          href="mailto:jorgem.eberhardc@gmail.com"
        >
          <IoMailOutline className="inline mr-2" />
          jorgem.eberhardc@gmail.com
        </a>
      </div>
      <div>
        <a
          className="hover:text-[#0E5E6F]"
          href="https://www.linkedin.com/in/jorge-eberhard/"
        >
          <FaLinkedin className="inline mr-2" />
          Jorge Miguel Eberhard da Conceição
        </a>
      </div>
      <div>
        <a
          className="hover:text-[#0E5E6F]"
          href="https://github.com/jorgeeberhard"
        >
          <FaGithub className="inline mr-2" />
          jorgeeberhard
        </a>
      </div>
    </div>
  );
}
