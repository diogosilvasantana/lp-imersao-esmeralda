import Image from "next/image";
import { AboutProartText, Section, StarsImage } from "./styles";
import proartPhoto from "../../assets/images/photos/proart.png";
import starsImage from "../../assets/images/others/stars.svg";

const AboutProartSection = () => {
  return (
    <Section>
      <StarsImage>
        <Image src={starsImage} alt="Estrelas" />
      </StarsImage>

      <Image src={proartPhoto} alt="Foto da Proart" />

      <AboutProartText>
        <h1>Sobre a Proart</h1>
        <span>
          Envolvida nas maiores vertentes da arte, a Proart Produções traz ao
          público espetáculos de qualidade inquestionável com profissionais que
          são referência em suas áreas. Há 7 anos seus espetáculos, com músicas
          autorais, encantam aos que assistem e deixam a sala de espetáculos com
          reflexões e questionamentos importantes para a construção e
          desenvolvimento do caráter humano. A Proart possui sede própria com
          estúdio equipado para edição e gravação musical, sala de ensaios
          equipada com espelhos e ar condicionado além de um ambiente
          aconchegante e totalmente artístico. Em 2023, um projeto piloto para o
          sonho de desenvolver seu curso regular de Teatro Musical, aconteceu
          como um &quot;curso de férias&quot;, totalmente gratuito, com
          espetáculo de encerramento aberto ao público e muito bem sucedido nos
          trouxe até aqui provando que &quot;Todos tem o direito de voar&quot;.
        </span>

        <span>&quot;Venha ver, esse mundo esmeralda&quot; com a gente!</span>
      </AboutProartText>
    </Section>
  );
};

export default AboutProartSection;
