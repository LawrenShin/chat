import {ApplyUserObject, User, ActionType, AddUserAction, RemoveUserAction, ApplyUserAction, UpdateUsersAction} from '../../types/users';

export const addUser = (name: string): AddUserAction => ({
    type: ActionType.ADD_USER,
    name,
});

export const removeUser = (name: string): RemoveUserAction => ({
    type: ActionType.REMOVE_USER,
    name,
});

export const applyUser = (obj: ApplyUserObject): ApplyUserAction => ({
    type: ActionType.APPLY_USER,
    payload: obj,
});

export const updateUsers = (arr: User[]): UpdateUsersAction => ({
   type: ActionType.UPDATE_USERS,
   payload: arr,
});
