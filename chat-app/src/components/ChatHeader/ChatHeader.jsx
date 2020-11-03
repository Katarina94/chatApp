import React from "react";

/* Styles */
import "./ChatHeader.scss";

/* Actions */
import messagesActions from "store/actions/messagesActions";

const ChatHeader = ({ participant }) => {
  const onCloseConversation = () => {
    messagesActions.clearMessages();
  };
  return (
    <div className="ChatHeader" onClick={onCloseConversation}>
      <div className="ChatHeader__wrapper">
        <div className="ChatHeader__arrow-holder">
          <i className="ChatHeader__arrow ChatHeader__arrow-left"></i>
        </div>
        <div className="ChatHeader__participant">
          <div className="ChatHeader__avatar-holder">
            <div className="ChatHeader__avatar-outer-holder">
              <div className="ChatHeader__avatar-inner-holder">
                <img
                  src={participant.avatar_url}
                  alt="User Avatar"
                  className="ChatHeader__avatar"
                />
              </div>
            </div>
          </div>
          <p className={"ChatHeader__participant-name"}>
            {participant.first_name} {participant.last_name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
