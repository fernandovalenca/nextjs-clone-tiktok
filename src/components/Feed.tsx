import { FunctionComponent } from "react";
import { Post } from "./Post";

interface IFeedProps {
  posts: [
    {
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
    },
  ];
}

export const Feed: FunctionComponent<IFeedProps> = ({ posts }) => {
  return (
    <Container>
      {posts.map((post, index) => (
        <Post key={index.toString()} post={post} />
      ))}
    </Container>
  );
};
