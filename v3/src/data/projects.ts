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
    name: "ColorPal",
    summary: "Color picker and palette browser extension",
    techStack: "Blazor, C#, TypeScript, Tailwind",
    image: "/projects/colorpal.jpg",
    links: [
      {
        label: "Web Store",
        url: CHROME_STORE_URL,
      },
      {
        label: "GitHub",
        url: "https://github.com/nikosdaridis/colorpal-blazor-browser-extension",
      },
      { label: "Website", url: "https://daridis.com/colorpal" },
    ],
  },
  {
    name: "QR and Barcode mobile App",
    summary: "QR - Barcode Scanner and Generator Mobile App",
    techStack: "Maui Blazor, C#, Typescript, Tailwind",
    image: "/projects/qrbarcodeapp.jpg",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/nikosdaridis/qr-barcode-maui-blazor-hybrid",
      },
    ],
  },
  {
    name: "Bybit Trading Bot",
    summary: "Cryptocurrency trading bot for Bybit Perpetual Futures",
    techStack: ".NET, C#",
    image: "/projects/bybittradingbot.jpg",
    links: [
      {
        label: "Website",
        url: "https://bybit-perpetuals-trading-bot.pages.dev",
      },
      {
        label: "GitHub",
        url: "https://github.com/nikosdaridis/bybit-perpetuals-trading-bot",
      },
    ],
  },
  {
    name: "osrsprices.wiki",
    summary: "OldSchool Runescape Live Prices Utilities",
    techStack: "Blazor, C#, Typescript, Tailwind",
    image: "/projects/osrspriceswiki.jpg",
    links: [
      { label: "Website", url: "https://osrsprices.wiki" },
      {
        label: "GitHub",
        url: "https://github.com/nikosdaridis/osrs-prices-wiki",
      },
    ],
  },
  {
    name: "Hattrick.org scraper",
    summary: "Scraper for Hattrick.org players transfer market",
    techStack: ".Net, C#, Playwright",
    image: "/projects/hattrickscraper.jpg",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/nikosdaridis/hattrick-transfers-scraper",
      },
    ],
  },
  {
    name: "Portfolio v3",
    summary: "Responsive minimalist portfolio website",
    techStack: "Astro, TypeScript, Tailwind",
    image: "/projects/portfolio.jpg",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/nikosdaridis/nikosdaridis.github.io",
      },
    ],
  },
];
