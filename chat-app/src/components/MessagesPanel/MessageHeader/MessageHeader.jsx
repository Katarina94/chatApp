import React from "react";
import { isMobile } from "../../../helpers/userAgent";

/* Styles */
import "./MessageHeader.scss";

import messagesActions from "store/actions/messagesActions";

const MessageHeader = ({ participant }) => {
  const onCloseConversation = () => {
    messagesActions.clearMessages();
  };
  return (
    <div className="MessageHeader" onClick={onCloseConversation}>
      <div className="MessageHeader__wrapper">
        <div className="arrow-holder">
          <i class="arrow arrow-left"></i>
        </div>

        <div className="MessageHeader__participant-sender">
          <div className="MessageHeader__avatar-holder">
            <div className="MessageHeader__avatar-outer-holder">
              <div className="MessageHeader__avatar-inner-holder">
                <img
                  src={participant.avatar_url}
                  alt="User Avatar"
                  className={
                    "MessageHeader__avatar MessageHeader__avatar-sender"
                  }
                />
              </div>
            </div>
          </div>
          <p className={"MessageHeader__participant-name"}>
            {participant.first_name} {participant.last_name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageHeader;
