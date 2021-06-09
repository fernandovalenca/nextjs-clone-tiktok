import { useContext } from "react";
import { PostContext } from "../context/PostContext";

export const usePost = () => {
  const context = useContext(PostContext);

  return context;
};
