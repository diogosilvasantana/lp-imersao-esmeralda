import { styled } from "../../../../styles";

export const InfoItemContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",

  h1: {
    color: "$green",

    "@media(max-width: 1024px)": {
      fontSize: "2.5rem",
      lineHeight: "48px",
    },
  },
});
