export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const ADD_MESSAGE = 'ADD_MESSAGE';

export interface Message {
    id: number;
    message: string;
    when: Date;
    author: string;
    path?: string;
}

export interface AddMessageAction {
    type: typeof ADD_MESSAGE;
    message: Message;
}

export interface MessageRecievedAction {
    type: typeof MESSAGE_RECEIVED;
    message: Message;
}

export type MessageActionsTypes = AddMessageAction | MessageRecievedAction;
