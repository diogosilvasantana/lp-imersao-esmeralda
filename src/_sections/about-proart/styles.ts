import { styled } from "../../styles";

export const Section = styled("section", {
  position: "relative",
  margin: "6.5rem 0",
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "6.5rem",

  "@media(max-width:1024px)": {
    padding: "0 0.75rem",
    flexDirection: "column",
    gap: "2rem",
    margin: "0 0 3.5rem",

    img: {
      width: "100%",
      height: "100%",
    },
  },
});

export const AboutProartText = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",

  h1: {
    color: "$green",
  },

  span: {
    fontSize: "1rem",
    lineHeight: "2.25rem",

    "@media(max-width:1024px)": {
      fontSize: "1.25rem",
      textAlign: "center",
    },
  },

  "@media(max-width:1024px)": {
    alignItems: "center",
    justifyContent: "center",
  },
});

export const StarsImage = styled("div", {
  position: "absolute",
  top: "-70px",
  right: 0,
  zIndex: 2,

  "@media(max-width: 1024px)": {
    position: "relative",
    top: 0,
    right: 0,
  },
});
