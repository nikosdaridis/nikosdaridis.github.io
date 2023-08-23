import { useEffect } from "react";
import OnboardingCard from "../components/Colorpal/OnboardingCard";

export default function ColorpalOnboarding({
  setTitleAndFavicon,
}: {
  setTitleAndFavicon: Function;
}) {
  useEffect(() => {
    setTitleAndFavicon("ColorPal", "/ColorpalLogo.png");
  }, []);

  return (
    <section className="flex h-max min-h-screen w-full items-center justify-center bg-gradient-radial from-[#f0f6ff] via-[#f5f9ff] to-[#fafcff] text-[#1486ff]">
      {/* Container */}
      <div className="mx-auto flex h-full w-full max-w-fit flex-col items-center justify-center p-4 text-center">
        {/* Pin */}
        <div className="absolute right-[80px] top-[15px] hidden animate-bounce md:inline-flex lg:right-[97px]">
          <img className="h-[40px] w-[40px]" src="/Colorpal/Arrow.png" />
          <p className="absolute right-[-75px] top-[50px] inline-flex w-[280px] flex-wrap items-center justify-center text-2xl font-semibold lg:right-[-90px]">
            Click extensions
            <img
              className="mx-1 h-[25px] w-[25px]"
              src="/Colorpal/Extension.png"
            />
            and pin
            <img className="mx-1 h-[25px] w-[25px]" src="/Colorpal/Pin.png" />
            ColorPal
            <img className="mx-1 h-[25px] w-[25px]" src="/Colorpal/Icon.png" />
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
        <div className="mx-6 mb-12 mt-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:mb-0 lg:grid-cols-3 xl:gap-24">
          <OnboardingCard
            image="OpenColorpal"
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
