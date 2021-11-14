const initialState = {
    datos: []
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "getData":
            return { ...state, datos: action.payload }
        default:
            return state;
    }
}