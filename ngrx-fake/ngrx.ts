// * Nuestra librería 'fake' de ngRx

export interface Action {
    type: string;
    payload?: any;
}

export interface Reducer<T> {
    (state: T, action: Action): T
}