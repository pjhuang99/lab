import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F4F1EA",
        ink: "#181818",
        muted: "#777777",
        acid: "#B7FF3C",
        line: "rgba(24, 24, 24, 0.14)",
        frost: "var(--ctc-bg)",
        slate: "var(--ctc-title)",
        sand: "var(--ctc-body)",
        pumpkin: "var(--ctc-button)",
        mist: "var(--ctc-accent)",
        bone: "#E2E1E4",
        marble: "#C4CBCF",
        cloud: "#F1F0ED"
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "var(--font-noto)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
        mono: [
          "var(--font-jetbrains)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace"
        ],
        serif: [
          "var(--font-noto-serif)",
          "Songti SC",
          "STSong",
          "SimSun",
          "serif"
        ]
      },
      maxWidth: {
        content: "1160px",
        prose: "70ch"
      },
      boxShadow: {
        offset: "4px 4px 0 rgba(24, 24, 24, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
