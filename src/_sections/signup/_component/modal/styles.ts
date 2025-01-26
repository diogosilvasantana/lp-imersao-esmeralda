import { styled } from "../../../../styles"; // Assumindo que o styled está configurado aqui

// Estilo do fundo do modal
export const ModalBackground = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
});

// Estilo do conteúdo do modal
export const ModalContent = styled("div", {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
  maxWidth: "500px",
  width: "100%",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",

  h2: {
    fontSize: "1.5rem",
    color: "$green", // Assumindo que $green é uma cor definida no tema
    marginBottom: "1rem",
  },

  p: {
    color: "$darkGrey",
    fontSize: "1rem",
    marginBottom: "1.5rem",
  },
});

// Estilo do botão dentro do modal
export const CloseButton = styled("button", {
  background: "$linearGreen", // Use o mesmo gradiente que usa para botões
  padding: "12px 24px",
  borderRadius: "10px",
  border: "none",
  color: "$white",
  fontSize: "1rem",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0px 11px 26.5px rgba(0, 0, 0, 0.25)",
  transition: "transform 0.2s ease",

  "&:hover": {
    transform: "scale(1.02)",
  },
});
