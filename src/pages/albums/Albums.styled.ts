import styled from "@emotion/styled";
import { Theme } from "types/types";

interface Props {
  theme?: Theme;
  isAlbumModalVisible?: boolean;
  height?: string;
}

export const AlbumsContainer = styled.div<Props>`
  position: fixed;
  top: ${({ isAlbumModalVisible, height }) =>
    isAlbumModalVisible ? "100px" : height};
  left: 50%;
  transform: translateX(-50%);
  width: 50vw;

  border: ${(props) => props.theme.border};
  border-radius: 10px;
  background-image: ${(props) => props.theme.background};
  background-size: cover;
  z-index: 20;
  transition: 0.4s ease-in;
  @media (min-width: 300px) and (max-width: 600px) {
    width: 85vw;
  }
`;

export const AlbumsListItem = styled.li<Props>`
  width: 80%;
  padding: 10px;
  height: 50px;
  border: ${(props) => props.theme.border};
  border-radius: 10px;
  box-shadow: 3px 3px 3px #fff;
  &:not(last-child) {
    margin-bottom: 15px;
  }
  color: ${(props) => props.theme.textColor};
`;
export const AlbumsWrapper = styled.div`
  position: relative;
  padding: 20px;
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 3px;
  right: 3px;
  width: 25px;
  cursor: pointer;
`;
