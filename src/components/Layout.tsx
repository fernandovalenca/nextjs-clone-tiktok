import { FunctionComponent } from "react";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

import { Container, SidebarContainer, ContentContainer } from "../styles/components/Layout";

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <ContentContainer>{children}</ContentContainer>
      </Container>
    </>
  );
};
