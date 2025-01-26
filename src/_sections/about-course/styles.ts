import { styled } from "../../styles";

export const Section = styled("section", {
  width: "100%",
  marginTop: "4.75rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  "@media(max-width: 1024px)": {
    padding: "0 1rem",
    marginTop: "6rem",
  },

  h3: {
    padding: "0 1rem",
    textAlign: "center",
    color: "$green",
    fontSize: "1.5rem",
  },
});

export const Header = styled("header", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: "952px",

  h1: {
    color: "$green",
    marginBottom: "1.5rem",
  },

  span: {
    fontSize: "1.25rem",
    textAlign: "center",
    lineHeight: "2.25rem",

    "@media(max-width: 1024px)": {
      display: "flex",
    },
  },
});

export const CardsContainer = styled("div", {
  marginTop: "3rem",
  marginBottom: "3rem",
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",

  "@media(max-width: 1024px)": {
    flexDirection: "column",
    gap: "1rem",
  },
});

export const Card = styled("div", {
  width: "636px",
  minHeight: "267px",
  padding: "2.25rem 3.5rem",
  background: "$card",
  boxSizing: "border-box",
  borderRadius: "10px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  "@media(max-width: 1024px)": {
    width: "100%",
    padding: "1.5rem",
    textAlign: "center",
  },
});

export const StyledList = styled("ul", {
  listStyle: "none",
  padding: 0,

  li: {
    fontSize: "1.25rem",
    lineHeight: "2.25rem",
    position: "relative",
    paddingLeft: "1rem",

    "&::before": {
      content: "'•'",
      fontSize: "1rem",
      position: "absolute",
      left: 0,
      top: "0",
      transform: "none",

      "@media(max-width: 1024px)": {
        content: "",
      },
    },

    "@media(max-width: 1024px)": {
      padding: "0.5rem 0",
    },
  },

  "@media(max-width: 1024px)": {
    li: {
      "&::before": {
        left: "1rem",
      },
    },
  },
});

export const NoStyleList = styled("ul", {
  listStyle: "none",
  padding: 0,

  li: {
    fontSize: "1.25rem",
    lineHeight: "2.25rem",
    paddingLeft: "0",

    "&::before": {
      content: "none",
    },
  },
});
