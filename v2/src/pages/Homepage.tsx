import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Homepage({
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
        <title>Nikos Daridis</title>
        <meta
          name="description"
          content="I am a Software and Web Engineer. This is my portfolio website."
        />
        <link rel="icon" href="/HomepageLogo.png" />
        <link rel="canonical" href="https://daridis.com/" />
      </Helmet>

      <Navbar
        theme={theme}
        setTheme={setTheme}
        navbarMargin={{
          marginLeft:
            "ml-[1rem] 2sm:ml-[4rem] sm:ml-[6rem] md:ml-[4rem] lg:ml-[8rem] xl:ml-[14rem] 2xl:ml-[20rem]",
          marginRight:
            "mr-[1rem] 2sm:mr-[4rem] sm:mr-[6rem] md:mr-[4rem] lg:mr-[8rem] xl:mr-[14rem] 2xl:mr-[20rem]",
        }}
        logoPath="/HomepageLogo.png"
        logoTitle=""
        menu={["Home", "Skills", "Portfolio", "Contact"]}
      />
      <Home
        h2Title="Hello, I'm"
        h1Title="Nikos Daridis"
        description={null}
        typedInfo={{
          textBefore: "A",
          strings: ["Software Engineer", "Web Engineer"],
          typeSpeed: 80,
          backSpeed: 50,
          backDelay: 2000,
        }}
        internalLink={{
          to: "portfolio",
          text: "View Portfolio",
        }}
        externalLinks={[
          {
            link: "https://github.com/nikosdaridis",
            image: FaGithub,
            text: "",
          },
          {
            link: "https://www.linkedin.com/in/nikosdaridis/",
            image: FaLinkedin,
            text: "",
          },
        ]}
      />
      <Skills />
      <Portfolio />
      <Contact
        title={
          <>
            Contact <span className="text-highlight">Me</span>
          </>
        }
      />
      <Footer />
    </>
  );
}
