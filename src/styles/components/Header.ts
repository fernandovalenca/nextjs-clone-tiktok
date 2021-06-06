import styled from "styled-components";

export const Container = styled.div`
  height: 4.375rem;
  width: 100%;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  background-color: #fff;

  border-bottom: 1px solid rgba(34, 90, 89, 0.2);

  z-index: 1000;
`;

export const Content = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1.25rem;
`;

export const LogoContainer = styled.div`
  display: block;
`;

export const LogoIcon = styled.img`
  width: 1.75rem;
`;

export const Logo = styled.img`
  margin-left: 0.25rem;
  position: relative;
  top: -0.125rem;
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const OptionIcon = styled.img`
  height: 2.313rem;
  width: 2.313rem;
`;

export const Avatar = styled.div`
  flex: 0 0 2.5rem;
  margin-left: 1.875rem;

  position: relative;

  cursor: pointer;

  > img {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    display: inline-block;
  }
`;
