import { reducer } from "./contador/contador.reducer";
import { incrementadorAction, resetAction } from "./contador/contador.actions";

console.log('INCREMENTAR: ', reducer(10, incrementadorAction));

console.log('RESET: ', reducer(10, resetAction))