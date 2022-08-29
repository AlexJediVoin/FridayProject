import {applyMiddleware, combineReducers, createStore, legacy_createStore} from "redux";
import {ThunkAction} from "redux-thunk";
import thunkMiddleware from 'redux-thunk'
import {profileActionType, profileReducer} from "./profile-reducer";
import {authReducer} from "./auth-reducer";
import {recoverReducer} from "./recover-reducer";

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;

const reducers = combineReducers({
    profilePage: profileReducer,
    auth: authReducer,
    recover: recoverReducer,
})

export type AppActionType = profileActionType;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    AppStateType,
    unknown,
    AppActionType>

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
