import { initialExperience } from '../states/experience';

const experienceReducer = (state = initialExperience, action) => {
    switch (action.type) {
        case 'job':
            return {
                ...state,
                job: action.payload
            }
        case 'company':
            return {
                ...state,
                company: action.payload
            }
        case 'city':
            return {
                ...state,
                city: action.payload
            }
        case 'country':
            return {
                ...state,
                country: action.payload
            }
        case 'start date month':
            {
                let newState = {...state} ;
                newState.startDate[0] = action.payload
                // console.log(newState) ;
                return newState
            }
        case 'start date year':
            {
                let newState = {...state} ;
                newState.startDate[1] = action.payload
                return newState
            }
        case 'end date month':
            {
                let newState = {...state} ;
                newState.endDate[0] = action.payload
                return newState
            }
        case 'end date year':
            {
                let newState = {...state} ;
                newState.endDate[1] = action.payload
                return newState
            }
        default:
            return state
    }
}

export { experienceReducer };