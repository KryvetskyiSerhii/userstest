import { useAppSelector } from "hooks/useTyped";
import { Loader } from "pages/loading/Loader";
import { useEffect, useState } from "react";
import { Comment } from "./Comment";
import {
  CommentsContainer,
  CommentsList,
  CommentsText,
} from "./Comments.styled";

export const Comments: React.FC = () => {
  const comments = useAppSelector((state) => state.usersSlice.comments);
  const users = useAppSelector((state) => state.usersSlice.users);
  const status = useAppSelector((state) => state.usersSlice.status);
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    if (comments.length > 0)
      setUserName(
        users.filter((user) => user.id === comments[0].postId)[0].username
      );
  }, [comments]);

  return (
    <>
      {status === "loading" ? (
        <Loader />
      ) : (
        <CommentsContainer>
          <CommentsText size="20px">Comments for {userName}</CommentsText>
          <CommentsList>
            {comments.length > 0
              ? comments.map((comment) => (
                  <Comment
                    key={comment.id}
                    email={comment.email}
                    body={comment.body}
                    name={comment.name}
                  />
                ))
              : null}
          </CommentsList>
        </CommentsContainer>
      )}
    </>
  );
};
