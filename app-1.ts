//* Acciones

//* El payload es un parámetro que podemos pasarle a la acción. Un ejemplo de 
//* esto es cuando queremos pasarle un id a la acción para que sepa qué elemento modificar.
interface Action {
    type: string;
    payload?: any;
}

//* El reducer es una función que recibe un estado y una acción y devuelve un nuevo estado.
//* El reducer es una función pura, es decir, que no debe tener efectos secundarios. Como ejemplo,
//* no podemos mandar a llamar una función asíncrona dentro del reducer
function reducer(state = 10, action: Action) {

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
        
        default:
            return state;
    }

    // ! El reducer siempre tiene que regresar un estado
    return state;
}

//* Usar el reducer

const incrementadorAction: Action = {
    type: 'INCREMENTAR'
}
const reductorAction: Action = {
    type: 'REDUCIR'
}
const multiplicadorAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
}
const divisorAction: Action = {
    type: 'DIVIDIR',
    payload: 2
}

console.log('INCREMENTADOR: ', reducer(10, incrementadorAction));
console.log('REDUCTOR: ', reducer(10, reductorAction));
console.log('MULTIPLICADOR: ', reducer(10, multiplicadorAction));
console.log('DIVISOR: ', reducer(10, divisorAction));