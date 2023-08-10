export default function OnboardingCard({ image, text }) {
  return (
    <div className="max-w-[350px] rounded-xl border-[15px] border-slate-200 bg-slate-100 shadow-lg shadow-[#b8d3ff] duration-500 hover:scale-[1.1] hover:shadow-2xl hover:shadow-[#b8d3ff] md:mx-[1rem]">
      <img
        className="rounded-b-xl shadow-lg shadow-slate-300"
        src={`/ColorPal/${image}.png`}
        alt={image}
      />

      <p className="mt-4 text-sm font-medium text-highlight 2sm:text-base sm:text-lg">
        {text}
      </p>
    </div>
  );
}
