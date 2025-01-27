export default function NavBar() {
  return (
    <div className="px-20 py-3 border-b-4 border-[#F2DEBA]">
      <nav className="mx-auto">
        <div className="flex justify-between mx-auto">
          <a className="px-3 mr-20 hover:text-[#0E5E6F]" href="#home">
            Jorge Eberhard
          </a>
          <a className="px-3 hover:text-[#0E5E6F]" href="#about">
            {" "}
            About
          </a>
          <a className="px-3 hover:text-[#0E5E6F]" href="#projects">
            Projects
          </a>
          <a className="px-3 hover:text-[#0E5E6F]" href="#contact-me">
            Contact-me
          </a>
        </div>
      </nav>
    </div>
  );
}
