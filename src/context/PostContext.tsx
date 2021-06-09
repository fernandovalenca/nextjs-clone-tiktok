import {
  createContext,
  FunctionComponent,
  useCallback,
  useState,
} from "react";

type Post = {
  id: number;
  author: {
    id: number;
    name: string;
    username: string;
    avatarUrl: string;
  };
  tags: [
    {
      title: string;
    },
  ];
  songName: string;
  description: string;
  videoUrl: string;
  likes: number;
  comments: number;
  replies: number;
};

type PostContextData = {
  posts: Array<Post>;
  loadPosts: (data: [Post]) => void;
};

export const PostContext = createContext({} as PostContextData);

export const PostProvider: FunctionComponent = ({ children }) => {
  const [posts, setPosts] = useState<[Post] | []>([]);

  const loadPosts = useCallback((data: [Post]) => {
    setPosts(data);
  }, []);

  return (
    <PostContext.Provider value={{ posts, loadPosts }}>
      {children}
    </PostContext.Provider>
  );
};
