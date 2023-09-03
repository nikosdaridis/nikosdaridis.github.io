import { useEffect } from "react";
import { FaChrome } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
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
        navbarMargin={{
          marginLeft:
            "2sm:ml-[4rem] md:ml-[1rem] lg:ml-[6rem] xl:ml-[14rem] 2xl:ml-[20rem]",
          marginRight:
            "2sm:mr-[4rem] md:mr-[1rem] lg:mr-[6rem] xl:mr-[14rem] 2xl:mr-[20rem]",
        }}
        logoPath="/ColorpalLogo.png"
        logoTitle="ColorPal"
        menu={["Home", "Contact"]}
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
            "Eyedropper",
            "Save favorite colors",
            "Auto copy color codes",
            "RGB, HEX, HSL, HSV formats",
            "Tints and Shades",
            "Download palette image",
            "Download colors data csv",
            "Move colors position",
            "Delete colors",
            "Light and Dark theme",
          ],
          typeSpeed: 50,
          backSpeed: 50,
          backDelay: 1500,
        }}
        internalLink={null}
        externalLinks={[
          {
            link: "https://chrome.google.com/webstore/detail/mbnpegpimodgjmlbfhkkdgbcfjmgpoad",
            image: FaChrome,
            text: "Add to Chrome & Edge",
          },
        ]}
      />

      <Contact title="Contact" />
      <Footer />
    </>
  );
}
