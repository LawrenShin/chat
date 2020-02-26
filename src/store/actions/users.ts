import {AppActions} from '../../types';
import {ApplyUserObject, UPDATE_USERS, User} from '../../types/users';

export const addUser = (name: string): AppActions => ({
    type: 'ADD_USER',
    name,
});

export const removeUser = (name: string): AppActions => ({
    type: 'REMOVE_USER',
    name,
});

export const applyUser = (obj: ApplyUserObject): AppActions => ({
    type: 'APPLY_USER',
    payload: obj,
});

export const updateUsers = (arr: User[]): AppActions => ({
   type: 'UPDATE_USERS',
   payload: arr,
});
