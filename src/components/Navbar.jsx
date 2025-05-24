import React from "react";
import { ThemeContext } from "../App";
import { Link } from "react-scroll";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Card,
  Collapse,
} from "@material-tailwind/react";
import ThemeButton from "./ThemeButton";
 
export default function Nav() {
  const [openNav, setOpenNav] = React.useState(false);
  const { theme } = React.useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = React.useState(false);
 
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false)
      );
    };
  }, []);

  const navItems = [
    { to: "hero", label: "Home" },
    { to: "about", label: "About" },
    { to: "experience", label: "Experience" },
    { to: "projects", label: "Projects" },
    { to: "arcade", label: "Arcade"},
    { to: "contact", label: "Contact" }
  ];
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col min-h-[2vh] gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map((item) => (
        <Typography as="li" variant="small" className="p-1" key={item.to}>
          <Link
            className="nav-link flex items-center font-semibold no-underline cursor-pointer"
            activeClass="active"
            to={item.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {item.label}
          </Link>
        </Typography>
      ))}
      <ThemeButton />
    </ul>
  );
 
  return (
    <Navbar 
      className={`sticky top-0 z-10 h-max max-w-full rounded-none border-none py-2 px-4 lg:px-8 lg:py-4 bg-primary transition-shadow duration-300 ease-in-out ${isScrolled ? 'shadow-xl' : 'shadow-md'}`} 
      data-theme={theme}
    >
    <div className="flex items-center justify-between max-w-7xl mx-auto text-primary-content">
      <h4 className="cursor-pointer font-bold m-0 text-primary-content"> &lt;ceejpineda /&gt;</h4>
      <div className="flex items-center gap-4">
        <div className="mr-4 hidden lg:block">{navList}</div>
      </div>
    </div>
    <Collapse open={openNav}>
        {navList}
    </Collapse>
    </Navbar>
  );
}