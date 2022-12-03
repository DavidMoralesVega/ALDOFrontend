export interface Response<T> {
    isArray: boolean;
    path: string;
    duration: string;
    method: string;
    data: T;
}