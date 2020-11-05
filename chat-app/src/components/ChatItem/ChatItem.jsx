import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

/* Styles */
import "./ChatItem.scss";

/* Selectors */
import { getConversationId } from "store/selectors/messagesSelectors";

/*Actions */
import messagesActions from "store/actions/messagesActions";

const ChatItem = ({ conversation }) => {
  const selectedChatId = useSelector(getConversationId);

  if (!conversation) return null;

  const { participants, id } = conversation;
  const participant = participants[1];

  const isSelected = () => {
    return selectedChatId === id;
  };

  const onChatSelect = () => {
    messagesActions.fetchMessages(id, participant);
  };

  return (
    <div
      className={`ChatItem${isSelected() ? " ChatItem-selected" : ""}`}
      onClick={onChatSelect}
    >
      <img
        src={participant.avatar_url}
        alt="User Avatar"
        className={"ChatItem__avatar"}
      />
      <p className={"ChatItem__user-name"}>
        {participant.first_name} {participant.last_name}
      </p>
    </div>
  );
};

ChatItem.propTypes = {
  conversation: PropTypes.shape({
    id: PropTypes.string,
    messages_url: PropTypes.string,
    participants: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        avatar_url: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
      })
    ),
  }),
};

ChatItem.defaultProps = {
  conversation: {},
};

export default ChatItem;
