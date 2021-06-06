import {
  Container,
  Content,
  LogoContainer,
  LogoIcon,
  Logo,
  OptionContainer,
  OptionIcon,
  Avatar,
} from "../styles/components/Header";

export const Header = () => {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon src="/icons/logoIcon.svg" alt="Logo Tik Tok" />
          <Logo src="/icons/logo.svg" alt="Tik Tok" />
        </LogoContainer>
        <OptionContainer>
          <OptionIcon src="/icons/uploadIcon.svg" alt="Realizar upload" />
          <Avatar>
            <img
              src="https://avatars.githubusercontent.com/u/60782870?v=4"
              alt="Imagem do avatar"
            />
          </Avatar>
        </OptionContainer>
      </Content>
    </Container>
  );
};
