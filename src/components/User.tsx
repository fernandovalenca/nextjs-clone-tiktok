import { FunctionComponent } from "react";

import { Container, Avatar, Info } from "../styles/components/User";

interface IUser {
  user: {
    name: string;
    username: string;
    avatarUrl: string;
  };
}

export const User: FunctionComponent<IUser> = ({ user }) => {
  return (
    <Container>
      <Avatar src={user.avatarUrl} />
      <Info>
        <a href="@">{user.name}</a>
        <span>{user.username}</span>
      </Info>
    </Container>
  );
};
