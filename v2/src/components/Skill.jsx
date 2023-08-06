export default function Skill({ imageSrc, children }) {
  return (
    // Skill Container
    <div className="grid h-[8rem] w-[8rem] items-center border-2 border-highlight duration-500 hover:scale-[1.2] sm:h-[9rem] sm:w-[9rem] lg:h-[11rem] lg:w-[11rem] xl:h-[12rem] xl:w-[12rem]">
      <img
        className="mx-auto mt-2 h-[3rem] w-[3rem] sm:h-[4rem] sm:w-[4rem] lg:h-[5rem] lg:w-[5rem] xl:h-[6rem] xl:w-[6rem]"
        src={imageSrc}
        alt={children}
      />
      <h3 className="mt-4">{children}</h3>
    </div>
  );
}
