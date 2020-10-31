import React from "react";
import { useSelector } from "react-redux";

/* Styles */
import "./ConversationItem.scss";

/* Components */
import Button from "components/Button/Button";

import { getConversationId } from "store/selectors/messagesSelectors";
import messagesActions from "store/actions/messagesActions";

const ConversationItem = ({ conversation }) => {
  const { participants, id } = conversation;
  const participant = participants[1];

  const selectedChatId = useSelector(getConversationId);

  const isSelected = () => {
    return selectedChatId === id;
  };

  const onChatSelect = () => {
    messagesActions.fetchMessages(id);
  };

  return (
    <div
      className={
        isSelected() ? "ConversationItem-selected" : "ConversationItem"
      }
      data-testid="conversation-item"
      onClick={onChatSelect}
    >
      <img
        src={participant.avatar_url}
        alt="User Avatar"
        className={"ConversationItem__avatar"}
      />
      <p className={"ConversationItem__user-name"}>
        {participant.first_name} {participant.last_name}
      </p>
    </div>
  );
};

export default ConversationItem;
