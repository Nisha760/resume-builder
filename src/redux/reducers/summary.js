import { initialSummary } from "../states/summary";

const summaryReducer = (state = initialSummary, action) => {
    switch (action.type) {
        case 'summary':
            return {
                summary: action.payload
            }
        default:
            return state
    }
}

export { summaryReducer };