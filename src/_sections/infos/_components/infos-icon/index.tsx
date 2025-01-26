import Image from "next/image";
import { Icon, IconContainer } from "./styles";

type InfosIconProps = {
  src: string;
  alt: string;
};

const InfosIcon: React.FC<InfosIconProps> = ({ src, alt }) => {
  return (
    <IconContainer>
      <Icon>
        <Image src={src} alt={alt} />
      </Icon>
    </IconContainer>
  );
};

export default InfosIcon;
