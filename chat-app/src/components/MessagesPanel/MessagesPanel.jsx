import React from "react";
import { useSelector } from "react-redux";

/* Styles */
import "./MessagesPanel.scss";

/* Components */
import Message from "components/MessagesPanel/Message/Message";
import MessageHeader from "components/MessagesPanel/MessageHeader/MessageHeader";
import SendBar from "components/SendBar/SendBar.jsx";
import UserInfo from "components/UserInfo";

import messagesActions from "store/actions/messagesActions";

import {
  getMessages,
  getConversationId,
  getMessageParticipant,
} from "store/selectors/messagesSelectors";

const MessagesPanel = () => {
  const messages = useSelector(getMessages);
  const id = useSelector(getConversationId);
  const participant = useSelector(getMessageParticipant);
  if (!id) {
    return <UserInfo />;
  }
  if (!messages) return null;
  const onSendMessage = (message) => {
    messagesActions.sendMessage(id, message);
  };

  return (
    <div className="MessagesPanel" data-testid="MessagesPanel">
      <MessageHeader participant={participant} />
      <div className="MessagesPanel__messages-wrapper">
        <div className="MessagesPanel__messages-wrapper-inner">
          {messages.map((msg, index) => (
            <Message message={msg} key={msg.id} index={index} />
          ))}
          <SendBar onSendMessage={onSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default MessagesPanel;
