const ADD_PROFILE = "ADD-PROFILE"

type StateType = {}

type AddProfileACType = ReturnType<typeof AddProfileActionCreator>
const initialState: StateType = {};

export type profileActionType = AddProfileACType;
export const profileReducer = (state = initialState, action: profileActionType): StateType => {
    switch (action.type) {
        case "ADD-PROFILE": {
            return {...state}
        }
        default: {
            return state;
        }
    }
}

const AddProfileActionCreator = () => {
    return ({
        type: ADD_PROFILE
    } as const)
}
