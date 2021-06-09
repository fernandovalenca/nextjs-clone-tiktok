import { usePost } from "../hooks/usePost";
import { Container } from "../styles/components/Feed";
import { PostCard } from "./PostCard";

export const Feed = () => {
  const { posts } = usePost();

  return (
    <Container>
      {posts?.map((post, index) => (
        <PostCard key={index.toString()} post={post} />
      ))}
    </Container>
  );
};
