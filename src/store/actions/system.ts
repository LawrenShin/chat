import { AppActions } from '../../types';

export const setPath = (path: string): AppActions => ({
   type: 'SET_PATH',
    path,
});