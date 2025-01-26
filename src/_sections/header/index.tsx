import {
  Button,
  Content,
  Description,
  DestaqueTexto,
  Logos,
  Section,
} from "./styles";
import Image from "next/image";
import proartLogo from "../../assets/images/logos/proart-logo.svg";
import imersaoEsmeraldaLogo from "../../assets/images/logos/imersao-esmeralda-logo.svg";

const HeaderSection = ({ onScrollToSignup }: { onScrollToSignup: () => void }) => {
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
            Vem com a gente? Pra onde?
            <span>Pra cidade das esmeraldas</span>
          </h1>

          <DestaqueTexto>
            Worksession para divulgação da abertura da primeira turma do curso
            regular de teatro musical da Proart Produções.
          </DestaqueTexto>

          <Button onClick={onScrollToSignup}>INSCREVA-SE AGORA!</Button>
        </Description>
      </Content>
    </Section>
  );
};

export default HeaderSection;
