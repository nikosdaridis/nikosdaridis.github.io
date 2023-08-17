import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const htmlElem = document.getElementsByTagName("html")[0];

export default function Homepage({
  setTitleAndFavicon,
}: {
  setTitleAndFavicon: Function;
}) {
  const [theme, setTheme] = useState(
    localStorage.getItem("nd-theme") ?? "light",
  );

  useEffect(() => {
    setTitleAndFavicon("Nikos Daridis", "/HomepageLogo.png");
    handleTheme(localStorage.getItem("nd-theme") ?? "light");
  }, []);

  function handleTheme(theme: string): void {
    setTheme(theme);
    localStorage.setItem("nd-theme", theme);
    htmlElem.setAttribute("theme", theme);
  }

  return (
    <>
      <Navbar theme={theme} onClickThemeIcon={handleTheme} />
      <Home />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
