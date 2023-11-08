import Project from "./Project";
import { FaGithub, FaChrome } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { BsDownload } from "react-icons/bs";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="flex h-max min-h-screen w-full items-center justify-center bg-primary text-text"
    >
      {/* Container */}
      <div className="mx-auto flex h-full w-full max-w-fit flex-col justify-center text-center">
        <h2 className="mt-4 inline pb-8 text-4xl font-bold text-text lg:text-6xl">
          Portfolio
        </h2>

        {/* Projects Grid */}
        <div className="mx-14 grid grid-cols-1 gap-16 py-8 text-center md:grid-cols-2 lg:mx-0 xl:grid-cols-3">
          <Project
            image="ColorPal.jpg"
            description="Chrome extension for picking colors and multiple color tools"
            techStack="TypeScript, HTML, CSS"
            buttons={[
              {
                name: "Web Store",
                image: FaChrome,
                link: "https://chrome.google.com/webstore/detail/mbnpegpimodgjmlbfhkkdgbcfjmgpoad",
              },
              {
                name: "GitHub",
                image: FaGithub,
                link: "https://github.com/nikosdaridis/colorpal",
              },
              {
                name: "Website",
                image: TbWorldWww,
                link: "https://daridis.com/colorpal",
              },
            ]}
          >
            ColorPal
          </Project>

          <Project
            image="Portfolio.jpg"
            description="Responsive minimalist portfolio website"
            techStack="React, TypeScript, Tailwind CSS"
            buttons={[
              {
                name: "Website v2",
                image: TbWorldWww,
                link: "https://daridis.com",
              },
              {
                name: "GitHub",
                image: FaGithub,
                link: "https://github.com/nikosdaridis/nikosdaridis.github.io",
              },
              {
                name: "Website v1",
                image: TbWorldWww,
                link: "https://nikosdaridis.github.io/v1",
              },
            ]}
          >
            Portfolio v2
          </Project>

          <Project
            image="ProjectSouls.jpg"
            description="Tech demo clone of Dark Souls"
            techStack="C#, Unity"
            buttons={[
              {
                name: "Download",
                image: BsDownload,
                link: "https://nikosdaridis.itch.io/project-souls",
              },
              {
                name: "GitHub",
                image: FaGithub,
                link: "https://github.com/nikosdaridis/project-souls",
              },
            ]}
          >
            Project Souls
          </Project>

          <Project
            image="2DBezierPathTool.jpg"
            description="Unity editor tool to create and edit 2d bezier paths"
            techStack="C#, Unity"
            buttons={[
              {
                name: "GitHub",
                image: FaGithub,
                link: "https://github.com/nikosdaridis/2d-bezier-path-tool",
              },
            ]}
          >
            2D Bezier Path Tool
          </Project>

          <Project
            image="SpaceCowboys.jpg"
            description="2d multiplayer fighting game"
            techStack="C#, Unity"
            buttons={[
              {
                name: "Download",
                image: BsDownload,
                link: "https://nikosdaridis.itch.io/space-cowboys",
              },
              {
                name: "GitHub",
                image: FaGithub,
                link: "https://github.com/nikosdaridis/space-cowboys",
              },
            ]}
          >
            Space Cowboys
          </Project>
        </div>
      </div>
    </section>
  );
}
