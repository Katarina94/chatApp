import { useEffect } from "react";
import { useSelector } from "react-redux";

import conversationsActions from "store/actions/conversationsActions";
import { getConversations } from "store/selectors/conversationsSelectors";

export const useConversations = () => {
  useEffect(() => {
    conversationsActions.fetchCoversations();
  }, []);
  return useSelector(getConversations);
};
