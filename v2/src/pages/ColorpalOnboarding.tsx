import { Helmet } from "react-helmet-async";
import OnboardingCard from "../components/Colorpal/OnboardingCard";

export default function ColorpalOnboarding() {
  return (
    <>
      <Helmet>
        <title>ColorPal - Get Started</title>
        <meta
          name="description"
          content="Browser extension to pick colors from the screen, make tints and shades and download your palette!"
        />
        <link rel="icon" href="/ColorpalLogo.png" />
        <link rel="canonical" href="https://daridis.com/colorpal/onboarding" />
      </Helmet>

      <section className="flex h-max min-h-screen w-full items-center justify-center bg-gradient-radial from-[#f0f6ff] via-[#f5f9ff] to-[#fafcff] text-[#1486ff]">
        {/* Container */}
        <div className="mx-auto flex h-full w-full max-w-fit flex-col items-center justify-center p-4 text-center">
          {/* Pin */}
          <div className="absolute right-[80px] top-[15px] hidden animate-bounce md:inline-flex lg:right-[97px]">
            <img
              className="h-[40px] w-[40px]"
              src="/Colorpal/OnBoarding/Arrow.png"
              alt="Arrow"
            />
            <p className="absolute right-[-75px] top-[50px] inline-flex w-[280px] flex-wrap items-center justify-center text-2xl font-semibold lg:right-[-90px]">
              Click extensions
              <img
                className="mx-1 h-[25px] w-[25px]"
                src="/Colorpal/OnBoarding/Extension.png"
                alt="Extension"
              />
              and pin
              <img
                className="mx-1 h-[25px] w-[25px]"
                src="/Colorpal/OnBoarding/Pin.png"
                alt="Pin"
              />
              ColorPal
              <img
                className="mx-1 h-[25px] w-[25px]"
                src="/Colorpal/OnBoarding/Icon.png"
                alt="Colorpal"
              />
            </p>
          </div>

          {/* Title */}
          <h2 className="text-[2rem] font-bold text-text 2sm:text-[3.8rem] sm:text-[5rem] md:mt-[8rem] lg:mt-[0rem] lg:text-[6rem]">
            Get started
          </h2>
          <h1 className="text-[1rem] font-semibold text-text 2sm:text-[1.8rem] sm:text-[2.5rem]">
            How to use ColorPal
          </h1>

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
    </>
  );
}
