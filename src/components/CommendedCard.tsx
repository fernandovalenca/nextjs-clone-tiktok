import {
  Container,
  Avatar,
  Info,
} from "../styles/components/RecommendedCard";

interface IRecommendedCard {
  recommended: {
    avatarUrl: string;
    title: string;
    views: string;
  };
}

export const RecommendedCard = ({
  recommended,
}: IRecommendedCard) => {
  return (
    <Container>
      <Avatar src={recommended.avatarUrl} alt="Imagem de perfil" />
      <Info>
        <a href="@">{recommended.title}</a>
        <span>{recommended.views}</span>
      </Info>
    </Container>
  );
};
