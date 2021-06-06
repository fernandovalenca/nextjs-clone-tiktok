import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 2.8125rem;
  width: 100%;

  padding: 0 1rem;
`;

export const Avatar = styled.img`
  height: 2.75rem;
  width: 2.75rem;

  border-radius: 50%;
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
