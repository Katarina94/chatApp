import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createRootReducer, {
  initialState as appInitialState,
} from "./reducers/rootReducer";
import thunk from "redux-thunk";

function createStore(initialState = appInitialState) {
  const rootReducer = createRootReducer();
  const store = configureStore({
    reducer: rootReducer,
    initialState,
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
      thunk,
    ],
  });
  return { store };
}

const { store } = createStore();

export default store;

export { createStore };
