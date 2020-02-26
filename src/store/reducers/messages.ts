import { ADD_MESSAGE, MESSAGE_RECEIVED, Message, MessageActionsTypes } from "../../types/messages";

const initialState = [{
    id: 0,
    when: new Date(),
    author: 'system',
    message: 'Start typing pls',
}];

const messagesInitialState: Message[] = initialState;

const messagesReducer = (state = messagesInitialState, action: MessageActionsTypes): Message[] => {
    const { type } = action;

    if(type === ADD_MESSAGE){
        return state;
    }

    if(type === MESSAGE_RECEIVED){
        return [ ...state, { ...action.message } ];
    }

    return state;
};

export default messagesReducer;
