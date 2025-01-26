import Image from "next/image";
import {
  Content,
  HeaderTitle,
  PaymentMethodItem,
  PaymentMethodsIcons,
  Section,
} from "./styles";
import precoImage from "../../assets/images/others/preco-form.svg";
import precoMobileImage from "../../assets/images/others/preco-form-mobile.svg";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import SignupForm from "./_component/signup-form";
import cardIcon from "../../assets/images/icons/card.svg";
import barcodeIcon from "../../assets/images/icons/barcode.svg";

const SignupSection = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <Section>
      <HeaderTitle>
        <h1>Garanta sua Vaga!</h1>
        <Image
          src={isMobile ? precoMobileImage : precoImage}
          alt="Preço da inscrição"
        />
      </HeaderTitle>

      <Content>
        <SignupForm />
      </Content>

      <PaymentMethodsIcons>
        <PaymentMethodItem>
          <Image src={cardIcon} alt="Cartão de Crédito" />
          <p>Cartão de Crédito</p>
        </PaymentMethodItem>
        <PaymentMethodItem>
          <Image src={barcodeIcon} alt="Boleto Bancário" />
          <p>Boleto Bancário</p>
        </PaymentMethodItem>
      </PaymentMethodsIcons>
    </Section>
  );
};

export default SignupSection;
