import React from "react";

/* Styles */
import "./User.scss";

/* Hooks */
import { useGetUser } from "hooks/userHook";

const User = () => {
  const user = useGetUser();
  if (!user) return null;
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
