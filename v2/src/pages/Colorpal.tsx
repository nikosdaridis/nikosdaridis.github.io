import { useEffect } from "react";
import { FaChrome } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Features from "../components/Colorpal/Features";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Colorpal({
  setFaviconTitle,
  theme,
  setTheme,
}: {
  setFaviconTitle: Function;
  theme: string;
  setTheme: Function;
}) {
  useEffect(() => {
    setFaviconTitle("/ColorpalLogo.png", "ColorPal - Advanced color tools");

    if (
      localStorage.getItem("nd-theme") === "dark" ||
      localStorage.getItem("nd-theme") === "light"
    )
      setTheme(localStorage.getItem("nd-theme"));
    else
      setTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      );
  }, []);

  return (
    <>
      <Navbar
        theme={theme}
        setTheme={setTheme}
        margin={["1rem", "4rem", "4rem", "2rem", "6rem", "14rem", "20rem"]}
        logoPath="/ColorpalLogo.png"
        logoTitle="ColorPal"
        menu={["Home", "Features", "Contact"]}
      />
      <Home
        h2Title="Advanced color tools"
        h1Title=""
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
            link: "https://chrome.google.com/webstore/detail/mbnpegpimodgjmlbfhkkdgbcfjmgpoad",
            image: FaChrome,
            text: "Add to Chrome & Edge",
          },
        ]}
      />

      <Features />
      <Contact title="Contact" />
      <Footer />
    </>
  );
}
