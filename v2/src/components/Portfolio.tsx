import Project from "./Project";
import { FaGithub, FaChrome } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="flex h-max min-h-screen w-full items-center justify-center bg-primary text-text"
    >
      {/* Container */}
      <div className="mx-auto flex h-full w-full max-w-fit flex-col justify-center text-center">
        <h2 className="mt-4 inline pb-8 text-4xl font-bold text-text lg:text-6xl">
          Portfolio
        </h2>

        {/* Projects Grid */}
        <div className="mx-14 grid grid-cols-1 gap-16 py-8 text-center md:grid-cols-2 lg:mx-0 xl:grid-cols-3">
          <Project
            image="osrspriceswiki.jpg"
            description="OldSchool Runescape Live GE Prices Utilities"
            techStack="Blazor, C#, Typescript, Tailwind"
            buttons={[
              {
                name: "Website",
                image: TbWorldWww,
                link: "https://osrsprices.wiki",
              },
              {
                name: "GitHub",
                image: FaGithub,
                link: "https://github.com/nikosdaridis/osrs-prices-wiki",
              },
            ]}
          >
            osrsprices.wiki
          </Project>

          <Project
            image="QRBarcodeApp.jpg"
            description="Maui Blazor Hybrid QR & Barcode Scanner and Generator Mobile App"
            techStack="Maui Blazor, C#, Typescript, Tailwind"
            buttons={[
              {
                name: "GitHub",
                image: FaGithub,
                link: "https://github.com/nikosdaridis/qr-barcode-maui-blazor-hybrid",
              },
            ]}
          >
            QR & Barcode App
          </Project>

          <Project
            image="eBanking.jpg"
            description="ASP.NET Core MVC application with Entity Framework Core and Identity"
            techStack="C#, JavaScript, HTML, CSS"
            buttons={[
              {
                name: "GitHub",
                image: FaGithub,
                link: "https://github.com/nikosdaridis/ebanking-asp-net-core",
              },
            ]}
          >
            eBanking
          </Project>

          <Project
            image="ColorPal.jpg"
            description="Chrome extension for picking colors and multiple color tools"
            techStack="TypeScript, HTML, CSS"
            buttons={[
              {
                name: "Web Store",
                image: FaChrome,
                link: "https://chromewebstore.google.com/detail/colorpal-color-picker-eye/mbnpegpimodgjmlbfhkkdgbcfjmgpoad",
              },
              {
                name: "GitHub",
                image: FaGithub,
                link: "https://github.com/nikosdaridis/colorpal",
              },
              {
                name: "Website",
                image: TbWorldWww,
                link: "https://daridis.com/colorpal",
              },
            ]}
          >
            ColorPal
          </Project>

          <Project
            image="Portfolio.jpg"
            description="Responsive minimalist portfolio website"
            techStack="React, TypeScript, Tailwind"
            buttons={[
              {
                name: "Website v2",
                image: TbWorldWww,
                link: "https://daridis.com",
              },
              {
                name: "GitHub",
                image: FaGithub,
                link: "https://github.com/nikosdaridis/nikosdaridis.github.io",
              },
              {
                name: "Website v1",
                image: TbWorldWww,
                link: "https://nikosdaridis.github.io/v1",
              },
            ]}
          >
            Portfolio v2
          </Project>
        </div>
      </div>
    </section>
  );
}
