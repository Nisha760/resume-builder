import { combineReducers } from 'redux';
import { contactReducer } from './reducers/contact';
import { experienceReducer } from './reducers/experience';
import { educationReducer } from './reducers/education';
import { skillReducer } from './reducers/skill';
import { summaryReducer } from './reducers/summary';

const rootReducer = combineReducers(
    {
        contact: contactReducer,
        experience: experienceReducer,
        education: educationReducer,
        skills: skillReducer,
        summary: summaryReducer
    }
)

export { rootReducer }