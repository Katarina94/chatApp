import React from "react";

/* Styles */
import "./Sidebar.scss";

/* Components */
import ConversationItem from "components/ConversationItem/ConversationItem";

/* Hooks */
import { useConversations } from "hooks/conversationsHook";

const Sidebar = () => {
  const conversations = useConversations();
  if (!conversations) return null;
  return (
    <div className="Sidebar">
      <div className="Sidebar__wrapper">
        {conversations.map((conversation) => (
          <ConversationItem conversation={conversation} key={conversation.id} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
