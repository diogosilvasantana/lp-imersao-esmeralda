import {
  Section,
  Header,
  CardsContainer,
  Card,
  StyledList,
  NoStyleList,
} from "./styles";

const AboutCourseSection = () => {
  return (
    <Section>
      <Header>
        <h1>Sobre a Imersão</h1>
        <span>
          A Imersão Esmeralda é uma experiência única de aprendizado intensivo
          em teatro musical. Este evento marca o lançamento do curso regular de
          Teatro Musical na Proart Produções.
        </span>
      </Header>

      <CardsContainer>
        <Card>
          <h3>Destaques</h3>
          <StyledList>
            <li>
              Aulas dos principais pilares que envolvem o Teatro Musical -
              Canto, Dança e Interpretação.
            </li>
            <li>Vamos adentrar Oz e explorar o mundo de &quot;Wicked&quot;.</li>
            <li>
              Divulgação de todas as informações da primeira turma do curso
              regular e valores promocionais para os participantes da
              &quot;Imersão Esmeralda&quot;.
            </li>
          </StyledList>
        </Card>

        <Card>
          <h3>Programação do Dia:</h3>
          <NoStyleList>
            <li>
              <strong>09h00:</strong> Apresentação
            </li>
            <li>
              <strong>10h00:</strong> Aula de Canto
            </li>
            <li>
              <strong>11h00:</strong> Aula de dança - Jazz Musical
            </li>
            <li>
              <strong>12h00:</strong> Intervalo
            </li>
            <li>
              <strong>12h30:</strong> Aula de Interpretação
            </li>
            <li>
              <strong>13h30:</strong> Informações Gerais e Encerramento
            </li>
          </NoStyleList>
        </Card>
      </CardsContainer>

      <h3>
        Seleção de 2 artistas para serem contemplado com uma bolsa integral do
        Curso Regular de Teatro Musical!
      </h3>
    </Section>
  );
};

export default AboutCourseSection;
