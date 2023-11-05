export default function Skill({
  image,
  children,
}: {
  image: string;
  children: string;
}) {
  return (
    // Skill Container
    <div className="grid h-[8rem] w-[8rem] items-center rounded-lg border-2 border-highlight duration-500 hover:scale-[1.1] hover:shadow-[0_0_10px_0_highlight] 2sm:mx-[1rem] sm:mx-[2rem] sm:h-[9rem] sm:w-[9rem] xl:h-[9.5rem] xl:w-[9.5rem]">
      <img
        className="mx-auto mt-2 h-[4rem] w-[4rem] sm:h-[5rem] sm:w-[5rem] xl:h-[5.5rem] xl:w-[5.5rem]"
        src={`/TechStack/${image}`}
        alt={children}
      />

      <h3 className="mt-4 font-semibold sm:text-lg">{children}</h3>
    </div>
  );
}
