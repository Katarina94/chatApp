import React from "react";

/* Styles */
import "./UserInfo.scss";

/* Hooks */
import { useGetUser } from "hooks/userHook";

const UserInfo = () => {
  const user = useGetUser();
  if (!user) return null;
  return (
    <div className="UserInfo">
      <div className="UserInfo__container">
        <p className={"UserInfo__name"}>WELCOME</p>
        <img
          src={user.avatar_url}
          alt="User Avatar"
          className={"UserInfo__avatar"}
        />
        <p className={"UserInfo__name"}>
          {user.first_name} {user.last_name}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
