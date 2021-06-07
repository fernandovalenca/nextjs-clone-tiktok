import { FunctionComponent } from "react";

import {
  Container,
  Header,
  PersonContainer,
  Avatar,
  Info,
  Author,
  Description,
  Tag,
  ButtonContainer,
  VideoContainer,
  Video,
  Actions,
  Action,
  Content,
  PlayerIcon,
  ActionsContainer,
  Song,
} from "../styles/components/Post";

interface IPostProps {
  post: {
    author: {
      name: string;
      username: string;
      avatarUrl: string;
      description: string;
    };
    tags: [
      {
        title: string;
      },
    ];
    videoUrl: string;
  };
}

export const Post: FunctionComponent<IPostProps> = ({ post }) => {
  return (
    <Container>
      <Header>
        <PersonContainer>
          <Avatar src={post?.author?.avatarUrl} alt="Avatar image" />
          <Info>
            <Author>
              {post?.author?.name}
              <span>{post?.author?.username}</span>
            </Author>
            <Description>
              {post?.tags?.map((tag, index) => (
                <Tag key={index.toString()}>{tag.title}</Tag>
              ))}
            </Description>
          </Info>
        </PersonContainer>
        <ButtonContainer>
          <Button fontSize={14} outline>
            Seguir
          </Button>
        </ButtonContainer>
      </Header>
      <Content>
        <Song />
        <VideoContainer>
          <Video
            src={post?.videoUrl}
            webkit-playsinline="true"
            loop
            playsInline
            preload="metadata"
          />
          <ActionsContainer>
            <PlayerIcon src="/icons/playIcon" alt="" />
          </ActionsContainer>
        </VideoContainer>
      </Content>
      <Actions>
        <Action>
          <img src="" alt="" />
          <a href="@" />
        </Action>
        <Action>
          <img src="" alt="" />
          <a href="@" />
        </Action>
        <Action>
          <img src="" alt="" />
          <a href="@" />
        </Action>
      </Actions>
    </Container>
  );
};
