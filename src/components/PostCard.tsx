import { useCallback, useRef, useState } from "react";
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
} from "../styles/components/PostCard";
import { Button } from "./Button";

type Post = {
  id: number;
  author: {
    id: number;
    name: string;
    username: string;
    avatarUrl: string;
  };
  description: string;
  tags: [
    {
      title: string;
    },
  ];
  songName: string;
  videoUrl: string;
  likes: number;
  comments: number;
  replies: number;
};

type PostProps = {
  post: Post;
};

export const PostCard = ({ post }: PostProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isRunning, setIsRunning] = useState(true);

  const toggleVideoRunning = useCallback(() => {
    if (videoRef?.current) {
      if (isRunning) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }

      setIsRunning(!isRunning);
    }
  }, [isRunning]);

  return (
    <Container>
      <Header>
        <PersonContainer>
          <Avatar src={post?.author.avatarUrl} alt="Avatar image" />
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
          <Button fontSize={14} outlined>
            Seguir
          </Button>
        </ButtonContainer>
      </Header>
      <Content>
        <Song>
          <img src="/icons/songIcon.svg" alt="Música" />
          <a href="@">{post?.songName}</a>
        </Song>
        <VideoContainer>
          <Video
            ref={videoRef}
            src={post?.videoUrl}
            webkit-playsinline="true"
            playsInline
            loop
            autoPlay
            preload="metadata"
            onClick={toggleVideoRunning}
          />
          <ActionsContainer>
            <PlayerIcon
              src={
                isRunning
                  ? "/icons/pauseIcon.svg"
                  : "/icons/playIcon.svg"
              }
              alt="Play"
            />
          </ActionsContainer>
        </VideoContainer>
      </Content>
      <Actions>
        <Action>
          <img src="/icons/heartIcon.svg" alt="Likes" />
          <a href="@">{post?.likes}</a>
        </Action>
        <Action>
          <img src="/icons/bubbleIcon.svg" alt="Comentários" />
          <a href="@">{post?.comments}</a>
        </Action>
        <Action>
          <img src="/icons/arrowIcon.svg" alt="Compartilhados" />
          <a href="@">{post?.replies}</a>
        </Action>
      </Actions>
    </Container>
  );
};
