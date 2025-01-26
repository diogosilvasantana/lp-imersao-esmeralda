import { styled } from "../../../../styles";

export const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "0.875rem",
  width: "100%",
  zIndex: 1,
  position: "relative",
  top: "-50px",

  "@media(max-width: 768px)": {
    gap: "1.5rem",
    top: "-30px",
  },
});

export const Input = styled("input", {
  height: "64px",
  width: "100%",
  borderRadius: "10px",
  border: "1px solid $green",
  backgroundColor: "$white",
  fontSize: "1.125rem",
  lineHeight: "1.625rem",
  color: "$normalGrey",
  padding: "0 1rem",
  boxSizing: "border-box",

  "&[type='date']::-webkit-calendar-picker-indicator": {
    cursor: "pointer",
    filter: "invert(0.3)",
  },
});

export const Select = styled("select", {
  height: "64px",
  width: "100%",
  borderRadius: "10px",
  border: "1px solid $green",
  backgroundColor: "$white",
  fontSize: "1.125rem",
  lineHeight: "1.625rem",
  color: "$normalGrey",
  padding: "0 1rem",
  appearance: "none",
  backgroundImage: "url('/assets/icons/arrow-down.svg')", // Ícone de seta personalizada
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 1rem center",
  backgroundSize: "1rem",
  boxSizing: "border-box",
});

export const Row = styled("div", {
  display: "flex",
  gap: "0.875rem",
  width: "100%",

  [`& ${Input}`]: {
    flex: 1,
    height: "64px", // Garante que inputs dentro da Row tenham altura correta
  },

  [`& ${Select}`]: {
    flex: 1,
    height: "64px", // Garante altura consistente no Select também
  },
});

export const CheckboxGroup = styled("div", {
  display: "flex",
  alignItems: "center",
  padding: "0 1rem",
  backgroundColor: "$white",
  border: "1px solid $green",
  borderRadius: "10px",
  height: "64px",
  gap: "2rem",
  width: "100%",

  "@media(max-width: 1024px)": {
    padding: "1rem",
    height: "195px",
    flexDirection: "column",
    alignItems: "start",
  },

  label: {
    fontSize: "1.125rem",
    color: "$normalGrey",
    margin: 0,
  },
});

export const CheckboxContainer = styled("div", {
  display: "flex",
  gap: "1rem",
  alignItems: "center",

  "@media(max-width: 768px)": {
    flexDirection: "column",
  },
});

export const CheckboxLabel = styled("label", {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  fontSize: "1.125rem",
  color: "$normalGrey",
});

export const CheckboxInput = styled("input", {
  width: "22px",
  height: "22px",
  border: "1px solid $green",
  borderRadius: "4px",
  appearance: "none",
  backgroundColor: "$white",
  cursor: "pointer",
  position: "relative",

  "&:checked": {
    backgroundColor: "$green", // Fundo verde quando selecionado
    borderColor: "$green",

    "&::before": {
      content: "''",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "16px",
      height: "16px",
      backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23FFFFFF%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3E%3Cpolyline points=%2220 6 9 17 4 12%22/%3E%3C/svg%3E')`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    },
  },
});

export const Label = styled("label", {
  fontSize: "1.125rem",
  color: "$normalGrey",
});

export const SubmitButton = styled("button", {
  height: "64px",
  width: "100%",
  borderRadius: "10px",
  background: "$goldGradient",
  border: "1px solid $darkGold",
  color: "$bege",
  fontSize: "1.375rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  cursor: "pointer",
  transition: "background-color 0.3s ease, transform 0.2s ease",
  boxShadow: "0px 11px 26.5px rgba(0, 0, 0, 0.25)",

  "&:hover": {
    backgroundColor: "$darkGold",
    transform: "scale(1.02)",
  },

  "&:active": {
    transform: "scale(0.98)", // Efeito de pressionado
  },
});

export const SignupFooter = styled("footer", {
  marginTop: "4.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "1.25rem",

  h2: {
    fontSize: "2.5rem",
    fontWeight: "normal",
    lineHeight: "2rem",
    letterSpacing: "-3%",
  },
});

export const MobileOnlyLabel = styled("label", {
  display: "none", // Oculta por padrão

  // Estilo aplicado a telas de largura máxima de 768px (dispositivos móveis)
  "@media (max-width: 768px)": {
    display: "block", // Mostra apenas no mobile
    marginBottom: "0.5rem",
    fontSize: "1.125rem",
    color: "$white",
  },
});
