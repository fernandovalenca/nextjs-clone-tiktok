import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.8125rem;
  padding: 0 1rem;
`;

export const Avatar = styled.img`
  width: 2.75rem;
  height: 2.75rem;
  margin-right: 0.75rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  > a {
    font-weight: 600;
    font-size: 1.0625rem;
    :hover {
      text-decoration: underline;
    }
  }
  > span {
    font-weight: 400;
    font-size: 0.875rem;
    color: rgba(22, 24, 35, 0.5);
  }
`;
