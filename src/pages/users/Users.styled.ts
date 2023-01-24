import styled from "@emotion/styled";
import { Theme } from "types/types";
import { Link } from "react-router-dom";

interface Props {
  theme?: Theme;
  width?: string;
  isHovered?: boolean;
}

export const UsersContainer = styled.div`
  width: 95vw;
  margin: 3vh auto 0 auto;
`;
export const UsersList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: 300px) and (max-width: 600px) {
    justify-content: center;
  }
`;

export const UsersListItem = styled.li<Props>`
  border: ${(props) => props.theme.border};
  border-radius: 10px;
  box-shadow: 3px 3px 3px #000;
  padding: 10px;
  color: ${(props) => props.theme.textColor};

  width: 30vw;
  height: 30vh;
  position: relative;
  &:not(last-child) {
    margin-bottom: 15px;
  }
  @media (min-width: 300px) and (max-width: 600px) {
    width: 80vw;
    height: 50vh;
  }
`;

export const UserImageStyled = styled.img<Props>`
  width: ${({ width, isHovered }) => (isHovered ? "25%" : width)};
  position: absolute;
  top: 5%;
  left: ${({ isHovered }) => (isHovered ? "85%" : "50%")};
  transform: translateX(-50%);
  transition: 0.5s ease-in;
`;

export const UserName = styled.p<Props>`
  position: absolute;
  top: 3%;
  left: 3%;
  visibility: ${({ isHovered }) => (isHovered ? "hidden" : "visible")};
`;

export const UserTexBlockContainer = styled.div<Props>`
  position: absolute;
  top: 0%;
  right: ${({ isHovered }) => (isHovered ? "50%" : "0%")};
  width: 50%;
  padding: 5px;
  visibility: ${({ isHovered }) => (isHovered ? "visible" : "hidden")};
  opacity: ${({ isHovered }) => (isHovered ? "1" : "0")};
  transition: 0.5s ease-in;
`;

export const UserText = styled.p`
  margin-bottom: 10px;
`;

export const UserButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-top: 20px;

  @media (min-width: 300px) and (max-width: 1150px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const UserButton = styled.button<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  opacity: 0.7;
  background: transparent;
  border: ${(props) => props.theme.border};
  color: ${(props) => props.theme.textColor};
  padding: 0px 5px;
  height: 30px;
  border-radius: 10px;
  &:hover {
    opacity: 1;
  }
  @media (min-width: 300px) and (max-width: 1150px) {
    margin-bottom: 10px;
  }
`;

export const ImageStyled = styled.img<Props>`
  width: ${({ width }) => width};
`;

export const LinkStyled = styled(Link)<Props>`
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
`;
