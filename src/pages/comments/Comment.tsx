import {
  CommentsListItem,
  CommentsNameBlock,
  CommentsText,
} from "./Comments.styled";

interface Props {
  name: string;
  body: string;
  email: string;
}

export const Comment: React.FC<Props> = ({ name, email, body }) => {
  return (
    <CommentsListItem>
      <CommentsNameBlock>
        <CommentsText size="12px">{name}</CommentsText>
        <CommentsText size="12px">{email}</CommentsText>
      </CommentsNameBlock>
      <CommentsText size="16px">{body}</CommentsText>
    </CommentsListItem>
  );
};
