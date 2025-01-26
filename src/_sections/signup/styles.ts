import { styled } from "../../styles";

export const Section = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  width: "98.8vw",
  minHeight: "100vh",
  overflowX: "hidden",
  padding: "4.25rem 0 5.75rem",

  "@media (max-width: 1024px)": {
    width: "100%",
    padding: "2.25rem 1rem 4.5rem",
  },

  "&::before": {
    backgroundImage: `url('/assets/images/bg/bg-formulario.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,

    "@media (max-width: 1024px)": {
      backgroundAttachment: "scroll",
    },
  },
});

export const HeaderTitle = styled("header", {
  width: "100%",
  maxWidth: "39.75rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@media (max-width: 1024px)": {
    marginTop: "1rem",
    flexDirection: "column",
    gap: 0,
    maxWidth: "13.25rem",
    textAlign: "center",
  },

  h1: {
    position: "relative",
    top: "-28px",
  }
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "39.75rem",
});

export const PaymentMethodsIcons = styled("div" , {
  display: "flex",
  alignItems: "center",
  gap: "3.75rem",
  justifyContent: "space-between",

  "@media(max-width: 768px)": {
    flexDirection: "column",
    gap: "1.25rem"
  }
})

export const PaymentMethodItem = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  gap: "1rem",
})