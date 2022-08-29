const AUTH_ME = "AUTH-ME"

type StateType = {
}

const initialState: StateType ={};

type AuthACType = {
    type: "AUTH-ME"
}

export type authActionType = AuthACType;
export const authReducer = (state=initialState, action: authActionType):StateType => {
    switch (action.type){
        case "AUTH-ME": {
            return {...state}
        }
        default:{
            return state;
        }

    }
}

const AuthAC = (): AuthACType => {
    return ({
        type: AUTH_ME
    })
}