
export const FriendListItem = ({friends:{ avatar, name, isOnline} }) => {
  return (
    <>
      
      <span>{isOnline}</span>
            {/* {isOnline && <span>{isOnline}</span>} */}

             <img src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
          </>
  );
}

