// * Acciones

// * El payload es un parámetro que podemos pasarle a la acción. Un ejemplo de 
// * esto es cuando queremos pasarle un id a la acción para que sepa qué elemento modificar.
interface Action {
    type: string;
    payload?: any;
}

// * El reducer es una función que recibe un estado y una acción y devuelve un nuevo estado.
function reducer(state = 10, action: Action) {

    if (action.type === 'INCREMENTAR') {
        return state += 1;
    }

    // ! El reducer siempre tiene que regresar un estado
    return state;
}

// Usar el reducer

const incrementadorAction: Action = {
    type: 'INCREMENTAR'
}

console.log(reducer(10, incrementadorAction));