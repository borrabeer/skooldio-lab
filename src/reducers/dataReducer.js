import {GET_DATA, SET_DATA} from "../actions/types"

const initialState = {
    data: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DATA:
            return state
        case SET_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}