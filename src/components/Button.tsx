import { FunctionComponent } from "react";

import { Container } from "../styles/components/Button";

interface IButtonProps {
  fontSize: number;
  outlined?: boolean;
}

export const Button: FunctionComponent<IButtonProps> = ({ children, fontSize, outlined }) => {
  return (
    <Container fontSize={fontSize} outlined={outlined}>
      {children}
    </Container>
  );
};
