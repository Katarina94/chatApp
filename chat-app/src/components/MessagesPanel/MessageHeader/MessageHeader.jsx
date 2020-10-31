import React from "react";

/* Styles */
import "./MessageHeader.scss";

const MessageHeader = ({ participant }) => {
  return (
    <div className="MessageHeader">
      <div className="MessageHeader__participant-sender">
        <img
          src={participant.avatar_url}
          alt="Sender Avatar"
          className={"MessageHeader__avatar"}
        />
        <p className={"MessageHeader__participant-name"}>
          {participant.first_name} {participant.last_name}
        </p>
      </div>
      <div className="MessageHeader__participant-user">
        <p className={"MessageHeader__participant-name"}>
          {participant.first_name} {participant.last_name}
        </p>
        <img
          src={participant.avatar_url}
          alt="User Avatar"
          className={"MessageHeader__avatar"}
        />
      </div>
    </div>
  );
};

export default MessageHeader;
