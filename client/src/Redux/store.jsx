import { combineReducers, configureStore } from "@reduxjs/toolkit"
import * as User from "./Reducers/userReduces"

const rootReducer = combineReducers ({
    //USER REDUCERS
    userLogin: User.userLoginReducer,
    userRegister: User.userRegisterReducer,
});

// userInfo desde el local storage

const userInfoFromStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: null;


const initialState = {
    userLogin: {userInfo: userInfoFromStorage},
};

export const store = configureStore({
    reducer: rootReducer, 
    preloadedState : initialState,
});

