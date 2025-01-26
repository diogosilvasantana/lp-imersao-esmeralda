import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#FFFFFF",

      card: "#1F1F1F",

      darkGrey: "#232323",
      normalGrey: "#636363",
      lightGrey: "#ADADAD",
      bgFaq: "#2D2D2D",

      green: "#9FC519",
      bege: "#8A744E",

      linearGreen:
        "linear-gradient(90deg, rgba(159, 197, 25, 1) 0%, rgba(122, 156, 0, 1) 100%)",
      gold: "linear-gradient(90deg, rgba(221, 193, 121, 1) 0%, rgba(207, 160, 79, 1) 20%, rgba(250, 231, 140, 1) 60%, rgba(218, 174, 84, 1) 90%, rgba(251, 233, 138, 1) 100%)",
      darkGold:
        "linear-gradient(90deg, rgba(156, 94, 37, 1) 0%, rgba(199, 157, 59, 1) 20%, rgba(156, 94, 37, 1) 50%, rgba(191, 151, 90, 1) 76%, rgba(156, 94, 37, 1) 100%)",
      goldGradient:
        "linear-gradient(90deg, #DDC179 0%, #CFA04F 20%, #FAE78C 60%, #DAAE54 90%, #FBE98A 100%)",
    },
  },
});
