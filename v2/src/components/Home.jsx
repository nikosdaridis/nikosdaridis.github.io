import React, { useEffect } from "react";
import Typed from "typed.js";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Home() {
  const typedElem = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElem.current, {
      strings: ["Software Engineer", "Game Developer"],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      name="home"
      className="h-screen w-full bg-gradient-to-b from-primary to-secondary"
    >
      {/* Container */}
      <div className="mx-auto flex h-full max-w-[1000px] flex-col items-center justify-center">
        {/* Name and typed */}
        <div>
          <h2 className="my-1 text-xl font-bold text-text sm:text-2xl lg:my-4 lg:text-4xl 2xl:text-5xl">
            Hello, I'm
          </h2>
          <h1 className="my-1 text-3xl font-bold text-text sm:text-5xl lg:my-4 lg:text-6xl xl:text-7xl 2xl:text-8xl">
            Nikos Daridis
          </h1>
          <h2 className="max-w-[700px] text-[1rem] font-bold text-text sm:text-2xl lg:text-4xl 2xl:text-5xl">
            A <span className="text-highlight" ref={typedElem} />
          </h2>
        </div>

        {/* Buttons */}
        <div className="mt-8 grid cursor-pointer grid-cols-1 place-items-center gap-4 sm:flex lg:gap-8">
          <Link
            to="portfolio"
            offset={-60}
            className="col-span-2 my-2 flex items-center rounded-xl border-2 border-highlight px-2 py-[10px] text-xs font-semibold text-text hover:border-highlight hover:bg-highlight lg:text-base"
            smooth={true}
            duration={500}
          >
            View Portfolio
          </Link>

          <a
            className="my-2 flex items-center rounded-full border-2 border-highlight px-2 py-2 text-text hover:border-highlight hover:bg-highlight"
            href="https://github.com/nikosdaridis"
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider
              value={{
                className: "text-xl lg:text-3xl",
              }}
            >
              <FaGithub />
            </IconContext.Provider>
          </a>
          <a
            className="my-2 flex items-center rounded-full border-2 border-highlight px-2 py-2 text-text hover:border-highlight hover:bg-highlight"
            href="https://www.linkedin.com/in/nikosdaridis/"
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider
              value={{
                className: "text-xl lg:text-3xl",
              }}
            >
              <FaLinkedin />
            </IconContext.Provider>
          </a>
        </div>
      </div>
    </section>
  );
}
