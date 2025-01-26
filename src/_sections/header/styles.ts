import { styled } from "../../styles";

export const Section = styled("section", {
  "&::before": {
    backgroundImage: `url('/assets/images/bg/bg-topo.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionX: "center",
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
    top: 0,
    left: 0,
  },
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",

  "@media(max-width: 1024px)": {
    padding: "0 0.75rem",
  },
});

export const Logos = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  alignItems: "center",
  justifyContent: "space-between",

  "@media(max-width: 1024px)": {
    gap: 0,
  },

  img: {
    width: "100%",
    height: "100%",

    "@media(max-width: 1024px)": {
      width: "85%",
    },
  },

  ".logo-proart": {
    maxWidth: "150px",

    "@media(max-width: 1024px)": {
      maxWidth: "125px",
    },
  },

  ".logo-imersao": {
    maxWidth: "464px",

    "@media(max-width: 1024px)": {
      maxWidth: "333px",
    },
  },
});

export const Description = styled("div", {
  marginTop: "3rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
  alignItems: "center",
  justifyContent: "space-between",

  "@media(max-width: 1024px)": {
    marginTop: "2rem",
  },

  h1: {
    textAlign: "center",
    span: {
      display: "block",
      color: "$green",
    },

    "@media(max-width: 1024px)": {
      paddingInline: "2rem",
    },
  },
});

export const DestaqueTexto = styled("span", {
  textAlign: "center",
  maxWidth: "708px",
  fontSize: "1.25rem",
  fontWeight: 300,
  lineHeight: "2.25rem",
});

export const Button = styled("button", {
  marginBlock: "3.75rem",
  background: "$linearGreen",
  padding: "22px 48px",
  borderRadius: "10px",
  border: "solid 1px $green",
  color: "$white",
  fontSize: "1.375rem",
  fontWeight: "bold",
  boxShadow: "0px 11px 26.5px rgba(0, 0, 0, 0.25)",
  cursor: "pointer",
  transition: "transform 0.2s ease",

  "&:hover": {
    transform: "scale(1.02)", 
  },

  "@media(max-width: 1024px)": {
    marginBlock: "1rem",
  },
});
