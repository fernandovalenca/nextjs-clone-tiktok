import styled from "styled-components";

export const Container = styled.div`
  width: 37rem;
  max-width: 37rem;
  position: relative;
  padding-bottom: 1.5625rem;
  border-bottom: 1px solid rgba(22, 24, 35, 0.12);
  margin-bottom: 1.25rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PersonContainer = styled.div`
  display: flex;
`;

export const Avatar = styled.img`
  display: flex;
  justify-content: space-between;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.75rem;
`;

export const Author = styled.a`
  display: flex;

  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5rem;
  margin-right: 0.3125rem;
  margin-bottom: 0.3125rem;

  :hover {
    text-decoration: underline;
  }

  > span {
    margin-top: 0.0625rem;
    margin-left: 0.25rem;
    font-weight: 400;
    font-size: 0.875rem;
    color: var(--black);
  }
`;

export const Description = styled.div`
  display: inline;
`;

export const Song = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 0.3125rem;

  a {
    font-weight: 600;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }

  img {
    width: 1.125rem;
    height: 1.5625rem;
    margin-right: 0.3125rem;
  }
`;

export const Tag = styled.a`
  cursor: pointer;

  font-size: 1rem;
  font-weight: bold;

  margin-left: 0.25rem;

  :hover {
    text-decoration: underline;
  }
`;

export const Content = styled.div`
  margin-left: 4.25rem;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  visibility: hidden;

  width: 2.5rem;
  height: 2.5rem;

  bottom: 0.9375rem;
  left: 0.75rem;

  position: absolute;
`;

export const VideoContainer = styled.div`
  cursor: pointer;

  width: calc(0.56 * (25rem + ((100vw - 48rem) / 1152) * 100));

  position: relative;
  margin-top: 0.9375rem;

  :hover {
    ${ActionsContainer} {
      visibility: visible;
    }
  }
`;
export const Video = styled.video`
  height: 400px;
  max-width: 100%;

  background-color: #dcdcdc;
  border-radius: 0.5625rem;
`;

export const PlayerIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  padding: 0 0.625rem;
  margin-top: 0.75rem;
`;

export const Action = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.125rem;
  font-weight: 700;

  margin-right: 1.5625rem;

  cursor: pointer;

  img {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.25rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 7.375rem;
  height: 1.75rem;

  font-weight: 600;
  font-size: 1rem;
`;
