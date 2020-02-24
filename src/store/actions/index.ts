import { MessageActionsTypes } from './messages';
import { SystemActionTypes } from './system';
import { UserActionTypes } from './users';

export type AppActions = MessageActionsTypes 
| SystemActionTypes 
| UserActionTypes;
