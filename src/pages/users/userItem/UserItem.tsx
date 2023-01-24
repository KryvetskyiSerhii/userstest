import { ICONS } from "constants/images";
import { UserImageStyled, UserName, UsersListItem } from "../Users.styled";
import { UserItemTextBlock } from "./UserItemTextBlock";
import { useState } from "react";
import { Address } from "types/types";

interface Props {
  name: string;
  username: string;
  address: Address;
  email: string;
  phone: string;
  userId: number;
}

export const UserItem: React.FC<Props> = ({
  name,
  username,
  address,
  email,
  phone,
  userId,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <UsersListItem onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <UserImageStyled src={ICONS.user} width="40%" isHovered={isHovered} />

      <UserName isHovered={isHovered}>{username}</UserName>

      <UserItemTextBlock
        name={name}
        isHovered={isHovered}
        address={address}
        email={email}
        phone={phone}
        userId={userId}
      />
    </UsersListItem>
  );
};
