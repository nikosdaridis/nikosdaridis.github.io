import Skill from "./Skill";

export default function Skills() {
  return (
    <section
      name="skills"
      className="flex h-max min-h-screen w-full items-center justify-center bg-gradient-to-b from-secondary to-primary text-text"
    >
      {/* Container */}
      <div className="mx-auto flex h-full w-full max-w-fit flex-col justify-center text-center">
        <h2 className="mt-16 pb-8 text-4xl font-bold text-text first-line:inline 2sm:mt-0 lg:text-6xl">
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-8 py-8 text-center 2sm:grid-cols-2 sm:gap-10 md:grid-cols-3">
          <Skill image="JavaScript.png">JavaScript</Skill>
          <Skill image="CSharp.png">C#</Skill>
          <Skill image="React.png">React</Skill>
          <Skill image="TailwindCSS.png">Tailwind CSS</Skill>
          <Skill image="DOTNET.png">.NET</Skill>
          <Skill image="HTML.png">HTML</Skill>
          <Skill image="CSS.png">CSS</Skill>
          <Skill image="Unity.png">Unity</Skill>
        </div>
      </div>
    </section>
  );
}
