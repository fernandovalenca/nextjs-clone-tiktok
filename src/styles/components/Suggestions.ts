import styled from "styled-components";
import { RiArrowRightSLine } from "react-icons/ri";

export const Container = styled.div`
  flex: 0 0 20.625rem;
  width: 20.625rem;
  margin-left: 1.5rem;
  @media (max-width: 75rem) {
    display: none;
  }
`;

export const IconsContainer = styled.div`
  margin-bottom: 2.4375rem;
  text-align: left;
`;

export const Icon = styled.img`
  width: 1.9375rem;
  height: 1.9375rem;
  margin-right: 0.9375rem;
`;

export const BoxContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  height: 23.75rem;

  border: 1px solid rgba(22, 24, 35, 0.12);
  border-radius: 0.5rem;

  margin-bottom: 3.4375rem;
`;

export const BoxHeader = styled.div`
  padding: 1.5rem 1rem;
  padding-right: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex: 0 0 auto;

  > span {
    font-weight: 700;
    line-height: 1;
    font-size: 1.5rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 5.9375rem;
  height: 1.75rem;
  font-weight: 600;
  font-size: 1rem;
  margin-left: auto;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoName = styled.a`
  font-weight: 600;
  font-size: 1.0625rem;

  :hover {
    text-decoration: underline;
  }
`;

export const ItemContainer = styled.div`
  height: calc(100% - 4.5rem);

  padding-right: 0.625rem;

  overflow: auto;
  cursor: pointer;

  ::-webkit-scrollbar {
    width: 0.625rem;
    height: 0.625rem;
  }

  ::-webkit-scrollbar-button:start:decrement,
  ::-webkit-scrollbar-button:end:increment {
    display: none;
  }

  ::-webkit-scrollbar-track-piece {
    background-color: #f1f1f1;
    border-radius: 0.375rem;
  }

  ::-webkit-scrollbar-thumb:vertical {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 0.375rem;
  }
`;

export const ArrowIcon = styled(RiArrowRightSLine)`
  margin-left: auto;
  height: 1.25rem;
  width: 0.875rem;
`;

export const DownloadImage = styled.img`
  width: 10.625rem;
  height: 3.125rem;
  border-radius: 0.3125rem;
  margin-bottom: 0.75rem;
`;
