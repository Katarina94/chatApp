import React from "react";
import { useSelector } from "react-redux";

/* Styles */
import "./Sidebar.scss";

/* Components */
import ChatItem from "components/ChatItem";

/* Hooks */
import { useConversations } from "hooks/conversationsHook";

/* Selectors */
import { isConversationSelected } from "store/selectors/messagesSelectors";

const Sidebar = () => {
  const conversations = useConversations();
  const conversationOpen = useSelector(isConversationSelected);
  if (!conversations) return null;
  return (
    <div className={`Sidebar${!conversationOpen ? "" : " Sidebar-selected"}`}>
      <div className="Sidebar__wrapper">
        {conversations.map((conversation) => (
          <ChatItem conversation={conversation} key={conversation.id} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
