export const ADD_USER = 'ADD_USER';
export const APPLY_USER = 'APPLY_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const UPDATE_USERS = 'UPDATE_USERS';

export interface AddUserAction {
    type: typeof ADD_USER;
    name: string;
}

export interface RemoveUserAction {
    type: typeof REMOVE_USER;
    name: string;
}

interface ApplyUserObject {
    userName: string;
    roomId: null | number;
}
export interface ApplyUserAction {
    type: typeof APPLY_USER;
    payload: ApplyUserObject;
}

interface User {
    name: string;
}
export interface UpdateUsersAction {
    type: typeof UPDATE_USERS;
    payload: User[];
}

export type UserActionTypes = AddUserAction | RemoveUserAction | ApplyUserAction | UpdateUsersAction;
