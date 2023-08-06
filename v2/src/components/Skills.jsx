import Skill from "./Skill";
import JavaScript from "../assets/TechStack/JavaScript.png";
import CSharp from "../assets/TechStack/CSharp.png";
import ReactImage from "../assets/TechStack/React.png";
import TailwindCSS from "../assets/TechStack/TailwindCSS.png";
import DOTNET from "../assets/TechStack/DOTNET.png";
import HTML from "../assets/TechStack/HTML.png";
import CSS from "../assets/TechStack/CSS.png";
import Unity from "../assets/TechStack/Unity.png";

export default function Skills() {
  return (
    <section
      name="skills"
      className="h-full w-full bg-gradient-to-b from-secondary to-primary text-text 2xl:h-screen"
    >
      {/* Container */}
      <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4 text-center">
        <h2 className="inline pb-8 text-4xl font-bold text-text lg:text-6xl">
          Skills
        </h2>

        {/* Skills Container */}
        <div className="mx-auto grid w-full max-w-[1000px] flex-col justify-center text-center first:p-4 lg:gap-12 xl:gap-14">
          {/* Skills Grid */}
          <div className="lg:gap-18 grid grid-cols-1 gap-8 py-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
            <Skill imageSrc={JavaScript}>JavaScript</Skill>
            <Skill imageSrc={CSharp}>C#</Skill>
            <Skill imageSrc={ReactImage}>React</Skill>
            <Skill imageSrc={TailwindCSS}>Tailwind CSS</Skill>
            <Skill imageSrc={DOTNET}>.NET</Skill>
            <Skill imageSrc={HTML}>HTML</Skill>
            <Skill imageSrc={CSS}>CSS</Skill>
            <Skill imageSrc={Unity}>Unity</Skill>
          </div>
        </div>
      </div>
    </section>
  );
}
