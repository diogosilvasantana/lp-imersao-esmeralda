import { styled } from "../../styles";

export const Section = styled("section", {
  margin: "0 0 4.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",

  h1: {
    color: "$green",
    marginBottom: "3rem",
  },
});

export const Card = styled("div", {
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  width: "56rem",
  maxWidth: "856px",
  padding: "2.5rem 3.25rem",
  backgroundColor: "$card",
  borderRadius: "10px",
  boxShadow: "0px 11px 26.5px rgba(0, 0, 0, 0.15)",

  "@media(max-width: 1024px)": {
    width: "100%",
    padding: "1.375rem 0.75rem",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "1rem",
  },
});

export const LocalDescription = styled("div", {
  display: "flex",
  flexDirection: "column",
  fontSize: "1.25rem",
  lineHeight: "2rem",

  span: {
    display: "block",
  },

  "@media(max-width: 1024px)": {
    fontSize: "0.75rem",
    lineHeight: "1.5rem",
  },
});

export const ContactItem = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",

  h3: {
    fontSize: "1.25rem",
    color: "$green",
  },

  a: {
    textDecoration: "none",
    color: "inherit",

    "&:hover": {
      color: "$green",
    },
  },
});

export const SocialMediaContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",

  img: {
    cursor: "pointer",
  },
});
