import { Link } from "react-scroll";

export default function NavbarMobileMenuLink({
  setHamburger,
  children,
}: {
  setHamburger: Function;
  children: string;
}) {
  return (
    <Link
      to={children.toLowerCase()}
      offset={-60}
      className="cursor-pointer py-4 text-4xl font-medium transition duration-300 ease-in-out hover:text-highlight"
      smooth={true}
      duration={400}
      onClick={() => setHamburger(false)}
    >
      {children}
    </Link>
  );
}
