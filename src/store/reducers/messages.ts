import { Action } from 'redux';
import { Message } from '../../types/messages';

interface MessagesState {
    messages: Message[];
}

const initialState = {
    messages: [{
        id: 0,
        when: new Date(),
        author: 'system',
        message: 'Start typing pls',
    }]
};

const messagesReducer = (state = initialState, action: Action):MessagesState => {


    return state;
};

export default messagesReducer;
