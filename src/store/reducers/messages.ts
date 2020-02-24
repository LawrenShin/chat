import { Action } from 'redux';
import { Message } from '../../types';

interface MessagesState {
    messages: Message[];
}

const messagesReducer = (state: MessagesState, action: Action) => {

}

export default messagesReducer;
