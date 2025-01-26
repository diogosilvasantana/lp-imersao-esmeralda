import { styled } from "../../styles";

export const Section = styled("section", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "4.5rem 0",

  "@media(max-width:1024px)": {
    padding: "0 0.75rem",
    margin: "3.5rem 0",
  },

  h1: {
    textAlign: "center",
    color: "$green",
    marginBottom: "5.75rem",

    "@media(max-width:768px)": {
      marginBottom: "2.25rem",
    },
  },
});

export const TeacherData = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  gap: "3rem",
});

export const Divider = styled("div", {
  width: "100%",
  height: "1px",
  marginTop: "3rem",
  backgroundColor: "$white",
  opacity: 0.05,
});
