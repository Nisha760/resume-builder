import { initialContact } from "../states/contact";

const contactReducer = (state = initialContact, action) => {
    switch (action.type) {
        case 'name':
            return {
                ...state,
                name: action.payload
            }
        case 'email':
            return {
                ...state,
                email: action.payload
            }
        default:
            return state
    }
}

export { contactReducer }