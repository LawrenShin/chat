import { Message } from '../../types/messages';
import { AppActions } from '../../types';

export const addMessage = (message: Message): AppActions => ({
   type: 'ADD_MESSAGE',
   message
});

export const messageRecieved = (message: Message): AppActions => ({
    type: 'MESSAGE_RECEIVED',
    message
});
