import { CHROME_STORE_URL } from "./colorpal";
import type { Link } from "../types";

export interface Project {
  name: string;
  summary: string;
  techStack: string;
  image: string;
  links: Link[];
}

export const projects: Project[] = [
  {
    name: "osrsprices.wiki",
    summary: "OldSchool Runescape Live GE Prices Utilities",
    techStack: "Blazor, C#, Typescript, Tailwind",
    image: "/portfolio/osrspriceswiki.jpg",
    links: [
      { label: "Website", url: "https://osrsprices.wiki" },
      {
        label: "GitHub",
        url: "https://github.com/nikosdaridis/osrs-prices-wiki",
      },
    ],
  },
  {
    name: "QR & Barcode App",
    summary: "Maui Blazor Hybrid QR & Barcode Scanner and Generator Mobile App",
    techStack: "Maui Blazor, C#, Typescript, Tailwind",
    image: "/portfolio/QRBarcodeApp.jpg",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/nikosdaridis/qr-barcode-maui-blazor-hybrid",
      },
    ],
  },
  {
    name: "eBanking",
    summary:
      "ASP.NET Core MVC application with Entity Framework Core and Identity",
    techStack: "C#, JavaScript, HTML, CSS",
    image: "/portfolio/eBanking.jpg",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/nikosdaridis/ebanking-asp-net-core",
      },
    ],
  },
  {
    name: "ColorPal",
    summary: "Chrome extension for picking colors and multiple color tools",
    techStack: "TypeScript, HTML, CSS",
    image: "/portfolio/ColorPal.jpg",
    links: [
      {
        label: "Web Store",
        url: CHROME_STORE_URL,
      },
      {
        label: "GitHub",
        url: "https://github.com/nikosdaridis/colorpal",
      },
      { label: "Website", url: "https://daridis.com/colorpal" },
    ],
  },
  {
    name: "Portfolio v3",
    summary: "Responsive minimalist portfolio website",
    techStack: "Astro, TypeScript, Tailwind",
    image: "/portfolio/Portfolio.jpg",
    links: [
      { label: "Website", url: "https://daridis.com" },
      {
        label: "GitHub",
        url: "https://github.com/nikosdaridis/nikosdaridis.github.io",
      },
    ],
  },
];
