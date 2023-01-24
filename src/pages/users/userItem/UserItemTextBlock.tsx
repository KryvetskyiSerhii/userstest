import { useAppDispatch } from "hooks/useTyped";
import {
  fetchUserAlbums,
  fetchUserComments,
  onAlbumModalVisible,
} from "store/usersSlice";
import { Address, locations } from "types/types";
import {
  LinkStyled,
  UserButton,
  UserButtonBlock,
  UserTexBlockContainer,
  UserText,
} from "../Users.styled";

interface Props {
  name: string;
  isHovered: boolean;
  address: Address;
  email: string;
  phone: string;
  userId: number;
}

export const UserItemTextBlock: React.FC<Props> = ({
  name,
  isHovered,
  address,
  email,
  phone,
  userId,
}) => {
  const dispatch = useAppDispatch();
  const handleCommentsShow = () => {
    dispatch(fetchUserComments(userId));
  };

  const handleAlbumsShow = () => {
    dispatch(fetchUserAlbums(userId));
    dispatch(onAlbumModalVisible());
  };

  return (
    <UserTexBlockContainer isHovered={isHovered}>
      <UserText>{name}</UserText>
      <UserText>
        {address.city}, {address.street}, {address.suite}
      </UserText>
      <UserText>{email}</UserText>
      <UserText>{phone}</UserText>
      <UserButtonBlock>
        <LinkStyled to={locations.COMMENTS}>
          <UserButton type="button" onClick={handleCommentsShow}>
            Comments
          </UserButton>
        </LinkStyled>
        <UserButton type="button" onClick={handleAlbumsShow}>
          Albums
        </UserButton>
      </UserButtonBlock>
    </UserTexBlockContainer>
  );
};
