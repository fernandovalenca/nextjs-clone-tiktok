import { User } from "./User";

export const Suggestions = () => {
  return (
    <Container>
      <IconsContainer>
        <Icon src="/icons/facebookIcon.svg" alt="Facebook" />
        <Icon src="/icons/pinterestIcon.svg" alt="Pinterest" />
        <Icon src="/icons/twitterIcon.svg" alt="Twitter" />
      </IconsContainer>
      <BoxContainer>
        <BoxHeader>
          <h2>Contas sugeridas</h2>
        </BoxHeader>
        <ItemContainer>
          {people.map((person, index) => (
            <Item key={index}>
              <User user={person} />
              <Button fontSize={14} outline>
                Seguir
              </Button>
            </Item>
          ))}
        </ItemContainer>
      </BoxContainer>
      <BoxContainer>
        <BoxHeader>
          <h2>Descobrir</h2>
        </BoxHeader>
        <ItemContainer>
          {itens.map((item, index) => (
            <Item key={index}>
              <RecommendedCard recommended={item} />
              <ArrowIcon />
            </Item>
          ))}
        </ItemContainer>
      </BoxContainer>
      <DownloadImage src="/image/appstore.png" alt="Apple Store" />
      <DownloadImage src="/image/playstore.png" alt="Play Store" />
      <DownloadImage src="/image/amazon.png" alt="Amazon store" />
    </Container>
  );
};
