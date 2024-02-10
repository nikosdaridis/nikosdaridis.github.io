import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaChrome } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Features from "../components/Colorpal/Features";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Colorpal({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: Function;
}) {
  useEffect(() => {
    const storedTheme = localStorage.getItem("nd-theme");
    const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    setTheme(
      storedTheme === "dark" || storedTheme === "light"
        ? storedTheme
        : defaultTheme,
    );
  }, []);

  return (
    <>
      <Helmet>
        <title>ColorPal - Advanced color tools</title>
        <meta
          name="description"
          content="Browser extension to pick colors from the screen, make tints and shades and download your palette!"
        />
        <link rel="icon" href="/ColorpalLogo.png" />
        <link rel="canonical" href="https://daridis.com/colorpal" />
      </Helmet>

      <Navbar
        theme={theme}
        setTheme={setTheme}
        navbarMargin={{
          marginLeft:
            "ml-[1rem] 2sm:ml-[4rem] md:ml-[2rem] lg:ml-[6rem] xl:ml-[14rem] 2xl:ml-[20rem]",
          marginRight:
            "mr-[1rem] 2sm:mr-[4rem] md:mr-[2rem] lg:mr-[6rem] xl:mr-[14rem] 2xl:mr-[20rem]",
        }}
        logoPath="/ColorpalLogo.png"
        logoTitle="ColorPal"
        menu={["Home", "Features", "Contact"]}
      />
      <Home
        h2Title="Advanced color tools"
        description={
          <>
            <span className="text-highlight">Free</span> and powerful browser
            extension that helps you{" "}
            <span className="text-highlight">pick colors</span> from the screen,
            make <span className="text-highlight">tints and shades</span> and{" "}
            <span className="text-highlight">download your palette</span>!
          </>
        }
        typedInfo={{
          textBefore: "",
          strings: [
            "Color Picker",
            "EyeDropper",
            "Save favorite colors",
            "Auto copy color codes",
            "RGB, HEX, HSL, HSV formats",
            "Tints and Shades",
            "Download palette image",
            "Download colors data csv",
            "Move colors",
            "Delete colors",
            "30.000 color names",
            "Light and Dark theme",
          ],
          typeSpeed: 50,
          backSpeed: 40,
          backDelay: 1500,
        }}
        internalLink={{
          to: "features",
          text: "Discover Features",
        }}
        externalLinks={[
          {
            link: "https://chromewebstore.google.com/detail/colorpal-color-picker-eye/mbnpegpimodgjmlbfhkkdgbcfjmgpoad",
            image: FaChrome,
            text: "Add to Chrome & Edge",
          },
        ]}
      />

      <Features title="Features" />
      <Contact title="Contact" />
      <Footer />
    </>
  );
}
