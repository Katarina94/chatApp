import React from "react";
import { useSelector } from "react-redux";

/* Styles */
import "./ChatWindow.scss";

/* Components */
import Message from "components/Message";
import MessageHeader from "components/ChatHeader";
import SendBar from "components/SendBar/SendBar.jsx";
import UserInfo from "components/UserInfo";

/* Actions*/
import messagesActions from "store/actions/messagesActions";

/* Selectors */
import {
  getMessages,
  getConversationId,
  getMessageParticipant,
} from "store/selectors/messagesSelectors";

const ChatWindow = () => {
  const messages = useSelector(getMessages);
  const conversationId = useSelector(getConversationId);
  const participant = useSelector(getMessageParticipant);

  if (!conversationId) {
    return <UserInfo />;
  }

  if (!messages) return null;

  const onSendMessage = (message) => {
    messagesActions.sendMessage(conversationId, message);
  };

  return (
    <div className="ChatWindow">
      <MessageHeader participant={participant} />
      <div className="ChatWindow__messages-wrapper">
        <div className="ChatWindow__messages-wrapper-inner">
          {messages.map((msg, index) => (
            <Message message={msg} key={msg.id} index={index} />
          ))}
          <SendBar onSendMessage={onSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
