import { useState, useEffect, useMemo } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import NavbarMenuLink from "./NavbarMenuLink";
import NavbarMobileMenuLink from "./NavbarMobileMenuLink";

export default function Navbar({
  theme,
  setTheme,
  navbarMargin,
  logoPath,
  logoTitle,
  menu,
}: {
  theme: string;
  setTheme: Function;
  navbarMargin: { marginLeft: string; marginRight: string };
  logoPath: string;
  logoTitle?: string;
  menu: string[];
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
        {logoPath && (
          <Link
            to="home"
            offset={-60}
            smooth={true}
            duration={400}
            className={`z-10 flex cursor-pointer justify-self-start ${navbarMargin.marginLeft}`}
            onClick={() => hamburger && setHamburger(false)}
          >
            <img className="h-[40px] w-[40px]" src={logoPath} alt="Logo" />
            {logoTitle && (
              <h1 className="ml-2 hidden self-center text-2xl font-bold text-text sm:flex lg:text-3xl">
                {logoTitle}
              </h1>
            )}
          </Link>
        )}

        {/* Menu */}
        {menu && (
          <nav className="hidden justify-self-center text-lg font-semibold md:flex">
            {menu.map((menuLink) => (
              <NavbarMenuLink key={menuLink}>{menuLink}</NavbarMenuLink>
            ))}
          </nav>
        )}

        {/* Hamburger */}
        {menu && (
          <div
            className="z-10 cursor-pointer justify-self-center md:hidden"
            onClick={() => setHamburger(!hamburger)}
          >
            {hamburger ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        )}

        {/* Theme */}

        <div
          className={`z-10 cursor-pointer justify-self-end ${navbarMargin.marginRight}`}
          onClick={() =>
            setTheme(
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
        {menu && (
          <nav
            className={
              hamburger
                ? "absolute left-0 top-[58px] flex h-[calc(100vh-58px)] w-full flex-col items-center justify-center justify-self-center bg-primary"
                : "hidden"
            }
          >
            {menu.map((menuLink) => (
              <NavbarMobileMenuLink setHamburger={setHamburger} key={menuLink}>
                {menuLink}
              </NavbarMobileMenuLink>
            ))}
          </nav>
        )}
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
      }fixed z-10 grid h-[60px] w-full grid-cols-[1fr,1fr,1fr] items-center bg-primary text-text`}
    >
      {memoizedNavbar}
    </header>
  );
}
