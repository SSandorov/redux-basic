import { incrementadorAction } from "./contador/contador.actions";
import { reducer } from "./contador/contador.reducer";
import { Action, Reducer } from "./ngrx-fake/ngrx";

// * El store es un objeto que contiene el estado de la aplicación
class Store<T> {
    // private state: T;

    constructor(private reducer: Reducer<T>, private state: T) {}

    // * getState() devuelve el estado actual de la aplicación
    getState() {
        return this.state;
    }

    // * dispatch() ejecuta una acción que modifica el estado de la aplicación
    dispatch(action: Action) {
        this.state = this.reducer(this.state, action);
    }
}

const store = new Store( reducer, 10 );


//* Como vemos, necesitamos crear un console log cada vez que queremos ver el valor, por lo que 
//* podemos empplear observables recibir una notificación cada vez que hayan cambios en el estado

console.log('Estado anterior: ', store.getState());

// * Aplicamos la acción
store.dispatch(incrementadorAction);

console.log('Estado actual: ', store.getState());