import { Item, IsOnlineSpan, Avatar, Name } from './FriendListItem.styled';
export const FriendListItem = ({ friends: { avatar, name, isOnline } }) => {
  return (
    <Item>
      <IsOnlineSpan isOn={isOnline}></IsOnlineSpan>

      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
