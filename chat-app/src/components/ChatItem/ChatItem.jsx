import React from "react";
import { useSelector } from "react-redux";

/* Styles */
import "./ChatItem.scss";

/* Selectors */
import { getConversationId } from "store/selectors/messagesSelectors";

/*Actions */
import messagesActions from "store/actions/messagesActions";

const ChatItem = ({ conversation }) => {
  const { participants, id } = conversation;
  const participant = participants[1];

  const selectedChatId = useSelector(getConversationId);

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

export default ChatItem;
