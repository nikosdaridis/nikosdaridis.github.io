import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function Navbar({ theme, onClickThemeIcon }) {
  const [hamburger, setHamburger] = useState(false);

  return (
    <header className="fixed z-10 flex h-[60px] w-full items-center justify-evenly bg-primary text-text">
      {/* Logo */}
      <Link
        to="home"
        offset={-60}
        smooth={true}
        duration={400}
        className="z-10 cursor-pointer"
        onClick={() => hamburger && setHamburger(false)}
      >
        <img src="/Logo.png" alt="Logo" style={{ width: "50px" }} />
      </Link>

      {/* Menu */}
      <nav className="hidden text-lg font-semibold md:flex">
        <Link
          to="home"
          offset={-60}
          className="mx-4 cursor-pointer transition duration-300 ease-in-out hover:text-highlight"
          activeClass="text-highlight"
          spy={true}
          smooth={true}
          duration={400}
        >
          Home
        </Link>

        <Link
          to="skills"
          offset={-60}
          className="mx-4 cursor-pointer transition duration-300 ease-in-out hover:text-highlight"
          activeClass="text-highlight"
          spy={true}
          smooth={true}
          duration={400}
        >
          Skills
        </Link>

        <Link
          to="portfolio"
          offset={-60}
          className="mx-4 cursor-pointer transition duration-300 ease-in-out hover:text-highlight"
          activeClass="text-highlight"
          spy={true}
          smooth={true}
          duration={400}
        >
          Portfolio
        </Link>

        <Link
          to="contact"
          offset={0}
          className="mx-4 cursor-pointer transition duration-300 ease-in-out hover:text-highlight"
          activeClass="text-highlight"
          spy={true}
          smooth={true}
          duration={400}
        >
          Contact
        </Link>
      </nav>

      {/* Hamburger */}
      <div
        className="z-10 cursor-pointer md:hidden"
        onClick={() => setHamburger(!hamburger)}
      >
        {!hamburger ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Theme */}
      <div
        className="z-10 cursor-pointer"
        onClick={() =>
          onClickThemeIcon(
            localStorage.getItem("nd-theme") === "dark" ? "light" : "dark",
          )
        }
      >
        {theme === "dark" ? (
          <MdLightMode size={30} />
        ) : (
          <MdDarkMode size={30} />
        )}
      </div>

      {/* Mobile Menu */}
      <nav
        className={
          !hamburger
            ? "hidden"
            : "absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-primary"
        }
      >
        <Link
          to="home"
          offset={-60}
          className="cursor-pointer py-4 text-4xl font-medium transition duration-300 ease-in-out hover:text-highlight"
          smooth={true}
          duration={400}
          onClick={() => setHamburger(!hamburger)}
        >
          Home
        </Link>

        <Link
          to="skills"
          offset={-60}
          className="cursor-pointer py-4 text-4xl font-medium transition duration-300 ease-in-out hover:text-highlight"
          smooth={true}
          duration={400}
          onClick={() => setHamburger(!hamburger)}
        >
          Skills
        </Link>

        <Link
          to="portfolio"
          offset={-60}
          className="cursor-pointer py-4 text-4xl font-medium transition duration-300 ease-in-out hover:text-highlight"
          smooth={true}
          duration={400}
          onClick={() => setHamburger(!hamburger)}
        >
          Portfolio
        </Link>

        <Link
          to="contact"
          offset={0}
          className="cursor-pointer py-4 text-4xl font-medium transition duration-300 ease-in-out hover:text-highlight"
          smooth={true}
          duration={400}
          onClick={() => setHamburger(!hamburger)}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
