import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

/* Styles */
import "./Message.scss";

/* Selectors */
import { getMessageParticipantId } from "store/selectors/messagesSelectors";
import { getUserId } from "store/selectors/userSelectors";
import { getDateAndTime } from "../../helpers/getDateAndTime";

const Message = ({ message, index }) => {
  const participantId = useSelector(getMessageParticipantId(index));
  const userId = useSelector(getUserId);

  console.log("message", message);
  console.log("index", index);

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

Message.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.string,
    created_at: PropTypes.string,
    content: PropTypes.string,
    participant: PropTypes.shape({
      id: PropTypes.string,
      avatar_url: PropTypes.string,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
    }),
  }),
  index: PropTypes.number,
};

Message.defaultProps = {
  message: {},
  index: 0,
};

export default Message;
