export interface Message {
    id: number;
    message: string;
    when: Date;
    author: string;
    path?: string;
}
