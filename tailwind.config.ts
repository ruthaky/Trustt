import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { withUt } from "uploadthing/tw";

export default withUt ({
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          '50': "#efedff",
          '100': "#dad6fd",
          '200': "#b1abf2",
          '300': "#877ce9",
          '400': "#6254e0",
          '500': "#4b3bdc",
          '600': "#3e2fdb",
          '700': "#3021c2",
          '800': "#281eaf",
          '900': "#1f179b",
        },
        secondary: {
          '50': "#ecffe7",
          '100': "#d9fbd2",
          '200': "#b4f5a5",
          '300': "#8bf075",
          '400': "#6aeb4c",
          '500': "#54e833",
          '600': "#48e724",
          '700': "#38cd16",
          '800': "#2db60e",
          '900': "#1d9d00",
        }
      }
    },
  },
  plugins: [],
}) satisfies Config;
