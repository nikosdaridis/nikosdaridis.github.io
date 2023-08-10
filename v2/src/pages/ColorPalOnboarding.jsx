import OnboardingCard from "../components/ColorPal/OnboardingCard";

export default function ColorPalOnboarding() {
  return (
    <section className="flex h-max min-h-screen w-full items-center justify-center bg-gradient-radial from-[#f0f6ff] via-[#f5f9ff] to-[#fafcff] text-[#1486ff]">
      {/* Container */}
      <div className="mx-auto flex h-full w-full max-w-fit flex-col items-center justify-center p-4 text-center">
        {/* Pin */}
        <div className="absolute right-[80px] top-[15px] hidden animate-bounce md:inline-flex lg:right-[95px]">
          <img className="h-[40px] w-[40px]" src="/ColorPal/Arrow.png" />
          <p className="absolute right-[-75px] top-[50px] inline-flex w-[290px] flex-wrap items-center justify-center text-2xl font-semibold lg:right-[-85px]">
            Click the
            <img
              className="mx-1 h-[25px] w-[25px]"
              src="/ColorPal/Extension.png"
            />
            icon and
            <img className="mx-1 h-[25px] w-[25px]" src="/ColorPal/Pin.png" />
            pin ColorPal
            <img className="mx-1 h-[25px] w-[25px]" src="/ColorPal/Logo.png" />
          </p>
        </div>

        {/* Title */}
        <h2 className="text-[2rem] font-bold text-text 2sm:text-[3.8rem] sm:text-[5rem] md:mt-[8rem] lg:mt-[0rem] lg:text-[6rem]">
          Get started
        </h2>
        <h3 className="text-[1rem] font-medium text-text 2sm:text-[1.8rem] sm:text-[2.5rem]">
          How to use ColorPal
        </h3>

        {/* Cards Grid */}
        <div className="mt-[2rem] grid grid-cols-1 2sm:mx-6 sm:gap-y-[4rem] md:grid-cols-2 md:gap-14 lg:grid-cols-3 lg:gap-y-0">
          <OnboardingCard
            image="OpenColorPal"
            text="Open ColorPal in the top right"
          />

          <OnboardingCard image="UIExplanation" text="Basic UI explanation" />

          <OnboardingCard
            image="Customization"
            text="Plenty of customization"
          />
        </div>
      </div>
    </section>
  );
}
