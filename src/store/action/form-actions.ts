import { AnyAction } from "@reduxjs/toolkit"
import { NAME_CHANGE } from "./action-types"

export const setName = (name: string): AnyAction => ({
    type: NAME_CHANGE,
    payload: name
})