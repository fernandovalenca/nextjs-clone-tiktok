import { User } from "./User";

import {
  Container,
  MenuItem,
  Following,
  FollowingHeader,
  InfoContainer,
  Links,
} from "../styles/components/Sidebar";

export const Sidebar = () => {
  return (
    <Container>
      <MenuItem isActive>
        <img src="/icons/homeIcon.svg" alt="Home" />
        <span>Para você</span>
      </MenuItem>
      <MenuItem isActive={false}>
        <img src="/icons/peopleIcon.svg" alt="Seguindo" />
        <span>Seguindo</span>
      </MenuItem>
      <Following>
        <FollowingHeader>Suas principais contas</FollowingHeader>
        <User
          user={{
            name: "Will Smith",
            username: "willsmith",
            avatarUrl:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1646315618666501~c5_720x720.jpeg?x-expires=1623279600&x-signature=WN7bxV9c0SOZtGOJJhlx0c2joeo%3D",
          }}
        />
      </Following>
      <InfoContainer>
        <Links margin>
          <a href="@">Início</a>
          <a href="@">Sobre</a>
          <a href="@">Sala de imprensa</a>
          <a href="@">Carreira</a>
          <a href="@">ByteDance</a>
        </Links>
        <Links>
          <a href="@">Ajuda</a>
          <a href="@">Segurança</a>
        </Links>
        <Links>
          <a href="@">Diretrizes da comunidade</a>
          <a href="@">Termos</a>
        </Links>
        <Links margin>
          <a href="@">Privacidade</a>
        </Links>
        <Links>
          <a href="@">© 2020 Tik Tok</a>
        </Links>
      </InfoContainer>
    </Container>
  );
};
