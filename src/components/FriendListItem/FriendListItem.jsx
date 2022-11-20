import { Item, Online, Offline, Avatar, Name } from './FriendListItem.styled';
export const FriendListItem = ({ friends: { avatar, name, isOnline } }) => {
  return (
    <Item>
      {isOnline === true ? <Online></Online> : <Offline></Offline>}

      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
