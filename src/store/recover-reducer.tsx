const RECOVER = "RECOVER"

type StateType = {}

const initialState: StateType = {};

type RecoverACType = {
    type: "RECOVER"
}

export type recoverActionType = RecoverACType;
export const recoverReducer = (state = initialState, action: recoverActionType): StateType => {
    switch (action.type) {
        case "RECOVER": {
            return {...state}
        }
        default: {
            return state;
        }

    }
}

const RecoverAC = (): RecoverACType => {
    return ({
        type: RECOVER
    })
}