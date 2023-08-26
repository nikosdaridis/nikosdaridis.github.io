export default function OnboardingCard({
  image,
  text,
}: {
  image: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border-[15px] border-slate-200 bg-slate-100 shadow-lg shadow-[#b8d3ff] duration-500 hover:scale-[1.1] hover:shadow-2xl hover:shadow-[#b8d3ff]">
      <img
        className="rounded-lg shadow-lg shadow-slate-300"
        src={`/Colorpal/${image}.jpg`}
        alt={image}
      />

      <p className="mt-3 text-sm font-medium text-highlight 2sm:text-base sm:text-lg">
        {text}
      </p>
    </div>
  );
}
