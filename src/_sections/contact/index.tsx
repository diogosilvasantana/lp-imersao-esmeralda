import Image from "next/image";
import { useRouter } from "next/router"; // Importar o hook useRouter
import { Card, ContactItem, Section, SocialMediaContainer } from "./styles";
import instagramIcon from "../../assets/images/icons/instagram.svg";
import facebookIcon from "../../assets/images/icons/facebook.svg";
import youtubeIcon from "../../assets/images/icons/youtube.svg";

const ContactSection = () => {
  const router = useRouter(); // Usar o useRouter para acessar a rota atual

  // Condição para verificar se estamos na rota de sucesso
  const isSuccessPage = router.pathname === "/success";

  return (
    <Section>
      {/* Renderizar o <h1> apenas se não for a rota de sucesso */}
      {!isSuccessPage && <h1>Fale Conosco</h1>}
      <Card>
        <ContactItem>
          <h3>Telefone</h3>
          <span>(11) 3955-1615</span>
        </ContactItem>

        <ContactItem>
          <h3>Whatsapp</h3>
          <span>
            <a
              href="https://wa.me/551139551615?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20a%20Imers%C3%A3o%20Esmeralda"
              rel="noopener noreferrer"
            >
              Iniciar Conversa
            </a>
          </span>
        </ContactItem>

        <ContactItem>
          <h3>E-mail</h3>
          <span>
            <a href="mailto:contato@proartproducoes.com.br">
              contato@proartproducoes.com.br
            </a>
          </span>
        </ContactItem>

        <ContactItem>
          <h3>Redes Sociais</h3>
          <SocialMediaContainer>
            <a
              href="https://instagram.com/proartproducoesoficial"
              rel="noopener noreferrer"
            >
              <Image src={instagramIcon} alt="Instagram da Proart" />
            </a>
            <a
              href="https://facebook.com/proartproducoesoficial"
              rel="noopener noreferrer"
            >
              <Image src={facebookIcon} alt="Facebook da Proart" />
            </a>
            <a
              href="https://www.youtube.com/proartproducoes"
              rel="noopener noreferrer"
            >
              <Image src={youtubeIcon} alt="Youtube da Proart" />
            </a>
          </SocialMediaContainer>
        </ContactItem>
      </Card>
    </Section>
  );
};

export default ContactSection;
