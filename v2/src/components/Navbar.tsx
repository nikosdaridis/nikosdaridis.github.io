import { useState, useEffect, useMemo } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import NavbarMenuLink from "./NavbarMenuLink";
import NavbarMobileMenuLink from "./NavbarMobileMenuLink";

export default function Navbar({
  theme,
  onClickThemeIcon,
}: {
  theme: string;
  onClickThemeIcon: Function;
}) {
  const [hamburger, setHamburger] = useState(false);
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);

    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  function handleScrollY(): void {
    setScrollY(window.scrollY);
  }

  const memoizedNavbar = useMemo(
    () => (
      <>
        {/* Logo */}
        <Link
          to="home"
          offset={-20}
          smooth={true}
          duration={400}
          className="z-10 cursor-pointer"
          onClick={() => hamburger && setHamburger(false)}
        >
          <img className="w-[50px]" src="/HomepageLogo.png" alt="Logo" />
        </Link>

        {/* Menu */}
        <nav className="hidden text-lg font-semibold md:flex">
          <NavbarMenuLink>Home</NavbarMenuLink>
          <NavbarMenuLink>Skills</NavbarMenuLink>
          <NavbarMenuLink>Portfolio</NavbarMenuLink>
          <NavbarMenuLink>Contact</NavbarMenuLink>
        </nav>

        {/* Hamburger */}
        <div
          className="z-10 cursor-pointer md:hidden"
          onClick={() => setHamburger(!hamburger)}
        >
          {hamburger ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Theme */}
        <div
          className="z-10 cursor-pointer"
          onClick={() =>
            onClickThemeIcon(
              localStorage.getItem("nd-theme") === "light" ? "dark" : "light",
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
            hamburger
              ? "absolute left-0 top-[58px] flex h-[calc(100vh-58px)] w-full flex-col items-center justify-center bg-primary"
              : "hidden"
          }
        >
          <NavbarMobileMenuLink setHamburger={setHamburger}>
            Home
          </NavbarMobileMenuLink>
          <NavbarMobileMenuLink setHamburger={setHamburger}>
            Skills
          </NavbarMobileMenuLink>
          <NavbarMobileMenuLink setHamburger={setHamburger}>
            Portfolio
          </NavbarMobileMenuLink>
          <NavbarMobileMenuLink setHamburger={setHamburger}>
            Contact
          </NavbarMobileMenuLink>
        </nav>
      </>
    ),
    [hamburger, theme],
  );

  return (
    <header
      className={`${
        scrollY > 600
          ? "border-b-2 border-t-2 border-b-highlight border-t-primary "
          : ""
      }fixed z-10 flex h-[60px] w-full items-center justify-evenly bg-primary text-text`}
    >
      {memoizedNavbar}
    </header>
  );
}
