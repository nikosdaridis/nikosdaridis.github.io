import { Link } from "react-scroll";

export default function NavbarMenuLink({ children }: { children: string }) {
  return (
    <Link
      to={children.toLowerCase()}
      offset={-60}
      className="mx-4 cursor-pointer transition duration-300 ease-in-out hover:text-highlight"
      activeClass="text-highlight"
      spy={true}
      smooth={true}
      duration={400}
    >
      {children}
    </Link>
  );
}
