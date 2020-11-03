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
    <div className="User">
      <img src={user.avatar_url} alt="User Avatar" className={"User__avatar"} />
      <div className={"User__text-Holder"}>
        <p className={"User__name"}>Welcome back, {user.first_name}</p>
      </div>
    </div>
  );
};

export default User;
