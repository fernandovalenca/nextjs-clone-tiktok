import { GetServerSideProps } from "next";
import { useEffect } from "react";

import { Feed } from "../components/Feed";
import { Layout } from "../components/Layout";
import { Suggestions } from "../components/Suggestions";
import { usePost } from "../hooks/usePost";

type InitialProps = {
  posts: any;
};

const Index = ({ posts }: InitialProps) => {
  const { loadPosts } = usePost();

  useEffect(() => {
    loadPosts(posts);
  }, []);

  return (
    <Layout>
      <Feed />
      <Suggestions />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = [
    {
      id: 1,
      author: {
        id: 1,
        name: "Fernando Valença",
        username: "fernandovalenca",
        avatarUrl:
          "https://lh3.googleusercontent.com/ogw/ADea4I6KL6K_keBXBGYKJEBEYazSxIEqPNPipORqIk475g=s83-c-mo",
      },
      description: "YouTube",
      tags: [
        {
          title: "tag1",
        },
        {
          title: "tag2",
        },
      ],
      songName: "música",
      videoUrl:
        "https://static.pexels.com/lib/videos/free-videos.mp4",
      likes: 6,
      comments: 10,
      replies: 2,
    },
  ];

  return {
    props: {
      posts: data,
    },
  };
};

export default Index;
