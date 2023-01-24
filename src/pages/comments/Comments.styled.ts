import { Theme } from "types/types";
import styled from "@emotion/styled";

interface Props {
  theme?: Theme;
  size?: string;
}

export const CommentsContainer = styled.div`
  width: 80vw;
  margin: 3vh auto 0 auto;
  @media (min-width: 300px) and (max-width: 900px) {
    height: 90vh;
    width: 98vw;
  }
`;

export const CommentsList = styled.ul`
  list-style: none;
`;

export const CommentsListItem = styled.li<Props>`
  width: 80%;
  padding: 5px;
  height: 80px;
  border: ${(props) => props.theme.border};
  border-radius: 10px;
  box-shadow: 3px 3px 3px #fff;
  &:not(last-child) {
    margin-bottom: 15px;
  }
  @media (min-width: 300px) and (max-width: 900px) {
    width: 90vw;
    height: 15vh;
  }
`;

export const CommentsNameBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CommentsText = styled.p<Props>`
  margin-bottom: 10px;
  font-size: ${({ size }) => size};
  color: ${(props) => props.theme.textColor};
`;
