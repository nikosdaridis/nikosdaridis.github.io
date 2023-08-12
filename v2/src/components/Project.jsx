export default function Project({
  image,
  description,
  techStack,
  buttons,
  children,
}) {
  return (
    // Project Container
    <div className="h-fit w-fit max-w-[350px] rounded-lg border-2 border-highlight duration-500 hover:scale-[1.1] sm:h-full">
      {/* Image */}
      <img
        className="mx-auto h-fit w-fit rounded-t-md"
        src={`/Portfolio/${image}`}
        alt={children}
      />

      {/* Info */}
      <h3 className="m-4 text-xl font-bold text-highlight sm:text-2xl">
        {children}
      </h3>
      <p className="m-4 text-sm text-text 2sm:text-base">{description}</p>
      <h4 className="m-4 text-sm font-semibold text-highlight 2sm:text-base">
        {techStack}
      </h4>

      {/* Buttons */}
      {buttons && (
        <div
          className={
            buttons.length === 1
              ? "mt-4 flex justify-center"
              : "mt-4 grid grid-cols-2 gap-2"
          }
        >
          {buttons.map((button) => (
            <a
              className="m-2 flex min-w-fit items-center justify-around rounded-lg border-2 border-highlight p-3 text-xs text-text hover:border-highlight hover:bg-highlight 2sm:text-sm"
              href={button.link}
              target="_blank"
              rel="noreferrer"
              key={button.link}
            >
              <div className="grid items-center font-semibold 2sm:flex 2sm:gap-2">
                <button.image size={25} className="mx-auto mb-2 2sm:m-0" />
                {button.name}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
