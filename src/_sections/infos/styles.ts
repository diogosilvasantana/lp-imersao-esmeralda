import { styled } from "../../styles";

export const Section = styled("section", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 1rem",
});

export const Card = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  width: "56rem",
  maxWidth: "856px",
  padding: "4rem",
  backgroundColor: "$card",
  borderRadius: "10px",
  boxShadow: "0px 11px 26.5px rgba(0, 0, 0, 0.15)",

  "@media(max-width: 1024px)": {
    width: "100%",
    padding: "1.375rem 0.75rem",
    gap: "0.5rem",
  },
});

export const LocalDescription = styled("div", {
  display: "flex",
  flexDirection: "column",
  fontSize: "1.25rem",
  lineHeight: "2rem",

  a: {
    pointerEvents: "none",
    textDecoration: "none",
    color: "inherit",
  },

  span: {
    display: "block",
  },

  "@media(max-width: 1024px)": {
    fontSize: "0.75rem",
    lineHeight: "1.5rem",
  },
});

export const PrecoImage = styled("div", {
  position: "absolute",
  top: "-70px",
  right: "-115px",
  zIndex: 2,

  "@media(max-width: 1024px)": {
    position: "relative",
    top: 0,
    right: 0,
  },
});
