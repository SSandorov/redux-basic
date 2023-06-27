import { Store, legacy_createStore as createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './contador/contador.reducer';
import { incrementadorAction } from './contador/contador.actions';

const store: Store = createStore( reducer );

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementadorAction);