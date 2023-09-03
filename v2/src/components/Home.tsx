import { useEffect, useRef, ReactNode } from "react";
import { Link } from "react-scroll";
import { IconContext } from "react-icons";
import Typed from "typed.js";

export default function Home({
  h2Title,
  h1Title,
  description,
  typedInfo,
  internalLink,
  externalLinks,
}: {
  h2Title: string;
  h1Title: string;
  description: ReactNode;
  typedInfo: {
    textBefore: string;
    strings: string[];
    typeSpeed: number;
    backSpeed: number;
    backDelay: number;
  };
  internalLink: {
    to: string;
    text: string;
  } | null;
  externalLinks: Array<{ link: string; image: any; text: string }>;
}) {
  const typedElem = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElem.current, {
      strings: typedInfo.strings,
      typeSpeed: typedInfo.typeSpeed,
      backSpeed: typedInfo.backSpeed,
      backDelay: typedInfo.backDelay,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="h-screen min-h-[800px] w-full bg-primary">
      {/* Container */}
      <div className="mx-auto flex h-full max-w-fit flex-col items-center justify-center">
        {/* Name and typed */}
        <div>
          {h2Title && (
            <h2 className="m-4 text-xl font-bold text-text 2sm:text-3xl sm:text-5xl lg:my-4 lg:text-5xl">
              {h2Title}
            </h2>
          )}

          {h1Title && (
            <h1 className="m-4 text-3xl font-bold text-text 2sm:text-5xl sm:text-7xl lg:my-4 lg:text-8xl">
              {h1Title}
            </h1>
          )}

          {description && (
            <p className="m-4 max-w-[700px] text-sm font-normal text-text 2sm:text-lg sm:text-xl lg:my-8">
              {description}
            </p>
          )}

          {typedInfo && (
            <h2 className="m-4 max-w-[700px] text-[1rem] font-bold text-text 2sm:text-2xl sm:text-3xl lg:text-4xl">
              {typedInfo.textBefore && `${typedInfo.textBefore} `}
              <span className="text-highlight" ref={typedElem} />
            </h2>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-8 grid grid-cols-1 place-items-center gap-4 2sm:flex sm:gap-6 lg:gap-8">
          {internalLink && (
            <Link
              to={internalLink.to}
              offset={-60}
              className="col-span-2 my-2 flex cursor-pointer items-center rounded-xl border-2 border-highlight p-[10px] text-xs font-semibold text-text duration-300 hover:border-highlight hover:bg-highlight sm:p-[14px] sm:text-sm lg:text-base"
              smooth={true}
              duration={400}
            >
              {internalLink.text}
            </Link>
          )}

          {externalLinks &&
            externalLinks.map((link: any) => (
              <a
                className="my-2 flex items-center rounded-full border-2 border-highlight p-2 text-text duration-300 hover:border-highlight hover:bg-highlight sm:p-[10px]"
                href={link.link}
                target="_blank"
                rel="noreferrer"
                key={link.link}
              >
                <IconContext.Provider
                  value={{
                    className: "text-xl sm:text-3xl",
                  }}
                >
                  <link.image />
                  {link.text && (
                    <p className="ml-2 font-semibold">{link.text}</p>
                  )}
                </IconContext.Provider>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}
