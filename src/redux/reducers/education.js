import { initialEducation } from "../states/education";


const educationReducer = (state = initialEducation, action) => {
    switch (action.type) {
        case 'school name':
            return {
                ...state,
                schoolName: action.payload
            }

        case 'school city':
            return {
                ...state,
                schoolCity: action.payload
            }

        case 'school country':
            return {
                ...state,
                schoolCountry: action.payload
            }

        case 'degree':
            return {
                ...state,
                degree: action.payload
            }

        case 'graduation date month':
            {
                let newState = { ...state }
                newState.graduationDate[0] = action.payload
                return newState
            }
        case 'graduation date year':
            {
                let newState = { ...state }
                newState.graduationDate[1] = action.payload
            }
        default:
            return state 
    }
}


export { educationReducer };