export default function Skill({
  image,
  children,
}: {
  image: string;
  children: string;
}) {
  return (
    // Skill Container
    <div className="grid h-[8rem] w-[8rem] items-center rounded-lg border-2 border-highlight duration-500 hover:scale-[1.2] hover:shadow-[0_0_10px_0_highlight] 2sm:mx-[1rem] sm:mx-[2rem] sm:h-[9rem] sm:w-[9rem] lg:mx-[3rem] lg:h-[10rem] lg:w-[10rem] xl:mx-[4rem] xl:h-[11rem] xl:w-[11rem]">
      <img
        className="mx-auto mt-2 h-[4rem] w-[4rem] sm:h-[5rem] sm:w-[5rem] lg:h-[6rem] lg:w-[6rem]"
        loading="lazy"
        src={`/TechStack/${image}`}
        alt={children}
      />

      <h3 className="mt-4 font-semibold sm:text-lg">{children}</h3>
    </div>
  );
}
