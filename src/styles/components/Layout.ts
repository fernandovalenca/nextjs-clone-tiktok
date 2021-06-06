import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  flex: 1 1 auto;
  padding-top: 4.375rem;
`;

export const SidebarContainer = styled.div`
  flex: 0 0 15.625rem;

  @media (max-width: 768px) {
    display: none;
    flex: 0;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  margin: 0 auto;
  padding: 3.125rem 1.25rem;
  display: flex;
  max-width: 1194px;

  @media (max-width: 768px) {
  }
`;
