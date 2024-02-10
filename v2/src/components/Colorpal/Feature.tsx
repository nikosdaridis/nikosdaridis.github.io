export default function Feature({
  infoOrder,
  image,
  description,
  button,
  children,
}: {
  infoOrder: string;
  image: string;
  description: string;
  button: { link: string; text: string } | false;
  children: string;
}) {
  return (
    // Feature Container
    <div className="mx-auto grid h-fit w-fit grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-16">
      <img
        className="m-auto rounded-lg border-2 border-highlight duration-500 hover:shadow-[0_0_10px_0_highlight] lg:order-last"
        src={`/Colorpal/${image}`}
        alt={children}
      />

      <div className={`grid gap-6 lg:order-${infoOrder} lg:m-auto`}>
        <h2 className="text-lg font-bold 2sm:text-2xl md:text-3xl xl:text-4xl">
          {children}
        </h2>
        <p className="max-w-[500px] text-justify 2sm:text-lg">{description}</p>

        {/* Button */}
        {button && (
          <a
            className="mx-auto h-fit w-fit rounded-xl border-2 border-highlight p-[10px] text-sm font-semibold text-text duration-300 hover:border-highlight hover:bg-highlight 2sm:text-base"
            href={button.link}
            target="_blank"
            rel="noreferrer"
          >
            {button.text}
          </a>
        )}
      </div>
    </div>
  );
}
