import React from "react";
import { useSelector } from "react-redux";

/* Styles */
import "./Message.scss";

/* Selectors */
import { getMessageParticipantId } from "store/selectors/messagesSelectors";
import { getUserId } from "store/selectors/userSelectors";

const Message = ({ message, index }) => {
  const participantId = useSelector(getMessageParticipantId(index));
  const userId = useSelector(getUserId);

  const test = () => {
    var date = new Date(message.created_at);
    return date.toLocaleTimeString("en-EN", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div
      className={`Message__wrapper ${
        participantId === userId ? "Message-user" : "Message-sender"
      }`}
      data-testid="Message"
    >
      <p className="Message__content">{message.content}</p>
      <p className="Message__timestamp">{test()}</p>
    </div>
  );
};

export default Message;
