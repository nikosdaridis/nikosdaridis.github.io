import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import Typed from "typed.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Home() {
  const typedElem = useRef(null);

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
      id="home"
      className="h-screen w-full bg-gradient-to-b from-primary to-secondary"
    >
      {/* Container */}
      <div className="mx-auto flex h-full max-w-fit flex-col items-center justify-center">
        {/* Name and typed */}
        <div>
          <h2 className="my-1 text-xl font-bold text-text 2sm:text-3xl sm:text-5xl lg:my-4 lg:text-5xl">
            Hello, I'm
          </h2>
          <h1 className="my-1 text-3xl font-bold text-text 2sm:text-5xl sm:text-7xl lg:my-4 lg:text-8xl">
            Nikos Daridis
          </h1>
          <h2 className="max-w-[700px] text-[1rem] font-bold text-text 2sm:text-3xl sm:text-4xl lg:text-5xl">
            A <span className="text-highlight" ref={typedElem} />
          </h2>
        </div>

        {/* Buttons */}
        <div className="mt-8 grid cursor-pointer grid-cols-1 place-items-center gap-4 2sm:flex sm:gap-6 lg:gap-8">
          <Link
            to="portfolio"
            offset={-20}
            className="col-span-2 my-2 flex items-center rounded-xl border-2 border-highlight p-[10px] text-xs font-semibold text-text hover:border-highlight hover:bg-highlight sm:p-[14px] sm:text-sm lg:text-base"
            smooth={true}
            duration={400}
          >
            View Portfolio
          </Link>

          <a
            className="my-2 flex items-center rounded-full border-2 border-highlight p-2 text-text hover:border-highlight hover:bg-highlight sm:p-[10px]"
            href="https://github.com/nikosdaridis"
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider
              value={{
                className: "text-xl sm:text-3xl",
              }}
            >
              <FaGithub />
            </IconContext.Provider>
          </a>
          <a
            className="my-2 flex items-center rounded-full border-2 border-highlight p-2 text-text hover:border-highlight hover:bg-highlight sm:p-[10px]"
            href="https://www.linkedin.com/in/nikosdaridis/"
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider
              value={{
                className: "text-xl sm:text-3xl",
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
