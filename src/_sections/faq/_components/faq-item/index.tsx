import { useState } from "react";
import { ItemContainer, QuestionContainer, QuestionText, AnswerText, Icon, FaqContainer } from "./styles";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FaqContainer>
      <ItemContainer>
        <QuestionContainer onClick={() => setIsOpen(!isOpen)}>
          <QuestionText>{question}</QuestionText>
          <Icon isOpen={isOpen} />
        </QuestionContainer>
        {isOpen && <AnswerText>{answer}</AnswerText>}
      </ItemContainer>
    </FaqContainer>
  );
};

export default FaqItem;
