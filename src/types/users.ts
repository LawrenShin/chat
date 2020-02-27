export enum ActionType {
    ADD_USER = 'ADD_USER',
    APPLY_USER = 'APPLY_USER',
    REMOVE_USER = 'REMOVE_USER',
    UPDATE_USERS = 'UPDATE_USERS',
}

/* payload types */

export interface ApplyUserObject {
    userName: string;
    roomId: null | number;
}

export interface User {
    name: string;
}

/* action types */

export interface AddUserAction {
    type: ActionType.ADD_USER;
    name: string;
}

export interface RemoveUserAction {
    type: ActionType.REMOVE_USER;
    name: string;
}

export interface ApplyUserAction {
    type: ActionType.APPLY_USER;
    payload: ApplyUserObject;
}

export interface UpdateUsersAction {
    type: ActionType.UPDATE_USERS;
    payload: User[];
}

export type UserActionTypes = AddUserAction | RemoveUserAction | ApplyUserAction | UpdateUsersAction;
