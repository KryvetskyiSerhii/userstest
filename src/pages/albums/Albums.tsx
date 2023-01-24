import { ICONS } from "constants/images";
import { useAppDispatch, useAppSelector } from "hooks/useTyped";
import { CommentsList, CommentsText } from "pages/comments/Comments.styled";
import { useEffect, useRef, useState } from "react";
import { offAlbumModalVisible } from "store/usersSlice";
import {
  AlbumsContainer,
  AlbumsListItem,
  AlbumsWrapper,
  CloseButton,
} from "./Albums.styled";

export const Albums: React.FC = () => {
  const dispatch = useAppDispatch();

  const [height, setHeight] = useState<string>();
  const [userName, setUserName] = useState<string>("");
  const modalRef = useRef<HTMLDivElement>(null);
  const users = useAppSelector((state) => state.usersSlice.users);
  const isAlbumModalVisible = useAppSelector(
    (state) => state.usersSlice.isAlbumModalVisible
  );
  const albums = useAppSelector((state) => state.usersSlice.albums);

  const handleCloseModal = () => {
    dispatch(offAlbumModalVisible());
  };

  useEffect(() => {
    if (modalRef.current) setHeight(`-${modalRef.current.clientHeight + 10}px`);
    if (albums.length > 0)
      setUserName(
        users.filter((user) => user.id === albums[0].userId)[0].username
      );
  }, [albums]);

  useEffect(() => {
    const handleOffSearchModalVisible = (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleCloseModal();
      }
    };
    document.addEventListener("click", handleOffSearchModalVisible, true);
    return () => {
      document.removeEventListener("click", handleOffSearchModalVisible, true);
    };
  }, [albums]);

  return (
    <AlbumsContainer
      isAlbumModalVisible={isAlbumModalVisible}
      ref={modalRef}
      height={height}
    >
      <AlbumsWrapper>
        <CloseButton src={ICONS.close} onClick={handleCloseModal} />
        <CommentsText size="20px">Albums of {userName}</CommentsText>
        <CommentsList>
          {albums.length > 0
            ? albums.map((item) => (
                <AlbumsListItem key={item.id}>{item.title}</AlbumsListItem>
              ))
            : null}
        </CommentsList>
      </AlbumsWrapper>
    </AlbumsContainer>
  );
};
