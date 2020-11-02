import React from "react";
import { useSelector } from "react-redux";

/* Styles */
import "./User.scss";

/* Hooks */
import { useGetUser } from "hooks/userHook";
/* Selectors */
import { isConversationSelected } from "store/selectors/messagesSelectors";

const User = () => {
  const user = useGetUser();
  const conversationOpen = useSelector(isConversationSelected);
  if (!user || conversationOpen) return null;
  return (
    <div className="User" data-testid="user">
      <img
        src={user.avatar_url}
        alt="User Avatar"
        className={"ConversationItem__avatar"}
      />
      <p className={"User__name"}>
        {user.first_name} {user.last_name}
      </p>
    </div>
  );
};

export default User;
