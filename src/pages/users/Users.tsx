import { useAppDispatch, useAppSelector } from "hooks/useTyped";
import { Albums } from "pages/albums/Albums";
import { Loader } from "pages/loading/Loader";
import { useEffect } from "react";
import { fetchAllUsers } from "store/usersSlice";
import { UserItem } from "./userItem/UserItem";
import { UsersContainer, UsersList } from "./Users.styled";

export const Users: React.FC = () => {
  const users = useAppSelector((state) => state.usersSlice.users);
  const status = useAppSelector((state) => state.usersSlice.status);
  const dispatch = useAppDispatch();

  const handleGetUsers = () => {
    dispatch(fetchAllUsers());
  };

  useEffect(() => {
    handleGetUsers();
  }, []);
  return (
    <>
      {status === "loading" ? (
        <Loader />
      ) : (
        <UsersContainer>
          <UsersList>
            {users.length > 0
              ? users.map((user) => (
                  <UserItem
                    name={user.name}
                    key={user.id}
                    username={user.username}
                    address={user.address}
                    email={user.email}
                    phone={user.phone}
                    userId={user.id}
                  />
                ))
              : null}
          </UsersList>
          <Albums />
        </UsersContainer>
      )}
    </>
  );
};
