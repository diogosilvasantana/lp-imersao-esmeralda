import {
  Content,
  Description,
  DestaqueTexto,
  Logos,
  Section,
} from "./../../styles/success-page/styles";
import Image from "next/image";
import proartLogo from "../../assets/images/logos/proart-logo.svg";
import imersaoEsmeraldaLogo from "../../assets/images/logos/imersao-esmeralda-logo.svg";
import ContactSection from "../../_sections/contact";
import FooterSection from "../../_sections/footer";

const SuccessPage = () => {
  return (
    <Section>
      <Content>
        <Logos>
          <Image
            src={proartLogo}
            className="logo-proart"
            alt="Logo Proart Produções"
          />
          <Image
            src={imersaoEsmeraldaLogo}
            className="logo-imersao"
            alt="Logo Imersão Esmeralda"
          />
        </Logos>

        <Description>
          <h1>
            Felicitozes, você garantiu seu passaporte
            <span>pra embarcar para o Mundo Esmeralda!</span>
          </h1>

          <DestaqueTexto>
            Enviamos um e-mail com todos os detalhes da imersão. Favor
            verifique, inclusive na caixa de spams. Caso não tenha recebido,
            entre em contato conosco.
          </DestaqueTexto>
        </Description>
      </Content>

      <ContactSection />
      <FooterSection />
    </Section>
  );
};

export default SuccessPage;
