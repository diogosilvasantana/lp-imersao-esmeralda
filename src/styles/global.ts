import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    "-webkit-font-smoothing": "antialiased",
    background: "$darkGrey",
    color: "$white",
  },

  "body, input, textarea, button": {
    fontFamily: "Outfit",
    fontWeight: 400,
  },

  h1: {
    fontFamily: "OPTIRubens Wide",
    fontWeight: 400,
    fontSize: "3.25rem",
    lineHeight: "4rem",
    letterSpacing: "-2px",
  },
});
