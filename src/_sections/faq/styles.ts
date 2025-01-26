import { styled } from "../../styles";

export const Section = styled("section", {
  margin: "4.75rem 0 7.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",

  h1: {
    textAlign: "center",
    color: "$green",
    marginBottom: "3rem",
  },

  "@media(max-width: 768px)": {
    margin: "4.5rem 0",
  },
});
