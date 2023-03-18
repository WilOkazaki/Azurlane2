import { 
    combineReducers,
    configureStore,
} from "@reduxjs/toolkit"

const rootReducer = combineReducers (
    {

    }
);

const initialState = {};

export const store = configureStore({
    reducer: rootReducer, 
    preloadedState : initialState,
});
