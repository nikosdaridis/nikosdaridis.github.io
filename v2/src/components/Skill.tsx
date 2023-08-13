export default function Skill({
  image,
  children,
}: {
  image: string;
  children: string;
}) {
  return (
    // Skill Container
    <div className="grid h-[8rem] w-[8rem] items-center rounded-lg border-2 border-highlight duration-500 hover:scale-[1.2] 2sm:mx-[1rem] sm:mx-[2rem] sm:h-[9rem] sm:w-[9rem] md:h-[10rem] md:w-[10rem] lg:mx-[3rem] lg:h-[11rem] lg:w-[11rem] xl:mx-[4rem] xl:h-[12rem] xl:w-[12rem]">
      <img
        className="mx-auto mt-2 h-[4rem] w-[4rem] sm:h-[5rem] sm:w-[5rem] md:h-[5.5rem] md:w-[5.5rem] lg:h-[6rem] lg:w-[6rem] xl:h-[6.5rem] xl:w-[6.5rem]"
        src={`/TechStack/${image}`}
        alt={children}
      />
      <h3 className="mt-4 font-semibold sm:text-lg">{children}</h3>
    </div>
  );
}
