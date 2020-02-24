export const SET_PATH = 'SET_PATH';

export interface SetPath {
    type: typeof SET_PATH;
    path: string;
}

export type SystemActionTypes = SetPath;
