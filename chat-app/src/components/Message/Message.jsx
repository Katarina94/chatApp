import React from "react";
import { useSelector } from "react-redux";

/* Styles */
import "./Message.scss";

/* Selectors */
import { getMessageParticipantId } from "store/selectors/messagesSelectors";
import { getUserId } from "store/selectors/userSelectors";
import { getDateAndTime } from "../../helpers/getDateAndTime";

const Message = ({ message, index }) => {
  const participantId = useSelector(getMessageParticipantId(index));
  const userId = useSelector(getUserId);

  return (
    <div
      className={`Message__wrapper ${
        participantId === userId ? "Message-user" : "Message-participant"
      }`}
    >
      <p className="Message__content">{message.content}</p>
      <p className="Message__timestamp">{getDateAndTime(message.created_at)}</p>
    </div>
  );
};

export default Message;
