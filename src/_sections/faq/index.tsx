import { Section } from "./styles"
import FaqItem from "./_components/faq-item";
import { faqData } from "./_data/faq-data";

const FaqSection = () => {
  return (
    <Section>
    <h1>Dúvidas Frequentes</h1>
    {faqData.map((item, index) => (
      <FaqItem key={index} question={item.question} answer={item.answer} />
    ))}
  </Section>
  )
}

export default FaqSection;