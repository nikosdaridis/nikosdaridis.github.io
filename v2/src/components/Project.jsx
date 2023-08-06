export default function Project({
  imageSrc,
  techStack,
  liveName,
  liveLink,
  githubLink,
  children,
}) {
  return (
    // Project Container
    <div
      style={{ backgroundImage: `url(${imageSrc})` }}
      className=" project group container mx-auto flex h-[150px] w-[150px] items-center justify-center text-center duration-500 hover:scale-[1.2] sm:h-[200px] sm:w-[200px] lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px]"
    >
      {/* Hover */}
      <div className="opacity-0 group-hover:opacity-100">
        <h2 className="text-lg font-bold tracking-wider text-[#fafcff] sm:text-2xl lg:text-4xl">
          {children}
        </h2>
        <h3 className="mt-2 text-xs sm:mt-4 sm:text-sm lg:mt-6 lg:text-base">
          {techStack}
        </h3>
        <div className="mt-2 text-center sm:mt-4 lg:mt-6">
          {liveLink !== null && (
            <a href={liveLink} target="_blank" rel="noreferrer">
              <button className="m-1 whitespace-nowrap rounded-lg bg-[#fafcff] p-1 text-xs font-semibold text-gray-800 hover:bg-gray-300 sm:m-2 sm:text-sm lg:m-4 lg:text-lg">
                {liveName}
              </button>
            </a>
          )}
          {githubLink !== null && (
            <a href={githubLink} target="_blank" rel="noreferrer">
              <button className="m-1 whitespace-nowrap rounded-lg bg-[#fafcff] p-1 text-xs font-semibold text-gray-800 hover:bg-gray-300 sm:m-2 sm:text-sm lg:m-4 lg:text-lg">
                GitHub
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
