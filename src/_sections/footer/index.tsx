import { Footer } from "./styles";
import proartLogo from "../../assets/images/logos/proart-logo.svg";
import Image from "next/image";

const FooterSection = () => {
  return (
    <Footer>
      <Image src={proartLogo} alt="Logo da Proart" />
      <p>© 2025 Proart Produções. Todos os direitos reservados</p>
    </Footer>
  )
}

export default FooterSection;