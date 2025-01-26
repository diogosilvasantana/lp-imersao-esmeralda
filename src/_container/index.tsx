import { useRef } from "react";
import AboutCourseSection from "../_sections/about-course";
import AboutProartSection from "../_sections/about-proart";
import ContactSection from "../_sections/contact";
import FaqSection from "../_sections/faq";
import FooterSection from "../_sections/footer";
import HeaderSection from "../_sections/header";
import InfosSection from "../_sections/infos";
import SignupSection from "../_sections/signup";
import TeachersSection from "../_sections/teachers";
import { Container } from "./styles";

const ContainerPage = () => {
  const signupRef = useRef<HTMLDivElement>(null);

  const handleScrollToSignup = () => {
    signupRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <HeaderSection onScrollToSignup={handleScrollToSignup} />
      <InfosSection />
      <AboutCourseSection />
      <TeachersSection />
      <AboutProartSection />
      <div ref={signupRef}>
        <SignupSection />
      </div>
      <FaqSection />
      <ContactSection />
      <FooterSection />
    </Container>
  );
};

export default ContainerPage;
