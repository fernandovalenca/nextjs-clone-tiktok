import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 4.375rem;
  bottom: 0;
  left: 0;
`;

interface IMenuItem {
  isActive?: boolean;
}

export const MenuItem = styled.div<IMenuItem>`
  cursor: pointer;
  color: #161823;
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
  height: 3.75rem;

  :hover {
    background-color: rgba(22, 24, 35, 0.03);
  }

  > span {
    font-weight: ${(props) => (props.isActive ? "700" : "400")};
    margin-left: 0.8125rem;
    font-size: 1.5rem;
    line-height: 3.75rem;
    color: ${(props) => (props.isActive ? props.theme.colors.primary : "black")};
  }
`;

export const Following = styled.div`
  width: 100%;
  padding: 1.25rem 0;
  border-top: 0.5px solid rgba(22, 24, 35, 0.12);
  border-bottom: 0.5px solid rgba(22, 24, 35, 0.12);
`;

export const FollowingHeader = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.375rem;
  color: rgba(22, 24, 35, 0.5);
  height: 0.5rem;
  padding-left: 1rem;
  margin-bottom: 1.75rem;
`;

export const InfoContainer = styled.div`
  margin-top: 1rem;
  padding-left: 1rem;
  padding-bottom: 24px;
  width: 240px;
  color: rgba(22, 24, 35, 0.5);
`;

interface ILinks {
  margin?: boolean;
}

export const Links = styled.div<ILinks>`
  margin-bottom: ${(props) => (props.margin ? "0.5rem" : "0")};

  > a {
    cursor: pointer;
    display: inline-block;
    margin: 0.3125rem 0.3125rem 0 0;

    font-weight: 600;
    font-size: 0.75rem;
    line-height: 0.75rem;
    color: rgba(22, 24, 35, 0.5);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif;

    :hover {
      text-decoration: underline;
    }
  }
`;
