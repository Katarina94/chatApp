import { useEffect } from "react";
import { useSelector } from "react-redux";

import userActions from "store/actions/userActions";
import { getUser } from "store/selectors/userSelectors";

export const useGetUser = () => {
  useEffect(() => {
    userActions.fetchUser();
  }, []);
  return useSelector(getUser);
};
