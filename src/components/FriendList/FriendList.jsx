import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { Container } from './FriendList.styled';



export const FriendList = ({ friends }) => {
  return (
    <Container>
      {friends.map(friends => {
        return (
          <ul key={friends.id}>
            <FriendListItem friends={friends} />
          </ul>
        );
      })}
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
