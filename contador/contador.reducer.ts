import { Action } from "../ngrx-fake/ngrx";

export function reducer(state = 10, action: Action) {

    //* Cuando sólo tenemos un case, podemos usar un if
    // if (action.type === 'INCREMENTAR') {
    //     return state += 1;
    // }

    //* Para más de un case, usamos un switch
    switch (action.type) { 
        case 'INCREMENTAR':
            return state += 1;

        case 'REDUCIR':
            return state -= 1;

        case 'MULTIPLICAR':
            return state * action.payload;

        case 'DIVIDIR':
            return state / action.payload;

        case 'RESET':
                return state = 0;
        
        default:
            return state;
    }

}