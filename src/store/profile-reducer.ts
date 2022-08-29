import { v1 } from "uuid"
const ADD_PROFILE = "ADD-PROFILE"

type StateType = {
}

const initialState: StateType ={};

type AddProfileACType = {
    type: "ADD-PROFILE"
}

export type profileActionType = AddProfileACType;
export const profileReducer = (state=initialState, action: profileActionType):StateType => {
    switch (action.type){
        case "ADD-PROFILE": {
            return {...state}
        }
        default:{
            return state;
        }

    }
}

const AddProfileActionCreator = (): AddProfileACType => {
    return ({
        type: ADD_PROFILE
    })
}
