import store from "store/index";

import { getUser } from "conversation-echo-api/getUser";
import * as actionCreators from "store/actionCreators/userActionCreators";

const { dispatch } = store;

const fetchUser = async () => {
  dispatch(actionCreators.fetchUserAction());
  try {
    const response = await getUser();
    dispatch(actionCreators.fetchUserSuccessAction(response));
  } catch (error) {
    dispatch(actionCreators.fetchUserFailAction(error));
  }
};

export default {
  fetchUser,
};
