import { styled } from "../../../../styles";

export const IconContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "86px",
  height: "86px",
  minWidth: "64px",
  minHeight: "64px",
  borderRadius: "10px",
  background: "$linearGreen",

  "@media(max-width: 1024px)": {
    width: "64px",
    height: "64px",
  },
});

export const Icon = styled("div", {
  display: "flex",

  "@media(max-width: 1024px)": {
    img: {
      width: "27px",
      height: "27px",
    },
  },
});
