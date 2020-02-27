import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import messagesReducer from "./reducers/messages";
import usersReducer from "./reducers/users";

export const rootReducer = combineReducers({
   messages: messagesReducer,
   users: usersReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
