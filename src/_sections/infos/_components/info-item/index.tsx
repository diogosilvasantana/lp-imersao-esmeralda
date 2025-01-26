import { InfoItemContainer } from "./styles";
import InfosIcon from "../infos-icon";

type InfoItemProps = {
  iconSrc: string;
  iconAlt: string;
  title?: string;
  content?: React.ReactNode;
};

const InfoItem: React.FC<InfoItemProps> = ({
  iconSrc,
  iconAlt,
  title,
  content,
}) => {
  return (
    <InfoItemContainer>
      <InfosIcon src={iconSrc} alt={iconAlt} />
      {title && <h1>{title}</h1>}
      {content && content}
    </InfoItemContainer>
  );
};

export default InfoItem;
