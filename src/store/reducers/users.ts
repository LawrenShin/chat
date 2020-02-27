import {ActionType, User, UserActionTypes} from "../../types/users";

const usersInitialState: User[] = [];

const usersReducer = (state = usersInitialState, action: UserActionTypes):User[] => {
    if (action.type === ActionType.ADD_USER) {
        return [ ...state, { name: action.name } ];
    }

    if (action.type === ActionType.REMOVE_USER) {
        return state.filter(user => user.name !== action.name);
    }

    if (action.type === ActionType.UPDATE_USERS) {
        return action.payload;
    }

    return state;
};

export default usersReducer;