import { styled } from "../styles";

export const Container = styled("div", {
  display: "flex",
  maxWidth: "81rem",
  flexDirection: "column",
  alignItems: "center",
  margin: "0 auto",
  paddingTop: "60px",

  "@media(max-width: 1024px)": {
    maxWidth: "45rem",
  },
});
