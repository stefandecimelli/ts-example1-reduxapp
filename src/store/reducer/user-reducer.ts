import { AnyAction } from "@reduxjs/toolkit";
import { NAME_CHANGE } from "../action/action-types";

const initialState = {}

export default function userReducer(state = initialState, action: AnyAction): Object {
    switch (action?.type) {
        case NAME_CHANGE:
            return changeUserName(state, action.payload);
        default:
            return state;
    }
}

function changeUserName(state: Object, newName: string) {
    return {
        ...state,
        name: newName
    }
}
