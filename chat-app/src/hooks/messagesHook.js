import { useEffect } from "react";
import { useSelector } from "react-redux";

import messagesActions from "store/actions/messagesActions";
import { getMessages } from "store/selectors/messagesSelectors";

export const useMessages = (id) => {
  useEffect(() => {
    messagesActions.fetchMessages(id);
  }, [id]);
  return useSelector(getMessages);
};
