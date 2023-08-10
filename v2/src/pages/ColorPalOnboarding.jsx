import OnboardingCard from "../components/ColorPal/OnboardingCard";

export default function ColorPalOnboarding() {
  return (
    <section className="h-full min-h-screen w-full bg-gradient-radial from-[#f0f6ff] via-[#f5f9ff] to-[#fafcff] text-[#1486ff]">
      {/* Container */}
      <div className="mx-auto flex w-full max-w-fit flex-col justify-center p-4 text-center">
        {/* Pin */}
        <div className="absolute right-[95px] top-[20px] hidden animate-bounce md:inline-flex">
          <img className="h-[40px] w-[40px]" src="/ColorPal/Arrow.png" />
          <p className="absolute right-[-90px] top-[50px] inline-flex w-[300px] flex-wrap items-center justify-center text-2xl font-semibold">
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
        <h2 className="mt-[8rem] text-[2rem] font-bold text-text 2sm:text-[3.8rem] sm:text-[5rem] lg:mt-[6rem] lg:text-[6rem] xl:mt-[4rem]">
          Get started
        </h2>
        <h3 className="text-[1rem] font-medium text-text 2sm:text-[1.8rem] sm:text-[2.5rem]">
          How to use ColorPal
        </h3>

        {/* Cards Grid */}
        <div className="mt-[2rem] grid grid-cols-1 gap-14 2sm:mx-6 sm:gap-y-[4rem] md:grid-cols-2 lg:grid-cols-3 lg:gap-y-0">
          <OnboardingCard
            image="Onboarding1.png"
            imageAlt="Open ColorPal"
            text="Open ColorPal in the top right"
          />

          <OnboardingCard
            image="Onboarding2.png"
            imageAlt="Layout explanation"
            text="Layout explanation of ColorPal"
          />

          <OnboardingCard
            image="Onboarding3.png"
            imageAlt="Options"
            text="Plenty of options for customization"
          />
        </div>
      </div>
    </section>
  );
}
