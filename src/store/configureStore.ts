import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import messagesReducer from "./reducers/messages";

export const rootReducer = combineReducers({
   messages: messagesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
