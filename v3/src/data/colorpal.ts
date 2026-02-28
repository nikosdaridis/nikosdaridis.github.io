export const CHROME_STORE_URL =
  "https://chromewebstore.google.com/detail/colorpal-color-picker-eye/mbnpegpimodgjmlbfhkkdgbcfjmgpoad";

export const COLORPAL_DESCRIPTION =
  "Browser extension to pick colors from the screen, make tints and shades and download your palette!";

export interface ColorpalFeature {
  title: string;
  description: string;
  image: string;
  buttonLabel: string;
  buttonUrl: string;
}

export const colorpalFeatures: ColorpalFeature[] = [
  {
    title: "EyeDropper",
    description:
      "The EyeDropper tool lets users select colors directly from their screen with pixel-level precision. It simplifies color matching and replication in various developing, design and editing tasks.",
    image: "/colorpal/EyeDropper.gif",
    buttonLabel: "Add Now",
    buttonUrl: CHROME_STORE_URL,
  },
  {
    title: "Color Picker",
    description:
      "The Color Picker tool is a user-friendly utility to select specific colors from a palette. It streamlines the process of choosing colors, offering efficiency and precision in color selection.",
    image: "/colorpal/ColorPicker.gif",
    buttonLabel: "Try it Now",
    buttonUrl: CHROME_STORE_URL,
  },
  {
    title: "Tints and Shades",
    description:
      "The Tints and Shades tool is a handy resource for adjusting colors by adding white (tints) or black (shades). It helps create variations of a base color, achieving a range of lighter and darker tones with ease.",
    image: "/colorpal/TintsandShades.gif",
    buttonLabel: "Add Now",
    buttonUrl: CHROME_STORE_URL,
  },
  {
    title: "Move and Delete",
    description:
      "The Move tool allows users to change colors position, facilitating organization and arrangement. The Delete tool removes unwanted colors, streamlining the color selection process and enhancing overall efficiency.",
    image: "/colorpal/MoveandDelete.gif",
    buttonLabel: "Try it Now",
    buttonUrl: CHROME_STORE_URL,
  },
  {
    title: "Download Image and CSV",
    description:
      "The Download Image tool enables users to save their color palette as an image file, making it easy to share and reference. The Download CSV tool allows users to export their colors codes to a CSV file, which can be useful for managing and cataloging color information in a structured format.",
    image: "/colorpal/DownloadPNGandCSV.gif",
    buttonLabel: "Add Now",
    buttonUrl: CHROME_STORE_URL,
  },
];
