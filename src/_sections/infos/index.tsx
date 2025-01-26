import { Card, LocalDescription, PrecoImage, Section } from "./styles";
import Image from "next/image";

import calendarIcon from "../../assets/images/icons/calendar.svg";
import clockIcon from "../../assets/images/icons/clock.svg";
import pointIcon from "../../assets/images/icons/point.svg";
import precoImage from "../../assets/images/others/preco.svg";
import InfoItem from "./_components/info-item";

const infoItems = [
  {
    src: calendarIcon,
    alt: "Ícone de calendário",
    title: "01 de fevereiro de 2025",
  },
  {
    src: clockIcon,
    alt: "Ícone de relógio",
    title: "09h às 14hs",
  },
  {
    src: pointIcon,
    alt: "Ícone de localização",
    content: (
      <LocalDescription className="address-text">
        <strong>Proart Produções</strong>
        <span>Rua Saguairu, 383, Casa Verde - São Paulo - SP</span>
      </LocalDescription>
    ),
  },
];

const InfosSection = () => {
  return (
    <Section>
      <PrecoImage>
        <Image src={precoImage} alt="Preço da inscrição" />
      </PrecoImage>

      <Card>
        {infoItems.map((item, index) => (
          <InfoItem
            key={index}
            iconSrc={item.src}
            iconAlt={item.alt}
            title={item.title}
            content={item.content}
          />
        ))}
      </Card>
    </Section>
  );
};

export default InfosSection;
