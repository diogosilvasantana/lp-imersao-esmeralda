import { styled } from "../../../../styles";

export const FaqContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "53.5rem",

  "@media(max-width: 768px)": {
    width: "100%",
    padding: "0 1rem",
  },
});

export const ItemContainer = styled("div", {
  width: "100%",
  borderRadius: "10px",
  overflow: "hidden",
  backgroundColor: "$bgFaq",
  transition: "all 0.3s ease",

  "@media(max-width: 768px)": {
    width: "90vw",
  },
});

export const QuestionContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 2rem",
  minHeight: "67px",
  cursor: "pointer",

  "@media(max-width: 768px)": {
    padding: "1rem 3rem 1rem 2rem",
  },
});

export const QuestionText = styled("p", {
  fontSize: "1.25rem",
  lineHeight: "2.25rem",
  color: "$white",
  margin: 0,

  "@media(max-width: 768px)": {
    fontSize: "1rem",
    lineHeight: "2rem",
  },
});

export const AnswerContainer = styled("div", {
  padding: "0 2rem",
  maxHeight: 0,
  overflow: "hidden",
  transition: "overflow 0.3s max-height 0.3s ease, padding 0.3s ease",

  variants: {
    isOpen: {
      true: {
        maxHeight: "500px",
        padding: "1rem 2rem",
      },
      false: {
        maxHeight: 0,
        padding: "0 2rem",
      },
    },
  },

  "@media(max-width: 768px)": {
    padding: "0 1rem",
  },
});

export const AnswerText = styled("p", {
  top: "-20px",
  position: "relative",
  padding: "0 2rem",
  fontSize: "1rem",
  lineHeight: "1.75rem",
  color: "$lightGrey",
  margin: 0,

  "@media(max-width: 768px)": {
    padding: "0.5rem 3rem 0px 2rem;",
  },
});

export const Icon = styled("img", {
  width: "24px",
  height: "24px",
  transition: "transform 0.3s ease",

  variants: {
    isOpen: {
      true: {
        transform: "rotate(180deg)",
        content: "url('/assets/icons/arrow-down.svg')",
      },
      false: {
        transform: "rotate(0deg)",
        content: "url('/assets/icons/arrow-down.svg')",
      },
    },
  },

  "@media(max-width: 768px)": {
    position: "relative",
    left: "1.5rem",
  },
});
