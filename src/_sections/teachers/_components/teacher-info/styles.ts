import { styled } from "../../../../styles";

export const Teacher = styled("article", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "5rem",

  "@media(max-width: 1024px)": {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 0,
  },
});

export const TeacherPhoto = styled("div", {
  display: "flex",
  justifyContent: "start",

  "@media(max-width: 1024px)": {
    marginBottom: "1.75rem",
    justifyContent: "center",
    width: "100%",

    img: {
      width: "100%",
      height: "100%",
      borderRadius: "10px",
    },
  },
});

export const TeacherInfoData = styled("div", {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "1rem",
});

export const TeacherHeader = styled("header", {
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",

  "@media(max-width: 1024px)": {
    gap: "0.75rem",
  },
});

export const TeacherTitle = styled("h2", {
  fontSize: "2rem",
  fontWeight: 300,
  color: "$green",
});

export const TeacherSpecialty = styled("div", {
  display: "flex",
  flexDirection: "column",
  lineHeight: "1.7rem",
});

export const TeacherBio = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "1.25rem",

  p: {
    fontSize: "1rem",
    fontWeight: 300,
    lineHeight: "1.625rem",
  },
});
