import Project from "./Project";
import ColorPal from "../assets/Portfolio/ColorPal.jpg";
import PortfolioImage from "../assets/Portfolio/Portfolio.jpg";
import ProjectSouls from "../assets/Portfolio/ProjectSouls.jpg";
import BezierPathTool from "../assets/Portfolio/2DBezierPathTool.jpg";
import SpaceCowboys from "../assets/Portfolio/SpaceCowboys.jpg";

export default function Portfolio() {
  return (
    <section
      name="portfolio"
      className="h-full w-full bg-gradient-to-b from-primary to-secondary text-text 2xl:h-screen"
    >
      {/* Container */}
      <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4 text-center">
        <h2 className="inline pb-8 text-4xl font-bold text-text lg:text-6xl">
          Portfolio
        </h2>

        {/* Projects Container */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 xl:gap-24">
          <Project
            imageSrc={ColorPal}
            techStack={"JavaScript, HTML, CSS"}
            liveName={"Web Store"}
            liveLink={
              "https://chrome.google.com/webstore/detail/mbnpegpimodgjmlbfhkkdgbcfjmgpoad"
            }
            githubLink={"https://github.com/nikosdaridis/colorpal"}
          >
            ColorPal
          </Project>

          <Project
            imageSrc={PortfolioImage}
            techStack={"React, Tailwind CSS"}
            liveName={"Website"}
            liveLink={"https://daridis.com"}
            githubLink={
              "https://github.com/nikosdaridis/nikosdaridis.github.io"
            }
          >
            Portfolio v2
          </Project>

          <Project
            imageSrc={ProjectSouls}
            techStack={"C#, Unity"}
            liveName={"Download"}
            liveLink={"https://nikosdaridis.itch.io/project-souls"}
            githubLink={"https://github.com/nikosdaridis/project-souls"}
          >
            Project Souls
          </Project>

          <Project
            imageSrc={BezierPathTool}
            techStack={"C#, Unity"}
            liveLink={null}
            githubLink={"https://github.com/nikosdaridis/2d-bezier-path-tool"}
          >
            2D Bezier Path Tool
          </Project>

          <Project
            imageSrc={SpaceCowboys}
            techStack={"C#, Unity"}
            liveName={"Download"}
            liveLink={"https://nikosdaridis.itch.io/space-cowboys"}
            githubLink={"https://github.com/nikosdaridis/space-cowboys"}
          >
            Space Cowboys
          </Project>
        </div>
      </div>
    </section>
  );
}
